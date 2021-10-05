import { apiClient } from '@/lib/apiClient';
import { useDisclosure, useToast } from '@chakra-ui/react';
import { mutate } from 'swr';

export const useDeletePost = (postId: number) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const deletePost = async () => {
    const res = await apiClient.posts._id(postId.toString()).delete();
    mutate('/api/posts');
    return res.body;
  };

  const handleClick = async () => {
    await deletePost();

    toast({
      title: `Deleted.`,
      status: 'success',
      duration: 900,
    });
    onClose();
  };

  return { deletePost, handleClick, isOpen, onOpen, onClose };
};
