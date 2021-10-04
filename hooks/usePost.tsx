import { useEffect, useState } from 'react';
import { apiClient } from '../lib/apiClient';

export const usePost = () => {
  const [posts, setPosts] =
    useState<{ id: number; title: string; author: string }[]>();

  const fetchPost = async () => {
    const res = await apiClient.posts.get();
    setPosts(res.body);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return { posts };
};
