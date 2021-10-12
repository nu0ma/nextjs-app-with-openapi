import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEditPost } from '@/hooks/useEditPost';

type Props = {
  postId: number;
};

type Input = {
  title: string;
  author: string;
};

export const EditPost = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { editPost } = useEditPost(props.postId);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm({
    mode: 'all',
  });

  const onSubmit: SubmitHandler<Input> = async (data) => {
    const { title, author } = data;
    const res = await editPost(title, author);
    toast({
      title: `Edit ${res.title}`,
      status: 'success',
      duration: 900,
    });
    onClose();
    reset();
  };

  return (
    <>
      <IconButton
        aria-label="edit distributor functions"
        icon={<EditIcon />}
        size="sm"
        mr={1}
        onClick={onOpen}
        data-testid="edit"
      />

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <ModalHeader>Edit Post</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex flexDirection="column">
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
