import { Flex, Spacer, Spinner, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Layout } from 'src/components/layout/Layout';
import { PostTable } from 'src/components/posts/PostTable';
import { AddPost } from 'src/components/posts/AddPost';
import { usePost } from '../hooks/usePost';

const Home: NextPage = () => {
  const { posts } = usePost();

  return (
    <Layout>
      <Flex alignItems="center" mb="2">
        <Text fontSize="5xl">Posts</Text>
        <Spacer />
        <AddPost />
      </Flex>
      {!posts ? <Spinner /> : <PostTable posts={posts} />}
    </Layout>
  );
};

export default Home;
