import { apiClient } from '@/lib/apiClient';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const posts = await apiClient.posts.get();
    res.status(200).json(posts.body);
  } catch (error) {
    res.status(500).json({ error });
  }
};
