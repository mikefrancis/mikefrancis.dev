import kv from '@vercel/kv';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query, method } = req;
  const post = String(query.post);

  // Filter out wrong verbs
  if (method !== 'GET' && method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
    return;
  }

  let count = (await kv.get<number>(post)) ?? 0;

  // If it's a POST, add a star
  if (method === 'POST') {
    count++;

    try {
      await kv.set(post, count);
    } catch (e) {
      console.error('Request error', e);

      res.status(500).json({ error: 'Error creating star' });
      return;
    }
  }

  // If it's a GET (or after a POST), return the total stars
  try {
    res.json({
      stars: count,
    });
  } catch (e) {
    console.error('Request error', e);

    res.status(500).json({ error: 'Error fetching stars' });
  }
}

export default handler;
