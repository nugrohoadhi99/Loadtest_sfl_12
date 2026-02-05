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
    fe_only: {
      executor: "constant-vus",
      vus: 1000,
      duration: "3m",
      gracefulStop: "30s",
    },
  },
  thresholds: {
    // /sign-in sering protected, jadi kita ignore di error rate
    "http_req_failed{ignore_error:true}": ["rate>=0"],
    "http_req_failed{ignore_error:false}": ["rate<0.02"],

    http_req_duration: ["p(95)<4000"],

    "http_reqs{name:fe_sign-in}": ["count>0"],
    "http_reqs{name:fe_landing}": ["count>0"],
    "http_reqs{name:fe_dashboard-12}": ["count>0"],
    "http_reqs{name:fe_quiz-wait}": ["count>0"],
    "http_reqs{name:fe_quiz-room}": ["count>0"],
    "http_reqs{name:fe_finish}": ["count>0"],
  },
};

const FE_BASE = "https://talent-dev.dealls.com";
const quizUUID = "5f5d2f66-654f-4389-bcd5-fa91465d1429";

export default function () {
  // SIGN
  let res = http.get(`${FE_BASE}/sign-in`, {
    tags: { name: "fe_sign-in", ignore_error: "true" },
  });
  check(res, { "fe_sign-in ok (2xx-3xx)": (r) => r.status >= 200 && r.status < 400 });

  // Landing
  res = http.get(`${FE_BASE}/sfl`, {
    tags: { name: "fe_landing", ignore_error: "false" },
  });
  check(res, { "fe_landing ok (2xx-3xx)": (r) => r.status >= 200 && r.status < 400 });

  // Dashboard
  res = http.get(`${FE_BASE}/sfl/login/12`, {
    tags: { name: "fe_dashboard-12", ignore_error: "false" },
  });
  check(res, { "fe_dashboard ok (2xx-3xx)": (r) => r.status >= 200 && r.status < 400 });

  // Waiting room
  res = http.get(`${FE_BASE}/sfl/quiz/12/wait/quiz-second-battle`, {
    tags: { name: "fe_quiz-wait", ignore_error: "false" },
  });
  check(res, { "fe_quiz-wait ok (2xx-3xx)": (r) => r.status >= 200 && r.status < 400 });

  // uiz room
  res = http.get(`${FE_BASE}/sfl/quiz/12/quiz-second-battle/${quizUUID}`, {
    tags: { name: "fe_quiz-room", ignore_error: "false" },
  });
  check(res, { "fe_quiz-room ok (2xx-3xx)": (r) => r.status >= 200 && r.status < 400 });

  // Finish
  res = http.get(`${FE_BASE}/sfl/quiz/12/finish`, {
    tags: { name: "fe_finish", ignore_error: "false" },
  });
  check(res, { "fe_finish ok (2xx-3xx)": (r) => r.status >= 200 && r.status < 400 });

  sleep(1);
}
