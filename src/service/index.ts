import axios from 'axios';
import { LOGIN_TOKEN } from '../global/constants'
import { localCache } from '../utils/cache'
// 创建axios实例
const http = axios.create({
  baseURL: 'http://codercba.com:5000',
  timeout: 10000,
});
 
// 请求拦截器：在发送请求前添加token
http.interceptors.request.use(config => {
  const token = localCache.getCache(LOGIN_TOKEN)
  if (token) {
   config.headers.Authorization = 'Bearer ' + token
   console.log(config.headers.Authorization)
  }
  return config;
}, error => {
  return Promise.reject(error);
});
 
export default http;