import axios from 'axios';
import { ACCESS_TOKEN, REFRESH_TOKEN, SERVER_URL } from '../constants/constants';

// middleware

// Xử lí gọi API không cần auth (bearer token)
const anonymousApi = axios.create({
    baseURL: SERVER_URL,
});

// Add a request interceptor
anonymousApi.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => Promise.reject(error)
);

// Add a response interceptor
anonymousApi.interceptors.response.use(
    (response) => response,
    async (error) => {
        return { status: 204, message: error.message };
        // return Promise.reject(error);
    }
);

export default anonymousApi;