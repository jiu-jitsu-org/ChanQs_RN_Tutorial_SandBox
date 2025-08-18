import axios from "axios";
import { BasePlaceholderUrl } from '../../../shared/config';

const axiosInstance = axios.create({
    baseURL: BasePlaceholderUrl, // 기본 API URL
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// 인터셉터 예시 (선택)
// axiosInstance.interceptors.request.use(config => {
//   // 예: 토큰 붙이기 등
//   return config;
// });

export default axiosInstance;