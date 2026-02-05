import http from "k6/http";
import { check, sleep, group } from "k6";

export const options = {
  scenarios: {
    smoke_1vu: {
      executor: "constant-vus",
      vus: 1,
      duration: "30s",
    },
  },
  thresholds: {
    http_req_failed: ["rate<0.05"],
    http_req_duration: ["p(95)<5000"],
  },
};

const ORIGIN = "https://talent-dev.dealls.com";
const API = "https://api-dev.sejutacita.id";

function logIfFail(name, res) {
  if (res.status >= 400) {
    console.log(`FAIL ${name}:`, res.status, (res.body || "").slice(0, 200));
  }
}

export default function () {
  const token = __ENV.AUTH_BEARER;
  if (!token) {
    throw new Error('ENV AUTH_BEARER belum diset. Jalankan: AUTH_BEARER="eyJ..." k6 run dashboard_smoke.js');
  }

  const jar = http.cookieJar();

  const authHeaders = {
    accept: "application/json, text/plain, */*",
    "content-type": "application/json",
    origin: ORIGIN,
    referer: ORIGIN + "/",
    "x-client-app-name": "Deall-Talent-Web",
    "x-client-app-version": "2.49.22",
    authorization: `Bearer ${token}`,
  };

  group("DASHBOARD APIs (api-dev.sejutacita.id)", () => {
    const profilesRes = http.get(`${API}/v1/profiles`, { headers: authHeaders, timeout: "60s", jar });
    check(profilesRes, { "profiles 200": (r) => r.status === 200 });
    logIfFail("profiles", profilesRes);

    const studentRes = http.get(`${API}/v1/job-portal/me/student?readPreference=secondary`, {
      headers: authHeaders, timeout: "60s", jar,
    });
    check(studentRes, { "student me 200": (r) => r.status === 200 });
    logIfFail("student me", studentRes);

    sleep(1);
  });
}
