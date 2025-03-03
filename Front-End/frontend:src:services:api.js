// frontend/src/services/api.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api';


const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export const getEvents = () => api.get('/events/');
export const getBlogs = (category) => {
  let url = '/blogs/';
  if (category) {
      url += `?category=${category}`;  // Add category filtering
  }
  return api.get(url)
};
export const getBlog = (id) => api.get(`/blogs/${id}/`);
export const getSIGs = () => api.get('/sigs/');
export const getSIG = (name) => api.get(`/sigs/${name}/`);  // Get single SIG
export const getProjects = () => api.get('/projects/');
export const getProject = (id) => api.get(`/projects/${id}/`);
// Add more API functions as needed (e.g., createBlog, updateEvent, etc.)
// Example POST request
export const createBlog = (blogData) => api.post('/blogs/', blogData);


export default api;