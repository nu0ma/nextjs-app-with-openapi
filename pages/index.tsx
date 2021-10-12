import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Post } from '../api/@types';
import { apiClient } from '../lib/apiClient';

const Home: NextPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const fetchPost = async () => {
    const result = await apiClient.posts.get();
    setPosts(result.body);
    console.log(result);
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return <div>{JSON.stringify(posts)}</div>;
};

export default Home;
