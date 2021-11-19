import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Post } from '../api/@types';
import { Layout } from '../components/layout/Layout';
import { PostTable } from '../components/post/PostTable';
import { apiClient } from '../lib/apiClient';

const Home: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const fetchPost = async () => {
    const result = await apiClient.posts.get({
      query: {},
    });
    setPosts(result.body);
    console.log(result);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Layout>
      {JSON.stringify(posts)}

      <PostTable />
    </Layout>
  );
};

export default Home;
