import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../lib/prisma';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query, method } = req;
  const post = String(query.post);

  // Filter out wrong verbs
  if (method !== 'GET' && method !== 'POST') {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${method} Not Allowed`);
    return;
  }

  // If it's a POST, add a star
  if (method === 'POST') {
    try {
      await prisma.star.create({
        data: {
          post,
        },
      });
    } catch (e) {
      console.error('Request error', e);

      res.status(500).json({ error: 'Error creating star' });
      return;
    }
  }

  // If it's a GET (or after a POST), return the total stars
  try {
    const stars = await prisma.star.count({
      where: {
        post,
      },
    });

    res.json({
      stars,
    });
  } catch (e) {
    console.error('Request error', e);

    res.status(500).json({ error: 'Error fetching stars' });
  }
}

export default handler;
