import { useToast } from '@chakra-ui/toast';
import { apiClient } from '../../lib/apiClient';

export const useAddPost = () => {
  const toast = useToast();

  const addPost = async (id: number, title: string, author: string) => {
    try {
      await apiClient.posts.post({
        body: {
          id: id,
          title: title,
          author: author,
        },
      });
      toast({
        title: 'Success',
        status: 'success',
        duration: 900,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error !',
        status: 'error',
        duration: 900,
        isClosable: true,
      });
    }
  };

  return {
    addPost,
  };
};
