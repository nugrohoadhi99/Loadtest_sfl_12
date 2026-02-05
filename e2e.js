import http from "k6/http";
import { check, sleep } from "k6";

// //RAMP nya
// export const options = {
//   scenarios: {
//     ramp_quiz_users: {
//       executor: "ramping-vus",
//       startVUs: 0,
//       stages: [
//         { duration: "1m", target: 100 },
//         { duration: "1m", target: 1000 },
//         { duration: "1m", target: 2000 },
//         { duration: "1m", target: 0 },
//       ],
//       gracefulRampDown: "30s",
//       gracefulStop: "30s",
//     },
//   },
//   thresholds: {
//     http_req_failed: ["rate<0.02"],
//     http_req_duration: ["p(95)<4000"],
//   },
// };

export const options = {
  scenarios: {
    full_e2e: {
      executor: "constant-vus",
      vus: 5,
      duration: "10s",
      gracefulStop: "30s",
    },
  },
  thresholds: {
    "http_req_failed{ignore_error:true}": ["rate>=0"],
    "http_req_failed{ignore_error:false}": ["rate<0.02"],
    http_req_duration: ["p(95)<4000"],

    "http_reqs{name:api_login}": ["count>0"],
    "http_reqs{name:fe_sign-in}": ["count>0"],
    "http_reqs{name:fe_landing}": ["count>0"],
    "http_reqs{name:fe_dashboard-12}": ["count>0"],
    "http_reqs{name:fe_quiz-wait}": ["count>0"],
    "http_reqs{name:fe_quiz-room}": ["count>0"],
    "http_reqs{name:fe_finish}": ["count>0"],
  },
};

const API_BASE = "https://api-dev.sejutacita.id";
const FE_BASE = "https://talent-dev.dealls.com";

const LOGIN_BODY = JSON.stringify({
  email: "risa.developmentest1@gmail.com",
  password: "devtest123!",
  platform: "hris_employer_web",
});

const COMMON_HEADERS = { "Content-Type": "application/json" };
const quizUUID = "5f5d2f66-654f-4389-bcd5-fa91465d1429";

// token per VU
let authHeader;

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

export default function () {
  // login sekali per VU
  if (!authHeader) {
    authHeader = loginAndGetToken();
    if (!authHeader) return;
  }

  // FE pages (no Authorization header for HTML)
  let res = http.get(`${FE_BASE}/sign-in`, {
    tags: { name: "fe_sign-in", ignore_error: "true" },
  });
  check(res, { "fe_sign-in ok (2xx-3xx)": (r) => r.status >= 200 && r.status < 400 });

  res = http.get(`${FE_BASE}/sfl`, {
    tags: { name: "fe_landing", ignore_error: "false" },
  });
  check(res, { "fe_landing ok (2xx-3xx)": (r) => r.status >= 200 && r.status < 400 });

  res = http.get(`${FE_BASE}/sfl/login/12`, {
    tags: { name: "fe_dashboard-12", ignore_error: "false" },
  });
  check(res, { "fe_dashboard ok (2xx-3xx)": (r) => r.status >= 200 && r.status < 400 });

  res = http.get(`${FE_BASE}/sfl/quiz/12/wait/quiz-second-battle`, {
    tags: { name: "fe_quiz-wait", ignore_error: "false" },
  });
  check(res, { "fe_quiz-wait ok (2xx-3xx)": (r) => r.status >= 200 && r.status < 400 });

  res = http.get(`${FE_BASE}/sfl/quiz/12/quiz-second-battle/${quizUUID}`, {
    tags: { name: "fe_quiz-room", ignore_error: "false" },
  });
  check(res, { "fe_quiz-room ok (2xx-3xx)": (r) => r.status >= 200 && r.status < 400 });

  res = http.get(`${FE_BASE}/sfl/quiz/12/finish`, {
    tags: { name: "fe_finish", ignore_error: "false" },
  });
  check(res, { "fe_finish ok (2xx-3xx)": (r) => r.status >= 200 && r.status < 400 });

  sleep(1);
}
