import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '30s', target: 100 },
    { duration: '20s', target: 1000},
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(100)<2000'],
  },
};

export default function () {
  http.get('http://localhost:3121/qa/questions/?product_id=7');
  sleep(1);
}