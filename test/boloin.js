import http from "k6/http";
import { sleep } from "k6";
import { users } from "../7k.js";

export const options = {
  scenarios: {
    sfl_real_users: {
      executor: "constant-vus",
      vus: 500,
      duration: "2m",
      gracefulStop: "30s",
    },
  },
};

// export const options = {
//   scenarios: {
//     sfl_users: {
//       executor: "ramping-vus",
//       startVUs: 9,
//       stages: [
//         { duration: "2m", target: 10 },   
//         { duration: "5m", target: 20 },   
//         { duration: "2m", target: 0 },     
//       ],
//       gracefulRampDown: "30s",
//     },
//   },
// };

const API_BASE = "https://api-dev.sejutacita.id";
const BASE_URL = "https://talent-dev.dealls.com";
const UUID = "5f5d2f66-654f-4389-bcd5-fa91465d1429";
const LOGIN_URL = `${API_BASE}/v1/login/email`;

let token = null;

function pickUser() {
  return users[(__VU - 1) % users.length];
}

function loginOnce() {
  if (token) return;

  const u = pickUser();

  const res = http.post(
    LOGIN_URL,
    JSON.stringify({ email: u.email, password: u.password }),
    { headers: { "Content-Type": "application/json" } }
  );

  const json = res.json();
  token = json?.data?.tokenData?.token;

  if (!token) throw new Error(`Token tidak ketemu`);
}

export default function () {
  loginOnce();

  const params = { headers: { Authorization: `Bearer ${token}` } };

  http.get(`${BASE_URL}/sign-in`, params);
  sleep(1);

  http.get(`${BASE_URL}/sfl`, params);
  sleep(1);

  http.get(`${BASE_URL}/sfl/login/12`, params);
  sleep(1);

  http.get(`${BASE_URL}/sfl/quiz/12/wait/quiz-fsecond-battle`, params);
  sleep(1);

  http.get(`${BASE_URL}/sfl/quiz/12/quiz-second-battle/${UUID}`, params);
  sleep(1);

  http.get(`${BASE_URL}/sfl/quiz/12/finish`, params);
  sleep(1);

  http.get(`${BASE_URL}/sfl/login/12`, params);
  sleep(1);
}
