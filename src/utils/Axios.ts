import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://rodfaibob-backend.micromew.com', // Replace with your default domain
    timeout: 30000000,
    headers: { 'Content-Type': 'application/json' }
});


axiosInstance.interceptors.request.use(request => {
    console.log('Starting Request', request);
    return request;
});


axiosInstance.interceptors.response.use(response => {
    console.log('Response:', response);
    return response;
});

export default axiosInstance;