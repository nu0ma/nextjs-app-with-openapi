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
  Text,
} from '@chakra-ui/react';
import { useAddPost } from './useAddPost';

import { SubmitHandler, useForm } from 'react-hook-form';
import { Post } from '../../api/@types';

export const AddPost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { addPost } = useAddPost();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<Post> = (data) => {
    const { id, title, author } = data;
    addPost(id, title, author);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal">
        Add
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Add Post</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <FormLabel>ID</FormLabel>
              <Input
                {...register('id', {
                  required: true,
                })}
              ></Input>
              {errors?.id?.type === 'required' && (
                <Text color="red">This field is required</Text>
              )}

              <FormLabel>Title</FormLabel>
              <Input
                {...register('title', {
                  required: true,
                })}
              ></Input>
              {errors?.title?.type === 'required' && (
                <Text color="red">This field is required</Text>
              )}
              <FormLabel>Author</FormLabel>
              <Input
                {...register('author', {
                  required: true,
                })}
              ></Input>
              {errors?.author?.type === 'required' && (
                <Text color="red">This field is required</Text>
              )}
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                閉じる
              </Button>
              <Button colorScheme="teal" type="submit" disabled={!isValid}>
                決定
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
