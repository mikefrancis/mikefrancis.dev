import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostGrid from '../components/PostGrid';
import { getPosts } from '../lib/client';
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
              Technical Leader, Software Engineer & UI Designer based in London,
              UK.
              <br />
              Currently building and scaling broadband for good at{' '}
              <a className="hover:underline" href="https://cuckoo.co">
                Cuckoo
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
  const posts = await getPosts({
    limit: 3,
  });

  return {
    props: {
      posts,
    },
  };
}

export default Index;
