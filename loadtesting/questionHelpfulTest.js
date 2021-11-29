import http from 'k6/http';
import { sleep, check } from 'k6';


// export const options = {
//   stages: [
//     { duration: '30s', target: 10 },
//     { duration: '30s', target: 100 },
//     { duration: '20s', target: 500},
//   ],
//   thresholds: {
//     http_req_failed: ['rate<0.01'],
//     http_req_duration: ['p(100)<2000'],
//   },
// };

export default function () {
  const url = 'http://localhost:3121/qa/questions/3518977/helpful';

  check(http.put(url), {
    'is status 200': (r) => r.status === 200,
  })
  sleep(1);
}
