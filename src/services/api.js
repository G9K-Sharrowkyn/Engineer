import axios from 'axios';
const API_URL = 'http://localhost:5000/api';

export const fetchCurrentValues = () =>
  axios.get(`${API_URL}/current`);

export const fetchHistoricalData = (sensor, range = '24h') =>
  axios.get(`${API_URL}/history/${sensor}?range=${range}`);