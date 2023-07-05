import { getPosts } from '../../lib/contentful';
import { generateRssFeed } from '../../lib/rss';

export async function GET() {
  const posts = await getPosts();
  const rss = generateRssFeed(posts);

  return new Response(rss, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
