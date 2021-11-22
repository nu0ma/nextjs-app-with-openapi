import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Post } from '../api/@types';
import { Layout } from '../components/layout/Layout';
import { Posts } from '../components/post/index';
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
      <Posts posts={posts} />
    </Layout>
  );
};

export default Home;
