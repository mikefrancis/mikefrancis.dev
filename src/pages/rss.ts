import { GetServerSidePropsContext } from 'next';

import client, { ContentfulFields, transformContentfulItem } from '../client';
import { generateRssFeed } from '../rss';

const Page = () => {
  return null;
};

export default Page;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = context.res;

  if (!res) {
    return;
  }

  const { items } = await client.getEntries<ContentfulFields>({
    content_type: 'post',
    order: '-fields.dateCreated',
  });

  const posts = await Promise.all(items.map(transformContentfulItem));
  const rss = await generateRssFeed(posts as any);

  res.setHeader('Content-Type', 'text/xml');
  res.write(rss);
  res.end();

  return {
    props: {},
  };
}
