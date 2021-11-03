import { apiClient } from '@/lib/apiClient';
import { useQueryClient } from 'react-query';

export const useDeletePost = (postId: number) => {
  const queryClient = useQueryClient();

  const deletePost = async () => {
    const res = await apiClient.posts._id(postId.toString()).delete();
    queryClient.invalidateQueries(apiClient.posts.$path());

    return res.body;
  };

  return { deletePost };
};
