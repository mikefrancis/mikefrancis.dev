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

export const transformContentfulItem = async (
  item: contentful.Entry<ContentfulFields>,
) => ({
  ...item.fields,
  id: item.sys.id,
  content: micromark(item.fields.content),
  timeToRead: timeToRead(item.fields.content),
});

export default client;
