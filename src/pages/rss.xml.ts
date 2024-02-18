import rss from "@astrojs/rss";
import { getBlogPosts } from "../lib/contentful";
import dayjs from "dayjs";

export async function GET() {
  const posts = await getBlogPosts();
  const items = posts.map((post) => ({
    title: post.title,
    description: post.excerpt,
    pubDate: dayjs(post.date).toDate(),
    link: `/blog/${post.slug}`,
  }));

  return rss({
    stylesheet: "/pretty-feed-v3.xsl",
    title: "Mike Francis' Blog",
    description: "UK based Engineering Lead, Software Engineer ",
    site: "https://www.mikefrancis.dev",
    items,
  });
}
