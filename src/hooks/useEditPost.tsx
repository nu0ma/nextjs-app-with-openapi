import { apiClient } from '@/lib/apiClient';

export const useEditPost = (postId: number) => {
  const editPost = async (title: string, author: string) => {
    const res = await apiClient.posts._id(postId.toString()).patch({
      body: {
        title: title,
        author: author,
      },
    });
    return res.body;
  };

  return { editPost };
};
