import { apiClient } from '@/lib/apiClient';
import useAspidaSWR from '@aspida/swr';

export const useEditPost = (postId: number) => {
  const { mutate } = useAspidaSWR(apiClient.posts, 'get', {
    revalidateOnMount: true,
  });

  const editPost = async (title: string, author: string) => {
    const res = await apiClient.posts._id(postId.toString()).patch({
      body: {
        title: title,
        author: author,
      },
    });
    mutate(await apiClient.posts.get());
    return res.body;
  };

  return { editPost };
};
