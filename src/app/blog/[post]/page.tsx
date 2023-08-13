import dayjs from 'dayjs';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Link from 'next/link';

import Button from '../../../components/Button';
import PageTitle from '../../../components/PageTitle';
import Stars from '../../../components/Stars';
import { Template } from '../../../components/Template';
import { getPostBySlug, getPreviewPostBySlug } from '../../../lib/contentful';

interface Props {
  params: {
    post: string;
  };
}

export const generateMetadata = async ({
  params: { post: slug },
}: Props): Promise<Metadata> => {
  const query = draftMode().isEnabled ? getPreviewPostBySlug : getPostBySlug;
  const post = await query(slug);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: post.featuredImage
      ? {
          images: [`https:${post.featuredImage.fields.file.url}`],
        }
      : null,
  };
};

const Page = async ({ params: { post: slug } }: Props) => {
  const query = draftMode().isEnabled ? getPreviewPostBySlug : getPostBySlug;
  const post = await query(slug);

  return (
    <Template>
      <article className="space-y-10">
        <div className="text-center max-w-4xl mx-auto">
          <PageTitle>{post.title}</PageTitle>
        </div>

        <div className="flex justify-center items-center space-x-5 text-xs tracking-widest text-gray-600 dark:text-gray-400">
          <p className="uppercase">
            {dayjs(post.dateCreated).format('MMMM YYYY')}
            {post.updatedAt !== post.dateCreated && (
              <span className="ml-2">(Updated)</span>
            )}
          </p>

          <p className="uppercase">
            {post.timeToRead === 0
              ? 'less than a minute'
              : `${post.timeToRead} ${
                  post.timeToRead === 1 ? 'minute' : 'minutes'
                }`}
          </p>
        </div>

        <div
          className="wysiwyg text-lg mb-16 max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        />

        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <Button as={Link} href="/blog">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="group-hover:animate-wiggle w-5 h-5 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                clipRule="evenodd"
              />
            </svg>
            Back to the archive
          </Button>
          <Stars post={post} />
        </div>
      </article>
    </Template>
  );
};

export default Page;
