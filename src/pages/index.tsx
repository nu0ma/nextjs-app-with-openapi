import { Alert, Flex, Spacer, Spinner, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Layout } from '@/components/layout/Layout';
import { PostTable } from '@/components/posts/PostTable';
import { AddPost } from '@/components/posts/AddPost';

import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { Post } from '@/api/@types';

const PostPage: NextPage = () => {
  const { data, error } = useSWR<Post[]>('/api/posts', fetcher);

  if (error)
    return <Alert status="error"> Loading failed: {error.message} </Alert>;

  return (
    <Layout>
      <Flex alignItems="center" mb="2">
        <Text fontSize="5xl">Posts</Text>
        <Spacer />
        <AddPost />
      </Flex>
      {!data ? (
        <Flex minW="600px" alignItems="center" justifyContent="center">
          <Spinner />
        </Flex>
      ) : (
        <PostTable posts={data} />
      )}
    </Layout>
  );
};

export default PostPage;
