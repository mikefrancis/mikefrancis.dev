import { Metadata } from 'next';

import PageTitle from '../../components/PageTitle';
import PostGrid from '../../components/PostGrid';
import { Template } from '../../components/Template';
import { getPosts } from '../../lib/contentful';

export const metadata: Metadata = {
  title: 'Blog Archive',
};

const Page = async () => {
  const posts = await getPosts();

  return (
    <Template>
      <div className="space-y-10 lg:space-y-20">
        <div className="text-center">
          <PageTitle>Blog Archive</PageTitle>
        </div>
        <PostGrid posts={posts} />
      </div>
    </Template>
  );
};

export default Page;
