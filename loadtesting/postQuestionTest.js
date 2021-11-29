import http from 'k6/http';
import { sleep } from 'k6';


// export const options = {
//   stages: [
//     { duration: '30s', target: 10 },
//     { duration: '30s', target: 100 },
//     { duration: '20s', target: 500},
//   ],
// };

// export default function () {
//   http.post('http://localhost:3121/qa/questions/', {
//     "product_id": 1,
//     "body": "Testing",
//     "name": "me",
//     "email": "yg@g.com"
// });
//   sleep(1);
// }

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
  http.post(url, data, params);
  sleep(1);
}
