import dayjs from 'dayjs';
import { GetStaticPropsContext, NextPage } from 'next';
import Link from 'next/link';
import { FormEvent } from 'react';
import useSWR from 'swr';

import Button from '../../components/Button';
import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import SEO from '../../components/SEO';
import {
  getPreviewPostBySlug,
  getPostBySlug,
  getPosts,
} from '../../lib/contentful';
import { Post } from '../../types';

const fetcher = (...args: any) => fetch(args).then((res) => res.json());

interface Props {
  post: Post;
}

const Page: NextPage<Props> = ({ post }) => {
  const { data, mutate } = useSWR(`/api/${post.slug}`, fetcher);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await fetch(`/api/${post.slug}`, {
      method: 'POST',
    });
    mutate({
      ...data,
      stars: data.stars + 1,
    });
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        url={`https://mikefrancis.dev/blog/${post.slug}`}
        image={
          post.featuredImage
            ? `https:${post.featuredImage.fields.file.url}`
            : undefined
        }
      />
      <Layout>
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
            <form className="" method="POST" onSubmit={handleSubmit}>
              <Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="group-hover:animate-wiggle w-5 h-5 mr-2"
                >
                  <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                </svg>
                {data ? data.stars : 0}
              </Button>
            </form>
          </div>
        </article>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map((post) => ({
    params: {
      post: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

type Params = {
  post: string;
};

export async function getStaticProps(context: GetStaticPropsContext<Params>) {
  const { post: slug } = context.params as Params;
  const query = context.preview ? getPreviewPostBySlug : getPostBySlug;
  const post = await query(slug);

  return {
    props: {
      post,
    },
  };
}

export default Page;
