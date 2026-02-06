import http from "k6/http";
import { sleep, group } from "k6";
import { users } from "../7k.js";

export const options = {
  scenarios: {
    sfl_users: {
      executor: "constant-vus",
      vus: 500,
      duration: "5m",
      gracefulStop: "10s",
    },
  },
};

const API_BASE = "https://api-dev.sejutacita.id";
const BASE_URL = "https://talent-dev.dealls.com";
const UUID = "5f5d2f66-654f-4389-bcd5-fa91465d1429";


const LOGIN_URL = `${API_BASE}/v1/login/email`;

let token = null;

function loginIfNeeded() {
  if (token) return;

  const u = users[(__VU - 1) % users.length];

  const res = http.post(
    LOGIN_URL,
    JSON.stringify({ email: u.email, password: u.password }),
    {
      headers: { "Content-Type": "application/json" },
      tags: { name: "api_login" },
    }
  );

  const json = res.json();

token = json?.data?.tokenData?.token;


  if (!token) {
    throw new Error(`Token tidak ketemu. Response login: ${res.body}`);
  }
}

export default function () {
  loginIfNeeded();

  const authHeaders = {
    headers: { Authorization: `Bearer ${token}` },
  };

  group("FE Flow Pages", () => {
    http.get(`${BASE_URL}/sign-in`, { tags: { name: "fe_sign-in" }, ...authHeaders });
    sleep(1);

    http.get(`${BASE_URL}/sfl`, { tags: { name: "fe_sfl_landing" }, ...authHeaders });
    sleep(1);

    http.get(`${BASE_URL}/sfl/login/12`, { tags: { name: "fe_sfl_dashboard" }, ...authHeaders });
    sleep(1);

    http.get(`${BASE_URL}/sfl/quiz/12/wait/quiz-fsecond-battle`, { tags: { name: "fe_waiting_room" }, ...authHeaders });
    sleep(1);

    http.get(`${BASE_URL}/sfl/quiz/12/quiz-second-battle/${UUID}`, { tags: { name: "fe_quiz_room" }, ...authHeaders });
    sleep(1);

    http.get(`${BASE_URL}/sfl/quiz/12/finish`, { tags: { name: "finish" }, ...authHeaders });
    sleep(1);

    http.get(`${BASE_URL}/sfl/login/12`, { tags: { name: "fe_sfl_dashboard" }, ...authHeaders });
    sleep(1);
  });
}
