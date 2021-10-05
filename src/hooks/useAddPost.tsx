import { apiClient } from '@/lib/apiClient';
import { mutate } from 'swr';

export const useAddPost = () => {
  const addPost = async (id: string, title: string, author: string) => {
    const res = await apiClient.posts.post({
      body: {
        id: Number(id),
        title: title,
        author: author,
      },
    });
    mutate('/api/posts');
    return res.body;
  };

  return { addPost };
};
