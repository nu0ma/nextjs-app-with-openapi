import { apiClient } from '@/lib/apiClient';

import { useQueryClient } from 'react-query';

export const useAddPost = () => {
  const queryClient = useQueryClient();

  const addPost = async (id: string, title: string, author: string) => {
    const newPost = {
      id: Number(id),
      title: title,
      author: author,
    };

    const res = await apiClient.posts.post({
      body: newPost,
    });

    queryClient.invalidateQueries(apiClient.posts.$path());

    return res.body;
  };

  return { addPost };
};
