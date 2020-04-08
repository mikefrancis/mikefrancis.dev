import React from 'react';
import { NextPage } from 'next';

import { Post } from '../../types';
import client, {
  transformContentfulItem,
  ContentfulFields,
} from '../../client';
import Layout from '../../components/Layout';
import PostGrid from '../../components/PostGrid';
import SEO from '../../components/SEO';

interface Props {
  posts: Post[];
}

const Blog: NextPage<Props> = ({ posts }) => (
  <>
    <SEO title="Blog Archive" />
    <Layout>
      <div className="max-w-5xl">
        <h1 className="text-4xl mb-16 md:mb-32">Blog Archive</h1>

        <PostGrid posts={posts} />
      </div>
    </Layout>
  </>
);

export async function getStaticProps() {
  const { items } = await client.getEntries<ContentfulFields>({
    content_type: 'post',
    order: '-fields.dateCreated',
  });

  const posts = await Promise.all(items.map(transformContentfulItem));

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
