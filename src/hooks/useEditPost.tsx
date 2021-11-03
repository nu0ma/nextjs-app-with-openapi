import { apiClient } from '@/lib/apiClient';

import { useQueryClient } from 'react-query';

export const useEditPost = (postId: number) => {
  const queryClient = useQueryClient();

  const editPost = async (title: string, author: string) => {
    const res = await apiClient.posts._id(postId.toString()).patch({
      body: {
        title: title,
        author: author,
      },
    });

    queryClient.invalidateQueries(apiClient.posts.$path());
    return res.body;
  };

  return { editPost };
};
