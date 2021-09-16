import { NextApiRequest, NextApiResponse } from 'next';
import { getPreviewPostBySlug } from '../../client';

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { token, slug } = req.query;

  if (token !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  const post = await getPreviewPostBySlug(slug as string);

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!post) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched post
  res.writeHead(307, { Location: `/blog/${post.slug}` })
  res.end();
}
