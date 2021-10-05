import { apiClient } from '@/lib/apiClient';
import { useDisclosure } from '@chakra-ui/react';

export const useDeletePost = (postId: number) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deletePost = async () => {
    const res = await apiClient.posts._id(postId.toString()).delete();
    return res.body;
  };

  const handleClick = async () => {
    await deletePost();
    onClose();
  };

  return { deletePost, handleClick, isOpen, onOpen, onClose };
};
