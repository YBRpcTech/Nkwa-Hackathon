import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:5000', // replace with your real backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Api;
