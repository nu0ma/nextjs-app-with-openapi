import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { apiClient } from '../lib/apiClient';

const Home: NextPage = () => {
  const [posts, setPosts] = useState<
    { id: number; title: string; author: string }[]
  >([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await apiClient.posts.get({
        query: {
          id: '1',
        },
      });
      setPosts(res.body);
    };
    fetchPost();
  }, []);

  return <div>{JSON.stringify(posts)}</div>;
};

export default Home;
