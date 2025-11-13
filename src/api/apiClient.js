import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// trước khi gửi request đi
apiClient.interceptors.request.use(config => {
  // thêm token vào header từ localStorage 
    const token = localStorage.getItem('token');    
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
        }
    return config;
});


// xử lý response từ server
apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default apiClient;
