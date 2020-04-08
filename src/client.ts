import * as contentful from 'contentful';
import remark from 'remark';

// omg why no types
const remarkHtml = require('remark-html');

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
  content: await parseMarkdown(item.fields.content),
  timeToRead: timeToRead(item.fields.content),
});

export const parseMarkdown = (rawString: string) => {
  return new Promise((resolve, reject) => {
    remark()
      .use(remarkHtml)
      .process(rawString, (err, file) => {
        if (err) {
          reject(err);
        }

        resolve(file.contents);
      });
  });
};

export default client;
