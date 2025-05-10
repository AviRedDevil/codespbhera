import axios from 'axios';
const baseURL = import.meta.env.PROD ? '/api' : 'http://localhost:8000/api';
const api = axios.create({
  baseURL,
  withCredentials: true 
});
export const userApi = {
  register: (userData) => api.post('/User/register', userData),
  login: (credentials) => api.post('/User/login', credentials),
  getProfile: () => api.get('/User/profile'),
  getSettings: () => api.get('/User/settings'),
  logout: () => api.get('/User/logout')
};

export const adminApi = {
  login: (credentials) => api.post('/Admin/login', credentials),

};

export default api;