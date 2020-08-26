import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:4000/api',
  withCredentials: true
});

// export default axios.create({
//   baseURL: 'http://172.30.1.12:4000/api',
// });
