import * as contentful from 'contentful';
import micromark from 'micromark';

export interface ContentfulFields {
  slug: string;
  content: string;
}

const WORDS_PER_MINUTE = 265;

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  space: process.env.CONTENTFUL_SPACE_ID as string,
});

function timeToRead(rawString: string) {
  const totalWords = rawString
    .replace(/^\s+/, '')
    .replace(/\s+$/, '')
    .split(' ').length;

  return Math.ceil(totalWords / WORDS_PER_MINUTE);
}

export const transformContentfulItem = (
  item: contentful.Entry<ContentfulFields>,
) => ({
  ...item.fields,
  id: item.sys.id,
  content: micromark(item.fields.content),
  timeToRead: timeToRead(item.fields.content),
});

export const getPostBySlug = async (slug: string) => {
  const { items } = await client.getEntries<ContentfulFields>({
    content_type: 'post',
    'fields.slug': slug,
  });

  if (!items.length) {
    throw new Error(`Cannot find slug: ${slug}`);
  }

  return transformContentfulItem(items[0]);
};

export const getPreviewPostBySlug = async (slug: string) => {
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
};

export default client;
