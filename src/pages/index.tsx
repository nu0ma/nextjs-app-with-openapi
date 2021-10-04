import { Spinner, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Layout } from 'src/components/layout/Layout';
import { PostTable } from 'src/components/posts/PostTable';
import { usePost } from '../hooks/usePost';

const Home: NextPage = () => {
  const { posts } = usePost();

  return (
    <Layout>
      <Text fontSize="5xl" mb="6">
        Posts
      </Text>
      {!posts ? <Spinner /> : <PostTable posts={posts} />}
    </Layout>
  );
};

export default Home;
