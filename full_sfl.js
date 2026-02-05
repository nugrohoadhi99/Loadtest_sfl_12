// Creator: WebInspector 537.36

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  response = http.post(
    'https://www.google.com/ccm/collect?frm=0&en=page_view&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl&scrsrc=www.googletagmanager.com&rnd=552434601.1770265058&dt=SejutaCita%20Future%20Leaders%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265111267&tfd=56164',
    null,
    {
      headers: {
        'sec-ch-ua-platform': '"macOS"',
        Referer: '',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
        'sec-ch-ua-mobile': '?0',
      },
    }
  )

  response = http.get('https://talent-dev.dealls.com/sfl/login/12.data', {
    headers: {
      accept: '*/*',
      'accept-encoding': 'gzip, deflate, br, zstd',
      'accept-language': 'en-US,en;q=0.9',
      priority: 'u=1, i',
      'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
    },
  })

  response = http.post(
    'https://www.youtube.com/youtubei/v1/log_event?alt=json',
    '{"context":{"client":{"hl":"en","gl":"ID","clientName":56,"clientVersion":"1.20260204.01.00","configInfo":{"appInstallData":"COKzkMwGENr3zhwQgc3OHBDT4a8FEMDbzxwQzN-uBRC45M4cEJbX0BwQu9nOHBD2q7AFELfq_hIQ597QHBCmttAcEN68zhwQnNfPHBCM6c8cEJSD0BwQ2cTQHBCW288cEL2ZsAUQwY_QHBCHrM4cEPyyzhwQw6rQHBDwnLAFEIiHsAUQyfevBRCUttAcEPbW0BwQ0MKAExCZjbEFEL2KsAUQibDOHBDI988cENjX0BwQjbDQHBDV3NAcEKudzxwQntCwBRCUmYATEPrO0BwQ2oXQHBDGxs8cEJT-sAUQi_fPHBC9tq4FEK7WzxwQ-dzQHBDxtNAcELyk0BwQlffPHBCR09AcEPfHgBMqSENBTVNNUlVxLVpxLURMaVVFcFFDbkE3TUJiYlA4QXN5b0t3RUE4M19CY3UzQnZzbXVOMEc5Zy12Z2dQZ1FzNHUtcUVHSFFjPTAA"},"userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36","screenDensityFloat":"2","connectionType":"CONN_CELLULAR_4G","browserName":"Chrome","deviceMake":"apple","browserVersion":"144.0.0.0","osName":"Macintosh","osVersion":"10_15_7","platform":"DESKTOP"},"thirdParty":{"embedUrl":"https://talent-dev.dealls.com/"}},"events":[{"eventTimeMs":1770265090684,"streamzIncremented":{"serializedIncrementBatch":"Ch8vY2xpZW50X3N0cmVhbXoveW91dHViZS9hYmEvZ2FjGgR0eXBlGghzZXF1ZW5jZSIMCgIQAQoCEAASAggB"},"context":{"lastActivityMs":"32056"}},{"eventTimeMs":1770265111432,"finalPayload":{"csn":"8gImYGtB5pWyARcg"},"context":{"lastActivityMs":"52804"}}],"serializedClientEventId":{"serializedEventId":"4hmEadm0F_LXg8UPrpvRgAw","clientCounter":"10670"}}',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
        origin: 'https://www.youtube.com',
        priority: 'u=1, i',
        referer: 'https://www.youtube.com/embed/smNJ_Z8nBO8?si=TIFO-m-strr5H1ky',
        'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
        'x-goog-authuser': '0',
        'x-goog-event-time': '1770265111435',
        'x-goog-request-time': '1770265111435',
        'x-goog-visitor-id':
          'CgtlcWN2U1pwUkJzUSjis5DMBjIKCgJJRBIEGgAgQGLfAgrcAjE1LllUPURHcWY5WUFHU2wtcHBYUUpvdGJKakI0MlVRcGR6UUpUSFY2em0yYko0UFA1WjQ2SFhlTnNxd2ZIVHlmSzNwQTBFYUdhcmZORWRrUUdBRFZmRThNeDFGZEV2NVlzTC1KbGs1Mmd1ZnpEeW5hVTFrdWpwQ2RwM1UweFkwWTlmYjdQZFBSbDlPQmpINEtxM2lDVFdIOGptSHd6eEFHQ1lHekswR040QndSRjM0MC1CTW1uZkFwUzRGQ1JORjl1Umt2Yl9WN3hfOHN3cG02OWRKZzhRTnp4ZV84cE5la2xNOWZDNk1Bb3FOLUpwOEtma2hTN2M3eU9fS3RiRFA0MUEtbVpyRVFreGRIczFVS00tSHBzdnhPb0MzTlJ6QlVHWWVUS2hiTlJmNnFBMnJUVGJOSFhSY1RHdU96ajVJMFJQNHVZb3hCX0ZoX3B2NE9WWTF5UXF2ZURWZw%3D%3D',
        'x-origin': 'https://www.youtube.com',
        'x-youtube-ad-signals':
          'dt=1770265058453&flash=0&frm=2&u_tz=420&u_his=2&u_h=1050&u_w=1680&u_ah=952&u_aw=1680&u_cd=30&bc=31&bih=-12245933&biw=-12245933&brdim=0%2C25%2C0%2C25%2C1680%2C25%2C1680%2C951%2C1034%2C424&vis=1&wgl=true&ca_type=image&bid=ANyPxKolBjrl58RHDScNObSPCx_k0p2s6M4heNan_eKqW9UtPAjgi0zNU-YSct3gPFuCI2ojYWIHCome7rJDVeUMk7EF2hYkEQ',
        'x-youtube-client-name': '56',
        'x-youtube-client-version': '1.20260204.01.00',
        'x-youtube-device':
          'cbr=Chrome&cbrand=apple&cbrver=144.0.0.0&ceng=WebKit&cengver=537.36&cos=Macintosh&cosver=10_15_7&cplatform=DESKTOP',
        'x-youtube-page-cl': '865256519',
        'x-youtube-page-label': 'youtube.embeds.web_20260204_01_RC00',
        'x-youtube-time-zone': 'Asia/Jakarta',
        'x-youtube-utc-offset': '420',
      },
    }
  )

  group(
    'page_1 - https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12',
    function () {
      response = http.get(
        'https://storage.googleapis.com/public-assets-sejutacita/i18n/job-portal-user/idn/common.json',
        {
          headers: {
            'sec-ch-ua-platform': '"macOS"',
            Referer: 'https://talent-dev.dealls.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
          },
        }
      )

      response = http.get(
        'https://unleash.sejutacita.id/api/frontend?sessionId=843433815&appName=nextjs&environment=default',
        {
          headers: {
            accept: 'application/json',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            'cache-control': 'max-age=0',
            'content-type': 'application/json',
            'if-none-match': '',
            origin: 'https://talent-dev.dealls.com',
            priority: 'u=1, i',
            referer: 'https://talent-dev.dealls.com/',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'https://storage.googleapis.com/public-assets-sejutacita/i18n/job-portal-user/idn/homepageMentoring.json',
        {
          headers: {
            'sec-ch-ua-platform': '"macOS"',
            Referer: 'https://talent-dev.dealls.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
          },
        }
      )

      response = http.get(
        'https://talent-dev.dealls.com/_next/data/PeLE_tVXRUlUJ3Zi2JbBZ/idn.json',
        {
          headers: {
            accept: '*/*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            priority: 'u=1, i',
            purpose: 'prefetch',
            referer: 'https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
            'x-middleware-prefetch': '1',
            'x-nextjs-data': '1',
          },
        }
      )

      response = http.get(
        'https://talent-dev.dealls.com/_next/data/PeLE_tVXRUlUJ3Zi2JbBZ/idn/forgot-password.json',
        {
          headers: {
            accept: '*/*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            priority: 'u=1, i',
            purpose: 'prefetch',
            referer: 'https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
            'x-middleware-prefetch': '1',
            'x-nextjs-data': '1',
          },
        }
      )

      response = http.post(
        'https://www.google.com/ccm/collect?frm=0&en=page_view&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsign-in&scrsrc=www.googletagmanager.com&rnd=562834688.1770265113&dt=Sign%20In%20dan%20Lamar%20Kerja%20Bersama%20Dealls%20Sekarang&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527907~104528500~104684208~104684211~115938465~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=1&tft=1770265113111&tfd=1674',
        null,
        {
          headers: {
            'sec-ch-ua-platform': '"macOS"',
            Referer: 'https://talent-dev.dealls.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
          },
        }
      )

      response = http.get(
        'https://www.googleadservices.com/pagead/conversion/11398465741/?random=1770265113339&cv=11&fst=1770265113339&bg=ffffff&guid=ON&async=1&en=conversion&gtm=45be6231v9170577772z8898039529za20gzb898039529zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527907~104528500~104684208~104684211~115616985~115938465~115938468~116185181~116185182~116988315&u_w=1680&u_h=1050&url=https%3A%2F%2Ftalent-dev.dealls.com%2Fsign-in%3FreturnUrl%3D%252Fsfl%252Flogin%252F12&label=5RmACP-WyM8ZEM2Rm7sq&capi=1&frm=0&tiba=Sign%20In%20dan%20Lamar%20Kerja%20Bersama%20Dealls%20Sekarang&bttype=purchase&value=0&hn=www.googleadservices.com&npa=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&_tu=CA&gcl_ctr=123~0&em=tv.1&fmt=7',
        {
          headers: {
            accept: '*/*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            'attribution-reporting-eligible': 'trigger=navigation-source;event-source',
            'attribution-reporting-support': 'not-os, web',
            origin: 'https://talent-dev.dealls.com',
            priority: 'u=1, i',
            referer: 'https://talent-dev.dealls.com/',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'sec-fetch-storage-access': 'active',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
            'x-browser-channel': 'stable',
            'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
            'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
            'x-browser-year': '2026',
            'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
          },
        }
      )

      response = http.post(
        'https://www.google.com/ccm/collect?frm=0&en=page_view&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsign-in&scrsrc=www.googletagmanager.com&rnd=562834688.1770265113&dt=Sign%20In%20dan%20Lamar%20Kerja%20Bersama%20Dealls%20Sekarang&auid=1697518929.1764877160&navt=n&npa=0&gtm=45be6231v9170577772z8898039529za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527907~104528500~104684208~104684211~115616985~115938465~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265113341&tfd=1904',
        null,
        {
          headers: {
            'sec-ch-ua-platform': '"macOS"',
            Referer: 'https://talent-dev.dealls.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
          },
        }
      )

      response = http.post(
        'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265112642&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=1&tag_exp=103116026~103200004~104527907~104528501~104684208~104684211~115616986~115938465~115938468~116185181~116185182~116988316~117025850&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsign-in%3FreturnUrl%3D%252Fsfl%252Flogin%252F12&dt=Sign%20In%20dan%20Lamar%20Kerja%20Bersama%20Dealls%20Sekarang&en=page_view&tfd=2039',
        null,
        {
          headers: {
            accept: '*/*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            origin: 'https://talent-dev.dealls.com',
            priority: 'u=1, i',
            referer: 'https://talent-dev.dealls.com/',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-site': 'cross-site',
            'sec-fetch-storage-access': 'active',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.post(
        'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265112642&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=2&tag_exp=103116026~103200004~104527907~104528501~104684208~104684211~115616986~115938465~115938468~116185181~116185182~116988316~117025850&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsign-in%3FreturnUrl%3D%252Fsfl%252Flogin%252F12&dt=Sign%20In%20dan%20Lamar%20Kerja%20Bersama%20Dealls%20Sekarang&en=page_view&_et=1&tfd=2054',
        null,
        {
          headers: {
            accept: '*/*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            origin: 'https://talent-dev.dealls.com',
            priority: 'u=1, i',
            referer: 'https://talent-dev.dealls.com/',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-site': 'cross-site',
            'sec-fetch-storage-access': 'active',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'https://storage.googleapis.com/public-assets-sejutacita/i18n/job-portal-user/idn/common.json',
        {
          headers: {
            'sec-ch-ua-platform': '"macOS"',
            Referer: 'https://talent-dev.dealls.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
          },
        }
      )

      response = http.get(
        'https://storage.googleapis.com/public-assets-sejutacita/i18n/job-portal-user/idn/homepageMentoring.json',
        {
          headers: {
            'sec-ch-ua-platform': '"macOS"',
            Referer: 'https://talent-dev.dealls.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
          },
        }
      )

      response = http.get('https://talent-dev.dealls.com/_next/static/css/c46bef8675e5c491.css', {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: 'https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      })

      response = http.get('https://talent-dev.dealls.com/_next/static/css/98a9d7ae445d7206.css', {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: 'https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      })

      response = http.get('https://talent-dev.dealls.com/_next/static/css/0c2814a08f563f8d.css', {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: 'https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      })

      response = http.post(
        'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
        '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_e4e760fc6b81544295d8b58f305197b056fee5b459f820250540c886cbb65337","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","referrer":"","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":true,"is_in_treatment":false}}}',
        {
          headers: {
            accept: '*/*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'text/plain;charset=UTF-8',
            origin: 'https://talent-dev.dealls.com',
            priority: 'u=1, i',
            referer: 'https://talent-dev.dealls.com/',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'sec-fetch-storage-access': 'active',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'https://storage.googleapis.com/public-assets-sejutacita/i18n/job-portal-user/idn/common.json',
        {
          headers: {
            'sec-ch-ua-platform': '"macOS"',
            Referer: 'https://talent-dev.dealls.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
          },
        }
      )

      response = http.get(
        'https://storage.googleapis.com/public-assets-sejutacita/i18n/job-portal-user/idn/homepageMentoring.json',
        {
          headers: {
            'sec-ch-ua-platform': '"macOS"',
            Referer: 'https://talent-dev.dealls.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
          },
        }
      )

      response = http.post(
        'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265112642&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=3&tag_exp=103116026~103200004~104527907~104528501~104684208~104684211~115616986~115938465~115938468~116185181~116185182~116988316~117025850&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsign-in%3FreturnUrl%3D%252Fsfl%252Flogin%252F12&dt=Sign%20In%20dan%20Lamar%20Kerja%20Bersama%20Dealls%20Sekarang&_tu=CA&en=scroll&epn.percent_scrolled=90&_et=13&tfd=2849',
        null,
        {
          headers: {
            accept: '*/*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            origin: 'https://talent-dev.dealls.com',
            priority: 'u=1, i',
            referer: 'https://talent-dev.dealls.com/',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-site': 'cross-site',
            'sec-fetch-storage-access': 'active',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          },
        }
      )

      response = http.get(
        'https://storage.googleapis.com/public-assets-sejutacita/i18n/job-portal-user/idn/common.json',
        {
          headers: {
            'sec-ch-ua-platform': '"macOS"',
            Referer: 'https://talent-dev.dealls.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
          },
        }
      )

      response = http.get(
        'https://storage.googleapis.com/public-assets-sejutacita/i18n/job-portal-user/idn/homepageMentoring.json',
        {
          headers: {
            'sec-ch-ua-platform': '"macOS"',
            Referer: 'https://talent-dev.dealls.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
          },
        }
      )

      response = http.post(
        'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527907~104528500~104684208~104684211~115616985~115938465~115938468~116185181~116185182~116988315&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
        null,
        {
          headers: {
            'sec-ch-ua-platform': '"macOS"',
            Referer: 'https://talent-dev.dealls.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
          },
        }
      )

      response = http.post(
        'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527907~104528500~104684208~104684211~115616985~115938465~115938468~116185181~116185182~116988315~117127390&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&gap.hsw=1164065710.1770265116&em=tv.1~em.YsAr_2V73d-OT1eLsjR7QZB6UEJlTtqzzHCOeet0Ek8&ecsid=1004922083.1770265116',
        null,
        {
          headers: {
            accept: '*/*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            origin: 'https://talent-dev.dealls.com',
            priority: 'u=1, i',
            referer: 'https://talent-dev.dealls.com/',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-site': 'cross-site',
            'sec-fetch-storage-access': 'active',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
            'x-browser-channel': 'stable',
            'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
            'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
            'x-browser-year': '2026',
            'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
          },
        }
      )

      response = http.post(
        'https://www.google.com/ccm/collect?frm=0&en=page_view&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsign-in&scrsrc=www.googletagmanager.com&rnd=562834688.1770265113&dt=Sign%20In%20dan%20Lamar%20Kerja%20Bersama%20Dealls%20Sekarang&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527907~104528500~104684208~104684211~115938465~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265116900&tfd=5463',
        null,
        {
          headers: {
            'sec-ch-ua-platform': '"macOS"',
            Referer: 'https://talent-dev.dealls.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
          },
        }
      )

      response = http.post(
        'https://api-dev.sejutacita.id/v1/login/email',
        '{"email":"jsmoney4u@ecoverseworld.com","password":"1234567890"}',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'application/json',
            origin: 'https://talent-dev.dealls.com',
            priority: 'u=1, i',
            referer: 'https://talent-dev.dealls.com/',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
            'x-client-app-name': 'Deall-Talent-Web',
            'x-client-app-version': '2.49.22',
          },
        }
      )

      response = http.get(
        'https://api-dev.sejutacita.id/v1/job-portal/me/student?readPreference=secondary',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            'if-none-match': 'W/"a08-88rL23zEM3EpHjY0EQSUbe2SPhk"',
            origin: 'https://talent-dev.dealls.com',
            priority: 'u=1, i',
            referer: 'https://talent-dev.dealls.com/',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'cross-site',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
            'x-client-app-name': 'Deall-Talent-Web',
            'x-client-app-version': '2.49.22',
          },
        }
      )

      response = http.get('https://api-dev.sejutacita.id/v2/mentoring/mentor/me', {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          referer: 'https://talent-dev.dealls.com/',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-client-app-name': 'Deall-Talent-Web',
          'x-client-app-version': '2.49.22',
        },
      })

      response = http.post(
        'https://www.google.com/ccm/collect?frm=0&en=user_id_update&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsign-in&scrsrc=www.googletagmanager.com&rnd=562834688.1770265113&dt=Sign%20In%20dan%20Lamar%20Kerja%20Bersama%20Dealls%20Sekarang&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527907~104528500~104684208~104684211~115938465~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=1&tft=1770265117433&tfd=5996',
        null,
        {
          headers: {
            'sec-ch-ua-platform': '"macOS"',
            Referer: 'https://talent-dev.dealls.com/',
            'User-Agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
          },
        }
      )

      response = http.post(
        'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265112642&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&tag_exp=103116026~103200004~104527907~104528501~104684208~104684211~115616986~115938465~115938468~116185181~116185182~116988316~117025850&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsign-in%3FreturnUrl%3D%252Fsfl%252Flogin%252F12&dt=Sign%20In%20dan%20Lamar%20Kerja%20Bersama%20Dealls%20Sekarang&_s=4&tfd=5993',
        'en=scroll_depth&epn.percent_scrolled=25&_et=793\r\nen=scroll_depth&epn.percent_scrolled=50&_et=6\r\nen=scroll_depth&epn.percent_scrolled=75&_et=5\r\nen=scroll_depth&epn.percent_scrolled=100&_et=5\r\nen=Click%20Sign%20In%20(Job-seeker%2FTalent)&_et=2593',
        {
          headers: {
            accept: '*/*',
            'accept-encoding': 'gzip, deflate, br, zstd',
            'accept-language': 'en-US,en;q=0.9',
            'content-type': 'text/plain;charset=UTF-8',
            origin: 'https://talent-dev.dealls.com',
            priority: 'u=1, i',
            referer: 'https://talent-dev.dealls.com/',
            'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'no-cors',
            'sec-fetch-site': 'cross-site',
            'sec-fetch-storage-access': 'active',
            'user-agent':
              'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          },
        }
      )
    }
  )

  group('page_2 - https://talent-dev.dealls.com/sfl/login/12?', function () {
    response = http.get(
      'https://talent-dev.dealls.com/sfl/__manifest?paths=%2Fsfl%2Flogin%2F12&version=3ba4dea6',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get('https://api-dev.sejutacita.id/v1/profiles', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
        'if-none-match': 'W/"1bd-xWXajkLCE6ffjB70I4wie3qRozg"',
        origin: 'https://talent-dev.dealls.com',
        priority: 'u=1, i',
        'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
      },
    })

    response = http.get('https://api-dev.sejutacita.id/v2/project-sfl-12/dashboard', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
        origin: 'https://talent-dev.dealls.com',
        priority: 'u=1, i',
        'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-sfl-chapter': '12',
      },
    })

    response = http.get(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/last-registration-data/one',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://unleash.sejutacita.id/api/frontend?sessionId=843433815&appName=web-sfl&environment=default',
      {
        headers: {
          accept: 'application/json',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'cache-control': 'max-age=0',
          'if-none-match': 'W/"745b9-FXmmQwwMYp624Bxo5nAKE5A6aaI"',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'unleash-appname': 'web-sfl',
          'unleash-connection-id': '91e94be8-4336-4c32-8185-7539965ed568',
          'unleash-sdk': 'unleash-client-js:3.7.8',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Flogin%2F12&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=1&tft=1770265118214&tfd=780',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=1&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Flogin%2F12&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsign-in%3FreturnUrl%3D%252Fsfl%252Flogin%252F12&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&tfd=951',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=2&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Flogin%2F12&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsign-in%3FreturnUrl%3D%252Fsfl%252Flogin%252F12&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&tfd=954',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=user_id_update&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Flogin%2F12&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=1&tft=1770265118390&tfd=955',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get(
      'https://www.googleadservices.com/pagead/conversion/11398465741/?random=1770265118425&cv=11&fst=1770265118425&bg=ffffff&guid=ON&async=1&en=conversion&gtm=45be6231v9170577772z8898039529za20gzb898039529zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&u_w=1680&u_h=1050&url=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Flogin%2F12%3F&ref=https%3A%2F%2Ftalent-dev.dealls.com%2Fsign-in%3FreturnUrl%3D%252Fsfl%252Flogin%252F12&label=5RmACP-WyM8ZEM2Rm7sq&capi=1&frm=0&tiba=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&bttype=purchase&value=0&hn=www.googleadservices.com&npa=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&oid=341039254.1770265118&oidsrc=3&ecsid=1004922083.1770265116&_tu=CBA&gcl_ctr=124~0&em=tv.1&fmt=7',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'attribution-reporting-eligible': 'not-event-source, not-navigation-source, trigger',
          'attribution-reporting-support': 'web;os',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-browser-channel': 'stable',
          'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
          'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
          'x-browser-year': '2026',
          'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Flogin%2F12&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772z8898039529za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265118427&tfd=993',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_f4de04cdacf2dba58ad9d05ac14b1a09d7223721a046a6eeb3741bc9779f1503","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/login/12?","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":true,"is_in_treatment":false}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/__manifest?paths=%2Fsfl&version=3ba4dea6',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/__manifest?paths=%2Fsfl%2Fquiz%2F12%2Fwait%2Fquiz-second-battle&version=3ba4dea6',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://unleash.sejutacita.id/api/frontend/client/metrics',
      '{"bucket":{"start":"2026-02-05T04:18:37.973Z","stop":"2026-02-05T04:18:39.997Z","toggles":{"dcp_sfl-configs":{"yes":19,"no":0,"variants":{"dcp_sfl-configs":19}}}},"appName":"web-sfl","instanceId":"browser"}',
      {
        headers: {
          accept: 'application/json',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'cache-control': 'max-age=0',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'unleash-appname': 'web-sfl',
          'unleash-connection-id': '91e94be8-4336-4c32-8185-7539965ed568',
          'unleash-sdk': 'unleash-client-js:3.7.8',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAACAQ&_s=3&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Flogin%2F12&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsign-in%3FreturnUrl%3D%252Fsfl%252Flogin%252F12&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&_tu=CA&en=Dealls%20Sign%20In&_et=1&up.user_id_dimension=6938ac41c2919f0013984636&up.email=jsmoney4u%40ecoverseworld.com&up.phone_number=6285155355155&up.name=halim&tfd=3331',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Flogin%2F12&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265122233&tfd=4798',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get('https://talent-dev.dealls.com/sfl/quiz/12/wait/quiz-second-battle.data', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
      },
    })

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=4&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Flogin%2F12&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsign-in%3FreturnUrl%3D%252Fsfl%252Flogin%252F12&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=scroll&epn.percent_scrolled=90&_et=2374&tfd=5010',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/selection-phase/one?with_user_quiz=true&key_eq=quiz-second-battle',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_0ede80d8e6b61c55f1c9199ffce427cf11359baf6bc256fb3cc27e66fb091143","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/wait/quiz-second-battle","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":true,"is_in_treatment":false}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/__manifest?paths=%2Fsfl%2Flogin&version=3ba4dea6',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=5&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fwait%2Fquiz-second-battle&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsign-in%3FreturnUrl%3D%252Fsfl%252Flogin%252F12&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1677&tfd=6034',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fwait%2Fquiz-second-battle&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265123474&tfd=6039',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fwait%2Fquiz-second-battle&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265126771&tfd=9336',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/start',
      '{"quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/question?quiz_id_eq=5f5d2f66-654f-4389-bcd5-fa91465d1429&with_question_answers_eq=true&with_user_question_answer_eq=true',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/__manifest?paths=%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&version=3ba4dea6',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=ad97db4b-14b1-405b-87c2-a0675ab584a9',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=6&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fwait%2Fquiz-second-battle&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Flogin%2F12%3F&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1022&tfd=9959',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_9e071cb2064207960e262dec57213d5e1215e5447004ba5d25c878a73c82fc6f","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=ad97db4b-14b1-405b-87c2-a0675ab584a9","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":true,"is_in_treatment":false}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=7&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dad97db4b-14b1-405b-87c2-a0675ab584a9&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Flogin%2F12%3F&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=3922&tfd=10999',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265128442&tfd=11007',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265131402&tfd=13967',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265132568&tfd=15134',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=8&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dad97db4b-14b1-405b-87c2-a0675ab584a9&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fwait%2Fquiz-second-battle&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1036&tfd=16001',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265137618&tfd=20183',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=44bbc96e-6100-4c42-b5d6-cf37510629fd',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_bc77e7ec0fdf65880678a9448ea58ec6bbb958dead6028bfb224065ceb76872b","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=44bbc96e-6100-4c42-b5d6-cf37510629fd","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":true,"is_in_treatment":false}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=9&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D44bbc96e-6100-4c42-b5d6-cf37510629fd&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fwait%2Fquiz-second-battle&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=6548&tfd=21316',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265138762&tfd=21327',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265139752&tfd=22317',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265141236&tfd=23801',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=7f561de0-bdab-44f5-8bad-2070553e303c',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=10&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D44bbc96e-6100-4c42-b5d6-cf37510629fd&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dad97db4b-14b1-405b-87c2-a0675ab584a9&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1028&tfd=23890',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_4de6b0497d45bcad8e4f8efea03b6b0fc27c191154ba90979e58601dfe01bf07","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=7f561de0-bdab-44f5-8bad-2070553e303c","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":false,"is_in_treatment":true}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=11&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D7f561de0-bdab-44f5-8bad-2070553e303c&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dad97db4b-14b1-405b-87c2-a0675ab584a9&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=2572&tfd=24924',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265142367&tfd=24931',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=12&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D7f561de0-bdab-44f5-8bad-2070553e303c&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D44bbc96e-6100-4c42-b5d6-cf37510629fd&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1031&tfd=29926',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://unleash.sejutacita.id/api/frontend/client/metrics',
      '{"bucket":{"start":"2026-02-05T04:18:39.997Z","stop":"2026-02-05T04:19:09.999Z","toggles":{"dcp_sfl-configs":{"yes":3,"no":0,"variants":{"dcp_sfl-configs":3}}}},"appName":"web-sfl","instanceId":"browser"}',
      {
        headers: {
          accept: 'application/json',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'cache-control': 'max-age=0',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'unleash-appname': 'web-sfl',
          'unleash-connection-id': '91e94be8-4336-4c32-8185-7539965ed568',
          'unleash-sdk': 'unleash-client-js:3.7.8',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265154565&tfd=37129',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265155392&tfd=37957',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"7f561de0-bdab-44f5-8bad-2070553e303c","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"e"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=e187026b-8b71-4612-8b02-9682e18d949c',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_cb08e646b69aa3c321bb9c1c613b2310384d10b7c385ed47da2b7b82b5d143ac","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=e187026b-8b71-4612-8b02-9682e18d949c","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":true,"is_in_treatment":false}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=13&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3De187026b-8b71-4612-8b02-9682e18d949c&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D44bbc96e-6100-4c42-b5d6-cf37510629fd&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=13188&tfd=39146',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265156590&tfd=39155',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265157712&tfd=40277',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265159383&tfd=41948',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=14&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3De187026b-8b71-4612-8b02-9682e18d949c&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D7f561de0-bdab-44f5-8bad-2070553e303c&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1030&tfd=44147',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265164348&tfd=46913',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265165208&tfd=47772',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"e187026b-8b71-4612-8b02-9682e18d949c","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"b"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=fc21fa43-d2bf-48f2-9ede-4db273371867',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_39c1a45794e19a38e189a266faf5b8013bd6179ae53609566639d7e3ed8c3999","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=fc21fa43-d2bf-48f2-9ede-4db273371867","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":true,"is_in_treatment":false}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=15&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dfc21fa43-d2bf-48f2-9ede-4db273371867&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D7f561de0-bdab-44f5-8bad-2070553e303c&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=8786&tfd=48970',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265166413&tfd=48978',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265166977&tfd=49541',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265168075&tfd=50639',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"fc21fa43-d2bf-48f2-9ede-4db273371867","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"b"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=40a498c4-eb07-44d7-ad80-bfc15b35dd24',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=16&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dfc21fa43-d2bf-48f2-9ede-4db273371867&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3De187026b-8b71-4612-8b02-9682e18d949c&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1034&tfd=50836',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_a3eb58f886ad6255b16b1802d2e08bc91bbe1025005882eaa07a1906c044ade7","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=40a498c4-eb07-44d7-ad80-bfc15b35dd24","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":true,"is_in_treatment":false}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265168706&tfd=51270',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=17&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D40a498c4-eb07-44d7-ad80-bfc15b35dd24&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3De187026b-8b71-4612-8b02-9682e18d949c&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1863&tfd=51870',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265169313&tfd=51878',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265169934&tfd=52499',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265170722&tfd=53286',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"40a498c4-eb07-44d7-ad80-bfc15b35dd24","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"e"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=e3e36070-3366-4306-9e2b-a1e0b8916026',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=18&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D40a498c4-eb07-44d7-ad80-bfc15b35dd24&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dfc21fa43-d2bf-48f2-9ede-4db273371867&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1031&tfd=53436',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_3acfb60d471a251c6591314b405cad059085bf646b491ae429298b3d6992d841","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=e3e36070-3366-4306-9e2b-a1e0b8916026","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":false,"is_in_treatment":true}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=19&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3De3e36070-3366-4306-9e2b-a1e0b8916026&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dfc21fa43-d2bf-48f2-9ede-4db273371867&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1565&tfd=54468',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265171910&tfd=54475',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265172214&tfd=54778',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265173000&tfd=55564',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"e3e36070-3366-4306-9e2b-a1e0b8916026","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"e"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=07065392-0a70-4033-b041-e4983cd4dd48',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=20&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3De3e36070-3366-4306-9e2b-a1e0b8916026&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D40a498c4-eb07-44d7-ad80-bfc15b35dd24&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1029&tfd=55707',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_aa47f803fc43617bb1263754e959c7075e88c6c52639cf7dc2488d3baf4b7c24","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=07065392-0a70-4033-b041-e4983cd4dd48","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":false,"is_in_treatment":true}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=21&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D07065392-0a70-4033-b041-e4983cd4dd48&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D40a498c4-eb07-44d7-ad80-bfc15b35dd24&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1238&tfd=56736',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265174179&tfd=56743',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265174359&tfd=56924',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265174907&tfd=57471',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265175756&tfd=58321',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"07065392-0a70-4033-b041-e4983cd4dd48","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"e"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=902298fb-0397-4f8b-9d18-df7f0940fc7e',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=22&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D07065392-0a70-4033-b041-e4983cd4dd48&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3De3e36070-3366-4306-9e2b-a1e0b8916026&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1027&tfd=58470',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_8a43eb7bb85d82ef9c1a13e72ba07b8561e9f99ad5ac5707e29826e6ed71dd43","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=902298fb-0397-4f8b-9d18-df7f0940fc7e","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":false,"is_in_treatment":true}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=23&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D902298fb-0397-4f8b-9d18-df7f0940fc7e&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3De3e36070-3366-4306-9e2b-a1e0b8916026&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1733&tfd=59490',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265176929&tfd=59494',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265177342&tfd=59906',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265177884&tfd=60449',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"902298fb-0397-4f8b-9d18-df7f0940fc7e","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"e"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=fde88563-873d-4abd-9924-416c5b7b8858',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=24&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D902298fb-0397-4f8b-9d18-df7f0940fc7e&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D07065392-0a70-4033-b041-e4983cd4dd48&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1019&tfd=60597',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_ec13f2fdca2f95cc94978bdc5b66bbb5321e9ecca27a98445a2f68b3f8d3f6bf","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=fde88563-873d-4abd-9924-416c5b7b8858","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":true,"is_in_treatment":false}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=25&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dfde88563-873d-4abd-9924-416c5b7b8858&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D07065392-0a70-4033-b041-e4983cd4dd48&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1105&tfd=61625',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265179066&tfd=61631',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265179313&tfd=61878',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265180059&tfd=62623',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"fde88563-873d-4abd-9924-416c5b7b8858","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"e"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=ee905ad4-6980-4242-922d-ef3c1c874c6b',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=26&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dfde88563-873d-4abd-9924-416c5b7b8858&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D902298fb-0397-4f8b-9d18-df7f0940fc7e&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1025&tfd=62777',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_d2cd9ff913876241495a6e924b483fdf7d162a64322b693db4ad3ca87a7400c6","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=ee905ad4-6980-4242-922d-ef3c1c874c6b","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":false,"is_in_treatment":true}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=27&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dee905ad4-6980-4242-922d-ef3c1c874c6b&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D902298fb-0397-4f8b-9d18-df7f0940fc7e&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1150&tfd=63798',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265181238&tfd=63802',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265181513&tfd=64078',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265182194&tfd=64759',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"ee905ad4-6980-4242-922d-ef3c1c874c6b","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"e"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=ab6a68e9-fd84-4936-ac2e-e91487004cd3',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=28&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dee905ad4-6980-4242-922d-ef3c1c874c6b&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dfde88563-873d-4abd-9924-416c5b7b8858&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1020&tfd=64915',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_e111d3b2f655688371502e9ad41e77cff974ea0b20fe7baf5b913a88114141d3","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=ab6a68e9-fd84-4936-ac2e-e91487004cd3","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":true,"is_in_treatment":false}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=29&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dab6a68e9-fd84-4936-ac2e-e91487004cd3&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dfde88563-873d-4abd-9924-416c5b7b8858&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1117&tfd=65940',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265183380&tfd=65944',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265183694&tfd=66259',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265184431&tfd=66996',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"ab6a68e9-fd84-4936-ac2e-e91487004cd3","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"e"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=451b93d5-986e-4f8c-ab6b-6c054a6ea15e',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=30&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dab6a68e9-fd84-4936-ac2e-e91487004cd3&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dee905ad4-6980-4242-922d-ef3c1c874c6b&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1023&tfd=67209',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_c930a5ce99d534e547b355864c451bd34bc48710db85472a716c2b8551d284ef","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=451b93d5-986e-4f8c-ab6b-6c054a6ea15e","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":false,"is_in_treatment":true}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=31&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D451b93d5-986e-4f8c-ab6b-6c054a6ea15e&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dee905ad4-6980-4242-922d-ef3c1c874c6b&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1267&tfd=68244',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265185687&tfd=68251',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265186061&tfd=68625',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265186786&tfd=69351',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"451b93d5-986e-4f8c-ab6b-6c054a6ea15e","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"e"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=c9e3a312-0982-4b18-a1fb-3884d19ec216',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=32&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D451b93d5-986e-4f8c-ab6b-6c054a6ea15e&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dab6a68e9-fd84-4936-ac2e-e91487004cd3&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1034&tfd=69506',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_75cd273cfff85b96fbf099c2479ed969bdfb327003d396538855922d8903a2d9","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=c9e3a312-0982-4b18-a1fb-3884d19ec216","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":true,"is_in_treatment":false}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=33&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dc9e3a312-0982-4b18-a1fb-3884d19ec216&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dab6a68e9-fd84-4936-ac2e-e91487004cd3&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1260&tfd=70527',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265187966&tfd=70531',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265188142&tfd=70706',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265189466&tfd=72030',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"c9e3a312-0982-4b18-a1fb-3884d19ec216","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"d"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=d2dbae36-5309-47ba-b621-6e16ab44d92e',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=34&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dc9e3a312-0982-4b18-a1fb-3884d19ec216&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D451b93d5-986e-4f8c-ab6b-6c054a6ea15e&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1021&tfd=72187',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_f623008f68bc06acb01e7cc7f21e3557273040089ebab0fc1ebfa377c4d6e135","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=d2dbae36-5309-47ba-b621-6e16ab44d92e","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":false,"is_in_treatment":true}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=35&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dd2dbae36-5309-47ba-b621-6e16ab44d92e&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D451b93d5-986e-4f8c-ab6b-6c054a6ea15e&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1658&tfd=73231',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265190673&tfd=73237',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265191266&tfd=73830',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265192012&tfd=74576',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"d2dbae36-5309-47ba-b621-6e16ab44d92e","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"e"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=08749725-c285-4987-9149-c020354e5cd0',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=36&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dd2dbae36-5309-47ba-b621-6e16ab44d92e&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dc9e3a312-0982-4b18-a1fb-3884d19ec216&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1043&tfd=74726',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_0a23d1bbb076c5c2487859b7afebe81622326018a224106e1f8d5b5cbdeac7bf","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=08749725-c285-4987-9149-c020354e5cd0","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":true,"is_in_treatment":false}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=37&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D08749725-c285-4987-9149-c020354e5cd0&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dc9e3a312-0982-4b18-a1fb-3884d19ec216&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1493&tfd=75768',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265193209&tfd=75774',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265193648&tfd=76212',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265194504&tfd=77068',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"08749725-c285-4987-9149-c020354e5cd0","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"e"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=63cf8825-a431-4013-8f1c-536c21db5389',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=38&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D08749725-c285-4987-9149-c020354e5cd0&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dd2dbae36-5309-47ba-b621-6e16ab44d92e&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1040&tfd=77224',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_23861da18e18ad234686435a36024bc3dda7b6589971e4abb972da27fe8f6127","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=63cf8825-a431-4013-8f1c-536c21db5389","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":true,"is_in_treatment":false}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=39&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D63cf8825-a431-4013-8f1c-536c21db5389&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dd2dbae36-5309-47ba-b621-6e16ab44d92e&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1455&tfd=78266',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265195709&tfd=78273',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265196722&tfd=79286',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265197191&tfd=79755',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265197920&tfd=80484',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"63cf8825-a431-4013-8f1c-536c21db5389","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"e"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=a6460b5f-c0c8-4156-9429-f85aa2577054',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=40&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D63cf8825-a431-4013-8f1c-536c21db5389&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D08749725-c285-4987-9149-c020354e5cd0&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1041&tfd=80717',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_d4e55e6c8b1d26ed1848eac8c39a5e5cdf11cecd35931784926d6fae62b6e3ab","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=a6460b5f-c0c8-4156-9429-f85aa2577054","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":false,"is_in_treatment":true}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=41&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Da6460b5f-c0c8-4156-9429-f85aa2577054&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D08749725-c285-4987-9149-c020354e5cd0&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=2449&tfd=81748',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265199188&tfd=81752',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265199264&tfd=81828',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265200468&tfd=83033',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265201268&tfd=83832',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"a6460b5f-c0c8-4156-9429-f85aa2577054","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"e"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=2bfbb73d-692b-4217-a5fc-0e342790e050',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=42&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Da6460b5f-c0c8-4156-9429-f85aa2577054&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D63cf8825-a431-4013-8f1c-536c21db5389&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1029&tfd=84020',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_9794f49b751caa26ec4ca2be9d7d352ccbd44da170c20d71ce33301e0cd56483","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=2bfbb73d-692b-4217-a5fc-0e342790e050","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":false,"is_in_treatment":true}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=43&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D2bfbb73d-692b-4217-a5fc-0e342790e050&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D63cf8825-a431-4013-8f1c-536c21db5389&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=2270&tfd=85063',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265202505&tfd=85070',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265202630&tfd=85194',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265203541&tfd=86105',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"2bfbb73d-692b-4217-a5fc-0e342790e050","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"d"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=d9b01969-4810-4659-acc2-39af4077c345',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=44&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D2bfbb73d-692b-4217-a5fc-0e342790e050&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Da6460b5f-c0c8-4156-9429-f85aa2577054&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1041&tfd=86269',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_6702257bc57405c62a27fea9547a8e621aae01fba35913af0ea2f5b35efd0dd6","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=d9b01969-4810-4659-acc2-39af4077c345","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":false,"is_in_treatment":true}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=45&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dd9b01969-4810-4659-acc2-39af4077c345&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Da6460b5f-c0c8-4156-9429-f85aa2577054&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1204&tfd=87300',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265204739&tfd=87303',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265205065&tfd=87629',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265205794&tfd=88358',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"d9b01969-4810-4659-acc2-39af4077c345","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"e"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=71149f58-59f8-40bd-a0a0-b36bfad3e613',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=46&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dd9b01969-4810-4659-acc2-39af4077c345&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D2bfbb73d-692b-4217-a5fc-0e342790e050&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1029&tfd=88532',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_2b93cf16d5e838fb4a86ad4e500e0a5141350057be555f7447d65b1beb8c81d5","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=71149f58-59f8-40bd-a0a0-b36bfad3e613","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":false,"is_in_treatment":true}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=47&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D71149f58-59f8-40bd-a0a0-b36bfad3e613&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D2bfbb73d-692b-4217-a5fc-0e342790e050&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1231&tfd=89576',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265207018&tfd=89582',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265207350&tfd=89914',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265208370&tfd=90934',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"71149f58-59f8-40bd-a0a0-b36bfad3e613","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"d"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=858d1328-0172-422b-9175-14e6e51f4b0d',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=48&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D71149f58-59f8-40bd-a0a0-b36bfad3e613&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dd9b01969-4810-4659-acc2-39af4077c345&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1043&tfd=91105',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_2c4cf8665f924a3866e3d1079d251f302cbe624574d57f93751957ce03c8f0dd","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=858d1328-0172-422b-9175-14e6e51f4b0d","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":false,"is_in_treatment":true}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=49&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D858d1328-0172-422b-9175-14e6e51f4b0d&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dd9b01969-4810-4659-acc2-39af4077c345&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1528&tfd=92138',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265209580&tfd=92144',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265209981&tfd=92545',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265210856&tfd=93420',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"858d1328-0172-422b-9175-14e6e51f4b0d","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"d"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=cba46fa7-1825-434e-808a-65d2d352b501',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=50&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D858d1328-0172-422b-9175-14e6e51f4b0d&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D71149f58-59f8-40bd-a0a0-b36bfad3e613&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1030&tfd=93620',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_fbeb90d06043c4d4e5f1b50d3a368930e5936a29db96a22c7ca06e94aef073a6","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=cba46fa7-1825-434e-808a-65d2d352b501","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":false,"is_in_treatment":true}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=51&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dcba46fa7-1825-434e-808a-65d2d352b501&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D71149f58-59f8-40bd-a0a0-b36bfad3e613&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1480&tfd=94664',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265212106&tfd=94670',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265212468&tfd=95032',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265213307&tfd=95871',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"cba46fa7-1825-434e-808a-65d2d352b501","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"e"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=2666fd45-bc41-41c1-b1fb-9860f8d2ab93',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=52&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dcba46fa7-1825-434e-808a-65d2d352b501&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D858d1328-0172-422b-9175-14e6e51f4b0d&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1042&tfd=96031',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_4e48668a2638461c5df9c85b13baddb73e68810a9df6eadaec8a9c6252c3e22d","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=2666fd45-bc41-41c1-b1fb-9860f8d2ab93","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":true,"is_in_treatment":false}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=53&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D2666fd45-bc41-41c1-b1fb-9860f8d2ab93&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D858d1328-0172-422b-9175-14e6e51f4b0d&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1366&tfd=97073',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265214513&tfd=97077',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265214985&tfd=97549',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265215757&tfd=98321',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"2666fd45-bc41-41c1-b1fb-9860f8d2ab93","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"e"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=049bfaad-c0be-4f3e-b11b-5f85c7412ca5',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=54&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D2666fd45-bc41-41c1-b1fb-9860f8d2ab93&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dcba46fa7-1825-434e-808a-65d2d352b501&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1040&tfd=98481',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_361f758da1800862c85354baf4f312dee4091896a3a0c6f155a8aa9cdeaaac87","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=049bfaad-c0be-4f3e-b11b-5f85c7412ca5","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":false,"is_in_treatment":true}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=55&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D049bfaad-c0be-4f3e-b11b-5f85c7412ca5&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Dcba46fa7-1825-434e-808a-65d2d352b501&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1407&tfd=99529',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265216971&tfd=99535',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265217838&tfd=100402',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265218633&tfd=101197',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"049bfaad-c0be-4f3e-b11b-5f85c7412ca5","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"e"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=0b2e7f4a-8545-472d-80d2-5ee48eb3bd32',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=56&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D049bfaad-c0be-4f3e-b11b-5f85c7412ca5&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D2666fd45-bc41-41c1-b1fb-9860f8d2ab93&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1046&tfd=101433',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_c6617097870f3a96715b68735cbdde755b897229f574be0be13f9533108676b2","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=0b2e7f4a-8545-472d-80d2-5ee48eb3bd32","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":true,"is_in_treatment":false}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=57&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D0b2e7f4a-8545-472d-80d2-5ee48eb3bd32&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D2666fd45-bc41-41c1-b1fb-9860f8d2ab93&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1901&tfd=102464',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265219905&tfd=102469',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265219998&tfd=102562',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265220739&tfd=103303',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"0b2e7f4a-8545-472d-80d2-5ee48eb3bd32","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"e"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=832100e3-9a71-47de-8c9d-b0032f02222f',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=58&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D0b2e7f4a-8545-472d-80d2-5ee48eb3bd32&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D049bfaad-c0be-4f3e-b11b-5f85c7412ca5&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1031&tfd=103471',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_6c011bfc9aa5fd7193057d6e09244e8f4a2e595872882f52138ccd4f8307da78","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=832100e3-9a71-47de-8c9d-b0032f02222f","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":false,"is_in_treatment":true}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=59&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D832100e3-9a71-47de-8c9d-b0032f02222f&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D049bfaad-c0be-4f3e-b11b-5f85c7412ca5&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1005&tfd=104508',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265221949&tfd=104513',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265222419&tfd=104983',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265223125&tfd=105689',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"832100e3-9a71-47de-8c9d-b0032f02222f","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"e"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=a3dc4352-a84b-47d6-b719-f85dab894a71',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=60&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D832100e3-9a71-47de-8c9d-b0032f02222f&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D0b2e7f4a-8545-472d-80d2-5ee48eb3bd32&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1035&tfd=105852',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_3b6d23b29f7416c16b337f16ba878f0c0ecbfce39e2d42c83c851867a85608b5","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=a3dc4352-a84b-47d6-b719-f85dab894a71","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":false,"is_in_treatment":true}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=61&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Da3dc4352-a84b-47d6-b719-f85dab894a71&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D0b2e7f4a-8545-472d-80d2-5ee48eb3bd32&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1342&tfd=106894',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265224334&tfd=106898',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265224916&tfd=107480',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265225882&tfd=108445',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"a3dc4352-a84b-47d6-b719-f85dab894a71","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"c"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=69dd6b42-35c6-48ff-acb6-d697aef43dab',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=62&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Da3dc4352-a84b-47d6-b719-f85dab894a71&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D832100e3-9a71-47de-8c9d-b0032f02222f&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1041&tfd=108820',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_ca771e8cf5f4d30eb8cbdc1e9dfad3948079a3b46679e55a8aa8861212615b11","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=69dd6b42-35c6-48ff-acb6-d697aef43dab","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":true,"is_in_treatment":false}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265227174&tfd=109737',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=63&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D69dd6b42-35c6-48ff-acb6-d697aef43dab&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D832100e3-9a71-47de-8c9d-b0032f02222f&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1925&tfd=109850',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265227291&tfd=109854',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265227890&tfd=110454',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"69dd6b42-35c6-48ff-acb6-d697aef43dab","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"e"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429.data?questionId=6fe1fdce-0794-4b0f-a8d7-4f79a78c215b',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=64&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D69dd6b42-35c6-48ff-acb6-d697aef43dab&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Da3dc4352-a84b-47d6-b719-f85dab894a71&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1028&tfd=110658',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_535c4bd77d437870aebca48d7eac9888955667b00be7ade1ed647a3c28c60064","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/quiz-second-battle/5f5d2f66-654f-4389-bcd5-fa91465d1429?questionId=6fe1fdce-0794-4b0f-a8d7-4f79a78c215b","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":false,"is_in_treatment":true}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=65&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D6fe1fdce-0794-4b0f-a8d7-4f79a78c215b&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3Da3dc4352-a84b-47d6-b719-f85dab894a71&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=807&tfd=111707',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265229149&tfd=111713',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265231999&tfd=114562',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265232514&tfd=115077',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=66&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D6fe1fdce-0794-4b0f-a8d7-4f79a78c215b&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D69dd6b42-35c6-48ff-acb6-d697aef43dab&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1047&tfd=116709',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265234699&tfd=117263',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265236002&tfd=118566',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.put(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/user-question-answer/one',
      '{"questionId":"6fe1fdce-0794-4b0f-a8d7-4f79a78c215b","quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429","selectedOption":"e"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.post(
      'https://api-dev.sejutacita.id/v2/project-sfl-12/quiz/finish',
      '{"quizId":"5f5d2f66-654f-4389-bcd5-fa91465d1429"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'x-sfl-chapter': '12',
        },
      }
    )

    response = http.get(
      'https://talent-dev.dealls.com/sfl/__manifest?paths=%2Fsfl%2Fquiz%2F12%2Ffinish&version=3ba4dea6',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get('https://talent-dev.dealls.com/sfl/quiz/12/finish.data', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
      },
    })

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_3cc973d02bfd0e8ec505ca299172efedd4a96837585058d1af4bcc9a2b0751b9","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/quiz/12/finish","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":false,"is_in_treatment":true}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=67&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Ffinish&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D69dd6b42-35c6-48ff-acb6-d697aef43dab&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=7398&tfd=120182',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Ffinish&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265237624&tfd=120188',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Ffinish&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ep.ads_data_redaction=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45He6231v898039529za200zd898039529xea&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938469~116185181~116185182~116988316&apve=1&apvf=f&apvc=0&tft=1770265239399&tfd=121963',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.get('https://talent-dev.dealls.com/sfl/login/12.data', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
      },
    })

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=68&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Ffinish&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D6fe1fdce-0794-4b0f-a8d7-4f79a78c215b&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1073&tfd=122077',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://mpc2-prod-25-is5qnl632q-wl.a.run.app/events?cee=no',
      '{"event_name":"PageView","fb.dynamic_product_ads":{},"custom_data":{},"event_id":"ob3_plugin-set_311f455218c74fde28eb66b9ec0337bd5f3ac0221bf861f2bb2df02f26132457","fb.pixel_id":"639718045141621","fb.advanced_matching":{},"website_context":{"location":"https://talent-dev.dealls.com/sfl/login/12","referrer":"https://talent-dev.dealls.com/sign-in?returnUrl=%2Fsfl%2Flogin%2F12","isInIFrame":false},"fb.fbp":"fb.1.1764877160455.85058804220516338","event_meta_info":{"experiment_detail":{"name":"CEE_STRONG_PII","is_exposed":false,"is_in_control":true,"is_in_treatment":false}}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://unleash.sejutacita.id/api/frontend/client/metrics',
      '{"bucket":{"start":"2026-02-05T04:20:10.016Z","stop":"2026-02-05T04:20:40.000Z","toggles":{"dcp_sfl-configs":{"yes":5,"no":0,"variants":{"dcp_sfl-configs":5}}}},"appName":"web-sfl","instanceId":"browser"}',
      {
        headers: {
          accept: 'application/json',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          'cache-control': 'max-age=0',
          'content-type': 'application/json',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'unleash-appname': 'web-sfl',
          'unleash-connection-id': '91e94be8-4336-4c32-8185-7539965ed568',
          'unleash-sdk': 'unleash-client-js:3.7.8',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966z8898039529za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAACAAQ&_s=69&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&sid=1770265058&sct=16&seg=1&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Flogin%2F12&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Fquiz-second-battle%2F5f5d2f66-654f-4389-bcd5-fa91465d1429%3FquestionId%3D6fe1fdce-0794-4b0f-a8d7-4f79a78c215b&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1895&tfd=123133',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.post(
      'https://www.google.com/pagead/form-data/11398465741?gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google.com/ccm/collect?frm=0&en=page_view&dr=talent-dev.dealls.com&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Flogin%2F12&scrsrc=www.googletagmanager.com&rnd=212471478.1770265118&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&auid=1697518929.1764877160&navt=n&npa=0&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&gtm=45be6231v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&apve=1&apvf=f&apvc=0&tids=AW-11398465741&tid=AW-11398465741&tft=1770265240577&tfd=123141',
      null,
      {
        headers: {
          'sec-ch-ua-platform': '"macOS"',
          Referer: '',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
        },
      }
    )

    response = http.post(
      'https://www.google-analytics.com/g/collect?v=2&tid=G-HNFM342006&gtm=45je6231v874724966za20gzb898039529zd898039529&_p=1770265117994&gcd=13l3l3l3l1l1&npa=0&dma=0&cid=1904735325.1764877160&ul=en-us&sr=1680x1050&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AEAAAAQ&_s=70&tag_exp=103116026~103200004~104527906~104528500~104684208~104684211~115938466~115938468~116185181~116185182~116988316&uid=6938ac41c2919f0013984636&dl=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Flogin%2F12&dr=https%3A%2F%2Ftalent-dev.dealls.com%2Fsfl%2Fquiz%2F12%2Ffinish&sid=1770265058&sct=16&seg=1&dt=SejutaCita%20Future%20Leaders%20Vol.%2012%20%7C%20Dealls&en=page_view&_et=1054&tfd=128135',
      null,
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br, zstd',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'https://talent-dev.dealls.com',
          priority: 'u=1, i',
          'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        },
      }
    )
  })

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.request('HEAD', 'https://graphql.jam.dev/liveness_check', null, {
    headers: {
      accept: '*/*',
      'accept-encoding': 'gzip, deflate, br, zstd',
      'accept-language': 'en-US,en;q=0.9',
      'cache-control': 'max-age=0',
      priority: 'u=1, i',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'none',
      'sec-fetch-storage-access': 'active',
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
    },
  })

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&em=tv.1',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  response = http.get(
    'https://www.google.com/ccm/form-data/11398465741?gtm=45be6231p3v9170577772za20gzb898039529zd898039529xec&gcd=13l3l3l3l1l1&dma=0&tag_exp=103116026~103200004~104527906~104528501~104684208~104684211~115616986~115938466~115938468~116185181~116185182~116988315&ga_uid=G-HNFM342006.6938ac41c2919f0013984636&npa=0&frm=0&pscdl=noapi&auid=1697518929.1764877160&uaa=arm&uab=64&uafvl=Not(A%253ABrand%3B8.0.0.0%7CChromium%3B144.0.7559.110%7CGoogle%2520Chrome%3B144.0.7559.110&uamb=0&uam=&uap=macOS&uapv=15.5.0&uaw=0&ec_mode=a&ecsid=1004922083.1770265116&em=tv.1~em.YsAr_2V73d-OT1eLsjR7QZB6UEJlTtqzzHCOeet0Ek8',
    {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        referer: 'https://www.googletagmanager.com/',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-storage-access': 'active',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36',
        'x-browser-channel': 'stable',
        'x-browser-copyright': 'Copyright 2026 Google LLC. All Rights reserved.',
        'x-browser-validation': 'T3UDJlezsenCmrPQHnWX1RSDq9s=',
        'x-browser-year': '2026',
        'x-client-data': 'CIS2yQEIo7bJAQipncoBCLKKywEIk6HLAQiGoM0BGKWozwE=',
      },
    }
  )

  // Automatically added sleep
  sleep(1)
}
