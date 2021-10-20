import { GetServerSidePropsContext } from 'next';

import { getPosts } from '../lib/client';
import { generateRssFeed } from '../lib/rss';

const Page = () => {
  return null;
};

export default Page;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = context.res;

  if (!res) {
    return;
  }

  const posts = await getPosts();
  const rss = generateRssFeed(posts as any);

  res.setHeader('Content-Type', 'text/xml');
  res.write(rss);
  res.end();

  return {
    props: {},
  };
}
