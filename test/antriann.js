import http from "k6/http";
import { check, sleep, group } from "k6";
import { users } from "../user_test.js";

/**
 * MODE:
 * - STRICT_ONE_TO_ONE = true  -> 1 VU = 1 user unik, kalau user kurang VU akan stop
 * - STRICT_ONE_TO_ONE = false -> user akan di-loop (reuse) kalau user kurang dari VU
 */
const STRICT_ONE_TO_ONE = false; // ✅ untuk kasus kamu: 1 user tapi VU 500

export const options = {
  scenarios: {
    sfl_real_users: {
      executor: "constant-vus",
      vus: 500,
      duration: "5m",
      gracefulStop: "30s",
    },
  },
  thresholds: {
    http_req_failed: ["rate<0.02"],
    http_req_duration: ["p(95)<15000"],

    "http_req_duration{name:api_sign_in}": ["p(95)<8000"],
    "http_req_duration{name:fe_sign-in}": ["p(95)<10000"],
    "http_req_duration{name:fe_landing-sfl}": ["p(95)<8000"],
    "http_req_duration{name:fe_dashboard-sfl-12}": ["p(95)<8000"],
    "http_req_duration{name:fe_waiting-room}": ["p(95)<8000"],
    "http_req_duration{name:fe_quiz-room}": ["p(95)<8000"],
  },
};

const API_BASE = "https://api-dev.sejutacita.id";
const FE_BASE = "https://talent-dev.dealls.com";
const quizUUID = "5f5d2f66-654f-4389-bcd5-fa91465d1429";

const MAX_LOG_VU = 20;

function getUser() {
  if (!users || users.length === 0) return null;

  // strict 1:1 (no looping)
  if (STRICT_ONE_TO_ONE) {
    const idx = __VU - 1;
    if (idx >= users.length) return null;
    return { ...users[idx], idx };
  }

  // looping / reuse users
  const idx = (__VU - 1) % users.length;
  return { ...users[idx], idx };
}

// =======================
// FE PARAMS (AUTH)
// =======================
const baseFeHeaders = {
  "User-Agent": "k6-sfl-loadtest",
  Accept: "text/html",
};

function paramsWithName(name, userIdx, authHeader) {
  return {
    headers: {
      ...baseFeHeaders,
      Authorization: authHeader, 
      "X-K6-VU": String(__VU),
      "X-K6-USER-SLOT": String(userIdx),
    },
    redirects: 5,
    tags: { name, user_slot: String(userIdx), vu: String(__VU) },
  };
}

function ok(res) {
  return res.status >= 200 && res.status < 400;
}

function mustBeLoggedInPage(res) {
  const finalUrl = String(res.url || "");
  const loc = String(res.headers?.Location || "");
  return ok(res) && !finalUrl.includes("/sign-in") && !loc.includes("/sign-in");
}

//vu
let authHeader;

function loginAndGetToken(user) {
  const body = JSON.stringify({
    email: user.email,
    password: user.password,
    platform: "hris_employer_web",
  });

  
  for (let attempt = 1; attempt <= 2; attempt++) {
    const res = http.post(`${API_BASE}/v1/login/email`, body, {
      headers: { "Content-Type": "application/json" },
      tags: { name: "api_sign_in", user_slot: String(user.idx), vu: String(__VU) },
      timeout: "120s",
    });

    if (res && res.status === 200) {
      let data;
      try {
        data = res.json();
      } catch {
        data = null;
      }

      const token = data?.data?.tokenData?.token;
      const tokenType = data?.data?.tokenData?.tokenType || "Bearer";

      if (token) return `${tokenType} ${token}`;
    }

    sleep(0.5);
  }

  return null;
}

//main
export default function () {
  const user = getUser();
  if (!user) return;

  // login 1x per VU
  if (!authHeader) {
    authHeader = loginAndGetToken(user);
    if (!authHeader) {
      if (__VU <= MAX_LOG_VU) console.log(`VU ${__VU} login=FAIL`);
      return;
    }
  }

  group("SFL FE FLOW (AUTH)", () => {
    const r1 = http.get(`${FE_BASE}/sign-in`, paramsWithName("fe_sign-in", user.idx, authHeader));
    const r2 = http.get(`${FE_BASE}/sfl`, paramsWithName("fe_landing-sfl", user.idx, authHeader));
    const r3 = http.get(`${FE_BASE}/sfl/login/12`, paramsWithName("fe_dashboard-sfl-12", user.idx, authHeader));
    const r4 = http.get(`${FE_BASE}/sfl/quiz/12/wait/quiz-second-battle`, paramsWithName("fe_waiting-room", user.idx, authHeader));
    const r5 = http.get(`${FE_BASE}/sfl/quiz/12/quiz-second-battle/${quizUUID}`, paramsWithName("fe_quiz-room", user.idx, authHeader));

    check(r1, { "fe_sign-in ok": ok }); // sign-in boleh tampil
    check(r2, { "fe_landing ok+auth": mustBeLoggedInPage });
    check(r3, { "fe_dashboard ok+auth": mustBeLoggedInPage });
    check(r4, { "fe_waiting ok+auth": mustBeLoggedInPage });
    check(r5, { "fe_quiz-room ok+auth": mustBeLoggedInPage });

    if (__VU <= MAX_LOG_VU) {
      console.log(
        `VU ${__VU} user=${user.email} r1=${r1.status} r2=${r2.status} r3=${r3.status} r4=${r4.status} r5=${r5.status}`
      );
    }
  });

  sleep(1);
}
