import { getPreviewPostBySlug } from '../../lib/contentful';

export async function GET(request: Request) {
  const params = new URLSearchParams(request.url);
  const token = params.get('token');
  const slug = params.get('slug');

  if (token !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return new Response('Invalid token', {
      status: 401,
    });
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  const post = await getPreviewPostBySlug(slug);

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!post) {
    return new Response('Invalid slug', {
      status: 401,
    });
  }

  // Enable Preview Mode by setting the cookies
  // res.setPreviewData({});

  return new Response('Invalid token', {
    status: 307,
    headers: {
      Location: `/blog/${post.slug}`,
    },
  });
}
