import { create } from 'zustand';

type Post = {
    id: number,
    title: string,
    body: string,
};

type PostState = {
    posts: Post[];
    isLoading: boolean;
    setPosts: (p: Post[]) => void;
    setLoading: (isLoading: boolean) => void;
};

export const usePostStore = create<PostState>((set) => ({
    posts: [],
    isLoading: false,
    setPosts: (pararmPost) => set({ posts: pararmPost }),
    setLoading: (isLoading) => set({ isLoading }),
}));