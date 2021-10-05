import { apiClient } from '@/lib/apiClient';
import { Post } from 'src/api/@types';
import { mutate } from 'swr';

export const useAddPost = () => {
  const addPost = async (id: string, title: string, author: string) => {
    const newPost = {
      id: Number(id),
      title: title,
      author: author,
    };

    const res = await apiClient.posts.post({
      body: newPost,
    });

    mutate(
      '/api/posts',
      async (posts: Post[]) => {
        return [...posts, res.body];
      },
      false
    );
    return res.body;
  };

  return { addPost };
};
