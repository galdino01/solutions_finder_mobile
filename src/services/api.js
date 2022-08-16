import axios from 'axios'

const api = axios.create({
  baseURL: 'http://192.168.100.66:15000/api',
});
export default api
