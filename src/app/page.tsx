import { Metadata } from 'next';
import Link from 'next/link';

import Button from '../components/Button';
import PageTitle from '../components/PageTitle';
import PostGrid from '../components/PostGrid';
import { getPosts } from '../lib/contentful';

export const metadata: Metadata = {
  title: 'Mike Francis',
  description: 'Software Engineer & UI Designer based in London, UK.',
};

const Page = async () => {
  const posts = await getPosts({
    limit: 3,
  });

  return (
    <div className="">
      <article className="max-w-4xl mx-auto space-y-5 md:space-y-10 text-center pt-10 pb-20 md:pt-20 md:pb-40">
        <PageTitle>Technical Leader, Software Engineer & UI Designer</PageTitle>
        <p className="text-xl">
          Currently building something completely
          <span className="text-sm font-bold bg-gray-200 dark:bg-gray-900 mx-2 px-2 py-1 rounded inline-block -rotate-6 font-mono uppercase hover:animate-wiggle">
            new
          </span>
          in the green tech space.
        </p>
      </article>

      <aside className="space-y-10">
        <h2 className="font-bold text-2xl">Latest Posts</h2>
        <PostGrid posts={posts} />
        <p className="text-center pt-10">
          <Button as={Link} href="/blog" prefetch={false}>
            Archive{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="group-hover:animate-wiggle ml-2 w-5 h-5"
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
    </div>
  );
};

export default Page;
