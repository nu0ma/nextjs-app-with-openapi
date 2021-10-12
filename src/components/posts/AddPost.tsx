import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  toast,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAddPost } from '@/hooks/useAddPost';

type Input = {
  id: string;
  title: string;
  author: string;
};

export const AddPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm({
    mode: 'all',
  });
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { addPost } = useAddPost();

  const onSubmit: SubmitHandler<Input> = async (data) => {
    const { id, title, author } = data;
    const res = await addPost(id, title, author);
    toast({
      title: `${res.title} added.`,
      status: 'success',
      duration: 900,
    });

    onClose();
    reset();
  };

  return (
    <>
      <Button colorScheme="teal" variant="solid" onClick={onOpen}>
        Add
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <ModalHeader>Add Post</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex flexDirection="column">
                <FormControl isInvalid={errors.id ? true : false} mb="4">
                  <FormLabel htmlFor="id">ID</FormLabel>
                  <Input
                    id="id"
                    {...register('id', {
                      required: 'ID is required.',
                    })}
                    type="text"
                  />
                  <FormErrorMessage role="alert">
                    {errors.id && errors.id.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.title ? true : false} mb="4">
                  <FormLabel htmlFor="title">Title</FormLabel>
                  <Input
                    id="title"
                    {...register('title', {
                      required: 'Title is required.',
                    })}
                    type="text"
                  />
                  <FormErrorMessage role="alert">
                    {errors.title && errors.title.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.author ? true : false}>
                  <FormLabel htmlFor="author">Author</FormLabel>
                  <Input
                    id="author"
                    {...register('author', {
                      required: 'Author is required.',
                    })}
                    type="text"
                  />
                  <FormErrorMessage role="alert">
                    {errors.author && errors.author.message}
                  </FormErrorMessage>
                </FormControl>
              </Flex>
            </ModalBody>

            <ModalFooter mt="8">
              <Button colorScheme="gray" mr={3} onClick={onClose}>
                閉じる
              </Button>
              <Button
                colorScheme="teal"
                type="submit"
                disabled={!isValid}
                isLoading={isSubmitting}
              >
                決定
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
