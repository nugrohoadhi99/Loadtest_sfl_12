import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  scenarios: {
    load_quiz_users: {
      executor: "constant-vus",
      vus: 500,
      duration: "3m",
      gracefulStop: "30s",
    },
  },
  thresholds: {
    // ✅ Ignore failures for requests tagged ignore_error:true (only /sign-in)
    "http_req_failed{ignore_error:true}": ["rate>=0"],

    // ✅ Enforce error rate for everything else
    "http_req_failed{ignore_error:false}": ["rate<0.02"],

    // ✅ Performance SLA
    http_req_duration: ["p(95)<4000"],

    // ✅ Ensure each step is actually hit
    "http_reqs{name:fe_sign-in}": ["count>0"],
    "http_reqs{name:fe_landing}": ["count>0"],
    "http_reqs{name:fe_dashboard-12}": ["count>0"],
    "http_reqs{name:fe_quiz-wait}": ["count>0"],
    "http_reqs{name:fe_quiz-room}": ["count>0"],
    "http_reqs{name:fe_finish}": ["count>0"],
  },
};

// =======================
// CONSTANTS
// =======================
const API_BASE = "https://api-dev.sejutacita.id";
const FE_BASE = "https://talent-dev.dealls.com";

const LOGIN_BODY = JSON.stringify({
  email: "risa.developmentest1@gmail.com",
  password: "devtest123!",
  platform: "hris_employer_web",
});

const COMMON_HEADERS = {
  "Content-Type": "application/json",
};

// =======================
// LOGIN (PER VU)
// =======================
function loginAndGetToken() {
  const res = http.post(`${API_BASE}/v1/login/email`, LOGIN_BODY, {
    headers: COMMON_HEADERS,
    tags: { name: "api_login", ignore_error: "false" },
    timeout: "60s",
  });

  check(res, { "login http 200": (r) => r.status === 200 });
  if (res.status !== 200) return null;

  let data;
  try {
    data = res.json();
  } catch {
    return null;
  }

  const token = data?.data?.tokenData?.token;
  const tokenType = data?.data?.tokenData?.tokenType || "Bearer";

  check(res, { "login token exists": () => !!token });
  if (!token) return null;

  return `${tokenType} ${token}`;
}

// =======================
// TOKEN PER VU (CACHE)
// =======================
let authHeader;

// =======================
// MAIN TEST
// =======================
export default function () {
  // 🔐 LOGIN SEKALI PER VU
  if (!authHeader) {
    authHeader = loginAndGetToken();
    if (!authHeader) return;
  }

  // =======================
  // FE FLOW (HTML REQUEST)
  // =======================

  // 1) Sign In (⚠️ often protected/redirected; ignore_error:true so it won't fail the whole test)
  let res = http.get(`${FE_BASE}/sign-in`, {
    tags: { name: "fe_sign-in", ignore_error: "true" },
  });
  check(res, { "fe_sign-in ok (2xx-3xx)": (r) => r.status >= 200 && r.status < 400 });

  // 2) Landing
  res = http.get(`${FE_BASE}/sfl`, {
    tags: { name: "fe_landing", ignore_error: "false" },
  });
  check(res, { "fe_landing ok (2xx-3xx)": (r) => r.status >= 200 && r.status < 400 });

  // 3) Dashboard SFL 12
  res = http.get(`${FE_BASE}/sfl/login/12`, {
    tags: { name: "fe_dashboard-12", ignore_error: "false" },
  });
  check(res, { "fe_dashboard ok (2xx-3xx)": (r) => r.status >= 200 && r.status < 400 });

  // 4) Waiting Room
  res = http.get(`${FE_BASE}/sfl/quiz/12/wait/quiz-second-battle`, {
    tags: { name: "fe_quiz-wait", ignore_error: "false" },
  });
  check(res, { "fe_quiz-wait ok (2xx-3xx)": (r) => r.status >= 200 && r.status < 400 });

  // 5) Quiz Room
  const quizUUID = "5f5d2f66-654f-4389-bcd5-fa91465d1429";
  res = http.get(`${FE_BASE}/sfl/quiz/12/quiz-second-battle/${quizUUID}`, {
    tags: { name: "fe_quiz-room", ignore_error: "false" },
  });
  check(res, { "fe_quiz-room ok (2xx-3xx)": (r) => r.status >= 200 && r.status < 400 });

  // 6) Finish Quiz
  res = http.get(`${FE_BASE}/sfl/quiz/12/finish`, {
    tags: { name: "fe_finish", ignore_error: "false" },
  });
  check(res, { "fe_finish ok (2xx-3xx)": (r) => r.status >= 200 && r.status < 400 });

  sleep(1);
}
