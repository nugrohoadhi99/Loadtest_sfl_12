import http from "k6/http";
import { check, sleep, group } from "k6";


import { users } from "../users.js";

export const options = {
  scenarios: {
    sfl_real_users: {
      executor: "constant-vus",
      vus: 21,
      duration: "2m",
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

function getUser() {
  // const idx = (__VU - 1) % users.length;
  // return { ...users[idx], idx };
  const idx = __VU - 1;

  if (idx >= users.length) {
    return null; //hbs lg out
  }

  return { ...users[idx], idx };
}


const pageHeaders = {
  headers: {
    "User-Agent": "k6-sfl-loadtest",
    Accept: "text/html",
  },
  redirects: 5,
};

function paramsWithName(name, userIdx) {
  return {
    ...pageHeaders,
    tags: { name, user_slot: String(userIdx) },
  };
}

// cache token per VU
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

  if (!user) return; // ← FIX penting

  if (!authHeader) {
    authHeader = loginAndGetToken(user);
    if (!authHeader) return;
  }

  group("SFL FE FLOW", () => {
    const r1 = http.get(`${FE_BASE}/sign-in`, paramsWithName("fe_sign-in", user.idx));
    check(r1, { "fe_sign-in reachable": (r) => r.status > 0 });

    const r2 = http.get(`${FE_BASE}/sfl`, paramsWithName("fe_landing-sfl", user.idx));
    check(r2, { "fe_landing reachable": (r) => r.status > 0 });

    const r3 = http.get(`${FE_BASE}/sfl/login/12`, paramsWithName("fe_dashboard-sfl-12", user.idx));
    check(r3, { "fe_dashboard reachable": (r) => r.status > 0 });

  
  });

  sleep(1);
}

