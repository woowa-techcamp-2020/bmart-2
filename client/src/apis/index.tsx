import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:4000/api',
});

// export default axios.create({
//   baseURL: 'http://172.30.1.12:4000/api',
// });
