import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://tchokopay-backend-4.onrender.com', // replace with your real backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Api;
