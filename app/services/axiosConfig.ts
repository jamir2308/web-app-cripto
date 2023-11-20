
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.coinlore.net/api',
});

export default axiosInstance;
