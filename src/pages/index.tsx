import { Box, Flex, Spacer, Spinner, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Layout } from 'src/components/layout/Layout';
import { PostTable } from 'src/components/posts/PostTable';
import { AddPost } from 'src/components/posts/AddPost';
import { usePost } from '../hooks/usePost';
import useAspidaSWR from '@aspida/swr';
import { apiClient } from '@/lib/apiClient';

const Home: NextPage = () => {
  // const { posts } = usePost();
  const { data, error, mutate } = useAspidaSWR(apiClient.posts, 'get');

  return (
    <Layout>
      <Flex alignItems="center" mb="2">
        <Text fontSize="5xl">Posts</Text>
        <Spacer />
        <AddPost />
      </Flex>
      {!data?.body ? (
        <Flex minW="600px" alignItems="center" justifyContent="center">
          <Spinner />
        </Flex>
      ) : (
        <PostTable posts={data.body} />
      )}
    </Layout>
  );
};

export default Home;
