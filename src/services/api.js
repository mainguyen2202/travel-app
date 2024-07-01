import axios from 'axios';
import { ACCESS_TOKEN, REFRESH_TOKEN, SERVER_URL } from '../constants/constants';

// Xử lí tập trung khi muốn giao tiếp với server
const api = axios.create({
    baseURL: SERVER_URL,
});

// Add a request interceptor
// Interceptor này kiểm tra xem có access token được lưu trong localStorage hay không, và nếu có, nó sẽ thêm access token vào tiêu đề "Authorization" của yêu cầu.
api.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem(ACCESS_TOKEN);
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Add a response interceptor
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // If the error status is 401 and there is no originalRequest._retry flag,
        // it means the token has expired and we need to refresh it
        if (error.response !== undefined && error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            // Nếu có lỗi với mã trạng thái 401 (Unauthorized) và không có cờ _retry trên yêu cầu gốc, interceptor sẽ hiểu rằng access token đã hết hạn và cần được làm mới.

            try {
                // Interceptor sẽ lấy refresh token từ localStorage, gửi một yêu cầu POST đến /auth/refresh_token trên máy chủ để lấy access token và refresh token mới
                const refreshToken = localStorage.getItem(REFRESH_TOKEN);
                const response = await axios.post(`${SERVER_URL}/auth/refresh_token`, {
                }, {
                    headers: {
                        'Authorization': `Bearer ${refreshToken}`
                    }
                });
                const { access_token, refresh_token } = response.data;
                // interceptor sẽ lưu chúng vào localStorage và thử lại yêu cầu gốc bằng access token mới
                localStorage.setItem(ACCESS_TOKEN, access_token);
                localStorage.setItem(REFRESH_TOKEN, refresh_token);

                // Retry the original request with the new token
                originalRequest.headers.Authorization = `Bearer ${access_token}`;
                return axios(originalRequest);
            } catch (error) {
                // Handle refresh token error or redirect to login
                console.error('error', error);
            }
        }
        return { status: 204, message: error.message };
        // return Promise.reject(error);
    }
);


export default api