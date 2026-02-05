import http from "k6/http";
import { check, sleep, group } from "k6";
import { users } from "../users.js";

export const options = {
  scenarios: {
    sfl_real_users: {
      executor: "constant-vus",
      vus: 21,          
      duration: "3m",
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

// ✅ strict: no looping
function getUser() {
  const idx = __VU - 1;
  if (idx >= users.length) return null;
  return { ...users[idx], idx };
}

const baseFeHeaders = {
  "User-Agent": "k6-sfl-loadtest",
  Accept: "text/html",
};

function paramsWithName(name, userIdx, authHeader) {
  return {
    headers: {
      ...baseFeHeaders,
      Authorization: authHeader, // ✅ Bearer dari login
    },
    redirects: 5,
    tags: { name, user_slot: String(userIdx) },
  };
}

// cache token per VU (tiap VU beda)
let authHeader;

function loginAndGetToken(user) {
  const body = JSON.stringify({
    email: user.email,
    password: user.password,
    platform: "hris_employer_web",
  });

  const res = http.post(`${API_BASE}/v1/login/email`, body, {
    headers: { "Content-Type": "application/json" },
    tags: { name: "api_sign_in" },
    timeout: "60s",
  });

  check(res, { "api_sign_in status 200": (r) => r.status === 200 });
  if (res.status !== 200) return null;

  let data;
  try {
    data = res.json();
  } catch {
    return null;
  }

  const token = data?.data?.tokenData?.token;
  const tokenType = data?.data?.tokenData?.tokenType || "Bearer";

  check(res, { "api_sign_in token exists": () => !!token });
  if (!token) return null;

  return `${tokenType} ${token}`;
}

export default function () {
  const user = getUser();
  if (!user) return;

  // ✅ login 1x per VU lalu token dipakai di semua request berikutnya
  if (!authHeader) {
    authHeader = loginAndGetToken(user);
    if (!authHeader) return;
  }

  group("SFL FE FLOW (AUTH)", () => {
    const ok = (r) => r.status >= 200 && r.status < 400;

    const r1 = http.get(
      `${FE_BASE}/sign-in`,
      paramsWithName("fe_sign-in", user.idx, authHeader)
    );
    check(r1, { "fe_sign-in ok": ok });

    const r2 = http.get(
      `${FE_BASE}/sfl`,
      paramsWithName("fe_landing-sfl", user.idx, authHeader)
    );
    check(r2, { "fe_landing ok": ok });

    const r3 = http.get(
      `${FE_BASE}/sfl/login/12`,
      paramsWithName("fe_dashboard-sfl-12", user.idx, authHeader)
    );
    check(r3, { "fe_dashboard ok": ok });

    const r4 = http.get(
      `${FE_BASE}/sfl/quiz/12/wait/quiz-second-battle`,
      paramsWithName("fe_waiting-room", user.idx, authHeader)
    );
    check(r4, { "fe_waiting ok": ok });

    const r5 = http.get(
      `${FE_BASE}/sfl/quiz/12/quiz-second-battle/${quizUUID}`,
      paramsWithName("fe_quiz-room", user.idx, authHeader)
    );
    check(r5, { "fe_quiz-room ok": ok });
  });

  sleep(1);
}
