import { apiClient } from '@/lib/apiClient';

export const useAddPost = () => {
  const addPost = async (id: string, title: string, author: string) => {
    await apiClient.posts.post({
      body: {
        id: Number(id),
        title: title,
        author: author,
      },
    });
  };

  return { addPost };
};
