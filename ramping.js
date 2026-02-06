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

const BASE_URL = "https://talent-dev.dealls.com";


export default function () {
  group("FE Flow Pages", () => {

    http.get(`${BASE_URL}/sfl/login/12`, {
      tags: { name: "fe_sfl_dashboard" },
    });
    sleep(1);

 });
}
