import { BasePlaceholderUrl } from '../../../shared/config';
import axiosInstance from './axiosInterface';

export const fetchPosts = async () => {
    // Fetch 방식
    const response = await fetch(BasePlaceholderUrl + "/posts");
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return await response.json();

    // Axios 방식
    // const response = await axiosInstance.get('/posts');
    // return await response.data; // axios는 자동으로 JSON 파싱해줌

};

