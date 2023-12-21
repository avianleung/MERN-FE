import axios from 'axios';

export default axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8000/api',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json"
  }
});