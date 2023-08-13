import * as contentful from 'contentful';
import { micromark } from 'micromark';

import { timeToRead } from './utils';

interface ContentfulFields {
  title: string;
  description: string;
  dateCreated: string;
  updatedAt: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: { fields: { file: { url: string } } };
}

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  space: process.env.CONTENTFUL_SPACE_ID as string,
});

function transformContentfulItem(item: contentful.Entry<ContentfulFields>) {
  return {
    ...item.fields,
    id: item.sys.id,
    content: micromark(item.fields.content),
    timeToRead: timeToRead(item.fields.content),
  };
}

export async function getPosts(args = {}) {
  const { items } = await client.getEntries<ContentfulFields>({
    content_type: 'post',
    order: '-fields.dateCreated',
    ...args,
  });

  const posts = items.map(transformContentfulItem);

  return posts;
}

export async function getPostBySlug(slug: string) {
  const { items } = await client.getEntries<ContentfulFields>({
    content_type: 'post',
    'fields.slug': slug,
  });

  if (!items.length) {
    throw new Error(`Cannot find slug: ${slug}`);
  }

  return transformContentfulItem(items[0]);
}

export async function getPreviewPostBySlug(slug: string) {
  const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN as string,
    space: process.env.CONTENTFUL_SPACE_ID as string,
    host: 'preview.contentful.com',
  });

  const { items } = await client.getEntries<ContentfulFields>({
    content_type: 'post',
    'fields.slug': slug,
  });

  if (!items.length) {
    throw new Error(`Cannot find slug: ${slug}`);
  }

  return transformContentfulItem(items[0]);
}
