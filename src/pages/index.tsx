import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostGrid from '../components/PostGrid';
import client, { transformContentfulItem, ContentfulFields } from '../client';
import { Post } from '../types';

interface Props {
  posts: Post[];
}

const Index: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <SEO
        title="Mike Francis"
        description="Software Engineer & UI Designer based in London, UK."
      />
      <Layout>
        <div className="max-w-5xl">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-headline mb-16 md:mb-32">
              Technical Leader, Software Engineer & UI Designer based in London, UK.
              <br />
              Currently building and scaling a modern, renewable energy provider at{' '}
              <a className="hover:underline" href="https://bulb.co.uk">
                Bulb
              </a>
              .
            </h1>
          </div>

          <h2 className="mb-8 uppercase text-sm tracking-widest">
            Latest Posts
          </h2>
          <PostGrid posts={posts} />
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            <Link href="/blog">
              <a>More from the archive →</a>
            </Link>
          </p>
        </div>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const { items } = await client.getEntries<ContentfulFields>({
    limit: 3,
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

export default Index;
