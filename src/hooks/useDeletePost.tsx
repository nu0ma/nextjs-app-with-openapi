import { apiClient } from '@/lib/apiClient';
import { Post } from 'src/api/@types';
import { mutate } from 'swr';

export const useDeletePost = (postId: number) => {
  const deletePost = async () => {
    const res = await apiClient.posts._id(postId.toString()).delete();
    mutate(
      '/api/posts',
      async (posts: Post[]) => {
        const filteredPosts = posts.filter((post) => post.id !== postId);
        return filteredPosts;
      },
      false
    );
    return res.body;
  };

  return { deletePost };
};
