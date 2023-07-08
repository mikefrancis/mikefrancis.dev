import { NextPage } from 'next';

import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
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
      <div className="space-y-10 lg:space-y-20">
        <div className="text-center">
          <PageTitle>Blog Archive</PageTitle>
        </div>
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
