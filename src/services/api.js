import axios from 'axios';

const api = axios.create({
  baseURL: 'https://randomuser.me/api/?seed=fixed',
});

export default api;
