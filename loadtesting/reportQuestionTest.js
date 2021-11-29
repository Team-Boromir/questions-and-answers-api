import http from 'k6/http';
import { sleep, check } from 'k6';


export default function () {
  const url = 'http://localhost:3121/qa/questions/3518977/report';

  check(http.put(url), {
    'is status 200': (r) => r.status === 200,
  })
  sleep(1);
}
