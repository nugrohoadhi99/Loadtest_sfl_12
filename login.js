import http from "k6/http";
import { check, sleep } from "k6";

// //RAMPnya
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
    login_only: {
      executor: "constant-vus",
      vus: 500,
      duration: "3m",
      gracefulStop: "30s",
    },
  },
  thresholds: {
    http_req_failed: ["rate<0.02"],
    http_req_duration: ["p(95)<4000"],
    "http_reqs{name:api_login}": ["count>0"],
  },
};

const API_BASE = "https://api-dev.sejutacita.id";
const COMMON_HEADERS = { "Content-Type": "application/json" };

const LOGIN_BODY = JSON.stringify({
  email: "jsmoney4u@ecoverseworld.com",
  password: "1234567890",
  platform: "hris_employer_web",
});

export default function () {
  const res = http.post(`${API_BASE}/v1/login/email`, LOGIN_BODY, {
    headers: COMMON_HEADERS,
    tags: { name: "api_login" },
    timeout: "60s",
  });

  check(res, { "login http 200": (r) => r.status === 200 });

  sleep(1);
}
