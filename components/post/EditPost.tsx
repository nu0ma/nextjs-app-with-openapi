import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  FormLabel,
} from '@chakra-ui/react';

import { EditIcon } from '@chakra-ui/icons';
import { apiClient } from '../../lib/apiClient';
import { Post } from '../../api/@types';

type Props = {
  post: Post;
};

export const EditPost = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async () => {
    await apiClient.posts.post({
      body: {
        id: props.post.id,
        author: 'test author',
        title: 'test title',
      },
    });

    console.log('called');
  };

  return (
    <>
      <Button onClick={onOpen}>
        <EditIcon />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Post</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <FormLabel>Title</FormLabel>
              <Input />
              <FormLabel>Author</FormLabel>
              <Input />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="gray" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="teal" type="submit">
                決定
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
