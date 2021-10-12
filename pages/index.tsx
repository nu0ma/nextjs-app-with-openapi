import type { NextPage } from 'next';
import { usePost } from '../hooks/usePost';

const Home: NextPage = () => {
  const { posts } = usePost();

  return <div>{JSON.stringify(posts)}</div>;
};

export default Home;
