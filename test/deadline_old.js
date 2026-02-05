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
    sfl_users: {
      executor: "constant-vus",
      vus: 10,          
      duration: "30s",  
    },
  },

  summaryTrendStats: ["avg", "min", "med", "max", "p(90)", "p(95)"],

  thresholds: {
    http_req_duration: ["p(95)<4000"],

    "http_req_duration{name:fe_sign-in}": ["p(95)<10000"],
    "http_req_duration{name:fe_landing-sfl}": ["p(95)<4000"],
    "http_req_duration{name:fe_dashboard-sfl-12}": ["p(95)<4000"],
    "http_req_duration{name:fe_waiting-room}": ["p(95)<4000"],
    "http_req_duration{name:fe_quiz-room}": ["p(95)<4000"],
    "http_req_duration{name:fe_finish}": ["p(95)<4000"],
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

function getUserIndex() {
  return (__VU - 1) % users.length;
}

function getUser() {
  return users[getUserIndex()];
}

const pageHeaders = {
  headers: {
    "User-Agent": "k6-sfl-loadtest",
    Accept: "text/html",
  },
  redirects: 5,
};

function paramsWithName(name) {
  return {
    ...pageHeaders,
    tags: {
      name,
      user_slot: String(getUserIndex()),
    },
  };
}

//test
export default function () {
  const user = getUser();

  group("SFL FLOW", () => {

    const signIn = http.get(
      `${BASE_URL}/sign-in`,
      paramsWithName("fe_sign-in")
    );
    check(signIn, { "fe_sign-in reachable": (r) => r.status > 0 });

    const landing = http.get(
      `${BASE_URL}/sfl`,
      paramsWithName("fe_landing-sfl")
    );
    check(landing, { "fe_landing reachable": (r) => r.status > 0 });

    const dashboard = http.get(
      `${BASE_URL}/sfl/login/12`,
      paramsWithName("fe_dashboard-sfl-12")
    );
    check(dashboard, { "fe_dashboard reachable": (r) => r.status > 0 });

    const waiting = http.get(
      `${BASE_URL}/sfl/quiz/12/wait/quiz-second-battle`,
      paramsWithName("fe_waiting-room")
    );
    check(waiting, { "fe_waiting reachable": (r) => r.status > 0 });

    const quizRoom = http.get(
      `${BASE_URL}/sfl/quiz/12/quiz-second-battle/${quizUUID}`,
      paramsWithName("fe_quiz-room")
    );
    check(quizRoom, { "fe_quiz-room reachable": (r) => r.status > 0 });

    // ✅ FINISH STEP (DITAMBAHKAN)
    const finish = http.get(
      `${BASE_URL}/sfl/quiz/12/finish`,
      paramsWithName("fe_finish")
    );
    check(finish, { "fe_finish reachable": (r) => r.status > 0 });

  });

  sleep(1);
}
