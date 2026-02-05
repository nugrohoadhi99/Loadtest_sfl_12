import http from "k6/http";
import { sleep, group } from "k6";

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

// export const options = {
//   scenarios: {
//     ramp_fe_pages: {
//       executor: "ramping-vus",
//       startVUs: 0,
//       stages: [
//         { duration: "5m", target: 500 },
//         // { duration: "5m", target: 100 },
//         // { duration: "30s", target: 20 },
//         // { duration: "1m", target: 20 },
//         // { duration: "30s", target: 0 },
//       ],
//       gracefulRampDown: "10s",
//     },    

//   },
// };

const BASE_URL = "https://talent-dev.dealls.com";
const UUID = "5f5d2f66-654f-4389-bcd5-fa91465d1429";

export default function () {
  group("FE Flow Pages", () => {
    http.get(`${BASE_URL}/sign-in`, {
      tags: { name: "fe_sign-in" },
    });
    sleep(1);

    http.get(`${BASE_URL}/sfl`, {
      tags: { name: "fe_sfl_landing" },
    });
    sleep(1);

    http.get(`${BASE_URL}/sfl/login/12`, {
      tags: { name: "fe_sfl_dashboard" },
    });
    sleep(1);

    http.get(`${BASE_URL}/sfl/quiz/12/wait/quiz-fsecond-battle`, {
      tags: { name: "fe_waiting_room" },
    });
    sleep(1);

    http.get(`${BASE_URL}/sfl/quiz/12/quiz-second-battle/${UUID}`, {
      tags: { name: "fe_quiz_room" },
    });
    sleep(1);

    http.get(`${BASE_URL}/sfl/quiz/12/finish`, {
      tags: { name: "finish" },
    });
    sleep(1);

    http.get(`${BASE_URL}/sfl/login/12`, {
      tags: { name: "fe_sfl_dashboard" },
    });
    sleep(1);

  });
}
