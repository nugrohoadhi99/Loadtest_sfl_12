import http from "k6/http";
import { check, sleep, group } from "k6";

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
    sfl_3500_users: {
      executor: "constant-vus",
      vus: 10,        
      duration: "30s" 
    },
  },

  summaryTrendStats: ["avg", "min", "med", "max", "p(90)", "p(95)"],

  thresholds: {
    http_req_failed: ["rate<0.05"],
    http_req_duration: ["p(95)<2000"],

    "http_req_duration{name:fe_sign-in}": ["p(95)<2000"],
    "http_req_duration{name:fe_landing-sfl}": ["p(95)<2000"],
    "http_req_duration{name:fe_dashboard-sfl-12}": ["p(95)<2000"],
    "http_req_duration{name:fe_waiting-room}": ["p(95)<2000"],
    "http_req_duration{name:fe_quiz-room}": ["p(95)<2000"],

    "http_req_failed{name:fe_sign-in}": ["rate<0.05"],
    "http_req_failed{name:fe_landing-sfl}": ["rate<0.05"],
    "http_req_failed{name:fe_dashboard-sfl-12}": ["rate<0.05"],
    "http_req_failed{name:fe_waiting-room}": ["rate<0.05"],
    "http_req_failed{name:fe_quiz-room}": ["rate<0.05"],
  },
};

const users = [
  { email: "0sfl12_load_testing_adhi_0@gmail.com", password: "1sejutacita123" },
  { email: "0sfl12_load_testing_adhi_1@gmail.com", password: "1sejutacita123" },
  { email: "0sfl12_load_testing_adhi_2@gmail.com", password: "sejutacita123" },
  { email: "0sfl12_load_testing_adhi_3@gmail.com", password: "1sejutacita123" },
  { email: "0sfl12_load_testing_adhi_4@gmail.com", password: "sejutacita123" },
  { email: "0sfl12_load_testing_adhi_5@gmail.com", password: "sejutacita123" },
  { email: "0sfl12_load_testing_adhi_6@gmail.com", password: "sejutacita1230" },
  { email: "0sfl12_load_testing_adhi_7@gmail.com", password: "sejutacita123" },
  { email: "0sfl12_load_testing_adhi_8@gmail.com", password: "sejutacita123" },
  { email: "0sfl12_load_testing_adhi_9@gmail.com", password: "sejutacita123" },
  { email: "0sfl12_load_testing_adhi_10@gmail.com", password: "sejutacita123" },
  { email: "0sfl12_load_testing_adhi_11@gmail.com", password: "sejutacita123" },
];

const BASE_URL = "https://talent-dev.dealls.com";
const quizUUID = "5f5d2f66-654f-4389-bcd5-fa91465d1429";

function getUser() {
  return users[(__VU - 1) % users.length];
}

const pageHeaders = {
  headers: {
    "User-Agent": "k6-sfl-loadtest",
    Accept: "text/html",
  },
  redirects: 5,
};

function is2xx3xx(status) {
  return status >= 200 && status < 400;
}

function paramsWithName(name) {
  return {
    ...pageHeaders,
    tags: {
      name,
      expected_response: "true",
    },
  };
}

//test
export default function () {
  const user = getUser(); // rotate siap (belum dipakai login)

  group("AUTH & LANDING", () => {
    const r1 = http.get(`${BASE_URL}/sign-in`, paramsWithName("fe_sign-in"));
    check(r1, { "fe_sign-in ok (2xx-3xx)": (r) => is2xx3xx(r.status) });

    const r2 = http.get(`${BASE_URL}/sfl`, paramsWithName("fe_landing-sfl"));
    check(r2, { "fe_landing ok (2xx-3xx)": (r) => is2xx3xx(r.status) });
  });

  group("DASHBOARD", () => {
    const r3 = http.get(`${BASE_URL}/sfl/login/12`, paramsWithName("fe_dashboard-sfl-12"));
    check(r3, { "fe_dashboard ok (2xx-3xx)": (r) => is2xx3xx(r.status) });
  });

  group("WAITING ROOM", () => {
    const r4 = http.get(
      `${BASE_URL}/sfl/quiz/12/wait/quiz-first-battle`,
      paramsWithName("fe_waiting-room")
    );
    check(r4, { "fe_quiz-wait ok (2xx-3xx)": (r) => is2xx3xx(r.status) });
  });

  group("QUIZ ROOM", () => {
    const r5 = http.get(
      `${BASE_URL}/sfl/quiz/12/quiz-second-battle/${quizUUID}`,
      paramsWithName("fe_quiz-room")
    );
    check(r5, { "fe_quiz-room ok (2xx-3xx)": (r) => is2xx3xx(r.status) });
  });

  sleep(1);
}
