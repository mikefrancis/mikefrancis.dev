import dayjs from 'dayjs';
import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { WithRouterProps } from 'next/dist/client/with-router';

import { Post } from '../../types';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import client, {
  transformContentfulItem,
  ContentfulFields,
} from '../../client';

interface Props {
  post: Post;
}

const Page: React.FC<Props & WithRouterProps> = ({ post, router }) => {
  const seoProps: React.ComponentProps<typeof SEO> = {
    title: post.title,
    description: post.excerpt,
  };

  if (router && typeof window !== 'undefined') {
    seoProps.url = window.location.href;
  }

  if (post.featuredImage) {
    seoProps.image = `https:${post.featuredImage.fields.file.url}`;
  }

  return (
    <>
      <SEO {...seoProps} />
      <Layout>
        <article className="max-w-3xl">
          <div className="mb-8">
            <h1 className="text-5xl mb-8">{post.title}</h1>

            <div className="flex mb-8 md:mb-16 text-sm tracking-widest text-gray-600 dark:text-gray-400">
              <span className="block uppercase">
                {dayjs(post.dateCreated).format('MMMM YYYY')}
                {post.updatedAt !== post.dateCreated && (
                  <span className="ml-2">(Updated)</span>
                )}
              </span>

              <span className="pl-16 block uppercase">
                {post.timeToRead === 0
                  ? 'less than a minute'
                  : `${post.timeToRead} ${
                      post.timeToRead === 1 ? 'minute' : 'minutes'
                    }`}
              </span>
            </div>
          </div>

          <div
            className="wysiwyg text-lg mb-16"
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />
        </article>

        <p className="mb-8 text-gray-600 dark:text-gray-400">
          <Link href="/blog">
            <a>← Back to the archive</a>
          </Link>
        </p>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const { items } = await client.getEntries<ContentfulFields>({
    content_type: 'post',
    order: '-fields.dateCreated',
  });

  const paths = items.map((item) => ({
    params: {
      post: item.fields.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { post: slug } = context.params;
  const { items } = await client.getEntries<ContentfulFields>({
    content_type: 'post',
    'fields.slug': slug,
  });

  const post = await transformContentfulItem(items[0]);

  return {
    props: {
      post,
    },
  };
}

export default withRouter(Page);
