import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '30s', target: 100 },
    { duration: '20s', target: 500},
  ],
};

export default function () {
  http.get('http://localhost:3121/qa/questions/1/answers');
  sleep(1);
}