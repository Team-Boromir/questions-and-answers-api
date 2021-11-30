import http from 'k6/http';
import { sleep, check } from 'k6';


export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '20s', target: 100 },
    { duration: '30s', target: 500 },
    { duration: '20s', target: 1000},
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(100)<2000'],
  },
};

export default function () {
  const url = 'http://localhost:3121/qa/questions/';
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const data = JSON.stringify({
    "product_id": 1,
    "body": "Testing",
    "name": "me",
    "email": "yg@g.com"
});
  check (http.post(url, data, params), {
    'is status 200': (r) => r.status === 200
  })
  sleep(1);
}
