import { NextPage } from 'next';
import Link from 'next/link';

import Button from '../components/Button';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import PostGrid from '../components/PostGrid';
import SEO from '../components/SEO';
import { getPosts } from '../lib/contentful';
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
        <article className="max-w-4xl mb-16 md:mb-32 space-y-5">
          <PageTitle>
            Technical Leader, Software Engineer & UI Designer based in London,
            UK.
          </PageTitle>
          <p className="text-xl">
            Currently building something completely new in the green tech space.
          </p>
        </article>

        <aside className="space-y-10">
          <h2 className="uppercase text-xs tracking-widest">Latest Posts</h2>
          <PostGrid posts={posts} />
          <p>
            <Button as={Link} href="/blog" prefetch={false}>
              More from the archive{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-2 w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </p>
        </aside>
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
