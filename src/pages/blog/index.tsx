import { NextPage } from 'next';

import Layout from '../../components/Layout';
import PostGrid from '../../components/PostGrid';
import SEO from '../../components/SEO';
import { getPosts } from '../../lib/contentful';
import { Post } from '../../types';

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
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
