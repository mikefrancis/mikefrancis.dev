import { Post } from './types';

const BLOG_URL = 'http://mikefrancis.dev';

async function generateRssItem(post: Post) {
  const content = post.content;

  return `
    <item>
      <guid>${BLOG_URL}/blog/${post.slug}</guid>
      <title>${post.title}</title>
      <description>${post.excerpt}</description>
      <link>${BLOG_URL}/posts/${post.slug}</link>
      <pubDate>${new Date(post.dateCreated).toUTCString()}</pubDate>
      <content:encoded><![CDATA[${content}]]></content:encoded>
    </item>
  `;
}

export async function generateRssFeed(posts: Post[]) {
  const itemsList = await Promise.all(posts.map(generateRssItem));

  return `
    <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" version="2.0">
      <channel>
        <title>Mike Francis</title>
        <link>${BLOG_URL}</link>
        <description>Technical leader, software engineer and UI designer</description>
        <language>en</language>
        <lastBuildDate>${new Date(
          posts[0].dateCreated,
        ).toUTCString()}</lastBuildDate>
        <atom:link href="${BLOG_URL}" rel="self" type="application/rss+xml"/>
        ${itemsList.join('')}
      </channel>
    </rss>
  `;
}
