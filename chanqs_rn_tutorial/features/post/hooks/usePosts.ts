import { usePostStore } from '../store/postStore';
import { fetchPosts } from '../services/postService';
import { useCallback } from 'react';

export const usePosts = () => {
    const { setPosts, setLoading } = usePostStore();

    const loadPosts = useCallback(async () => {
        try {
            setLoading(true);
            const posts = await fetchPosts();
            setPosts(posts.slice(0, 10)); // 예시로 10개만
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, [setPosts, setLoading]);

    return { loadPosts };
};