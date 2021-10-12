import { apiClient } from '@/lib/apiClient';
import { mutate } from 'swr';

export const useEditPost = (postId: number) => {
  const editPost = async (title: string, author: string) => {
    const res = await apiClient.posts._id(postId.toString()).patch({
      body: {
        title: title,
        author: author,
      },
    });
    mutate('/api/posts');
    return res.body;
  };

  return { editPost };
};
