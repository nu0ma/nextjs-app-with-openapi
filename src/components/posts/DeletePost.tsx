import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useDeletePost } from '@/hooks/useDeletePost';

type Props = {
  postId: number;
  postName: string;
};

export const DeletePost = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { deletePost } = useDeletePost(props.postId);
  const toast = useToast();

  const handleClick = async () => {
    await deletePost();
    toast({
      title: `Deleted.`,
      status: 'success',
      duration: 900,
    });
    onClose();
  };

  return (
    <>
      <IconButton
        aria-label="edit distributor functions"
        icon={<DeleteIcon />}
        size="sm"
        mr={1}
        onClick={onOpen}
        data-testid="delete"
      />

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Delete{' '}
            <Text fontWeight="bold" as="span">
              {props.postName}
            </Text>{' '}
            ?
          </ModalBody>

          <ModalFooter mt="8">
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              閉じる
            </Button>
            <Button colorScheme="teal" type="submit" onClick={handleClick}>
              決定
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
