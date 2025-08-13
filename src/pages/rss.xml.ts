import rss from "@astrojs/rss";
import dayjs from "dayjs";
import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("blog");

  const items = posts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    pubDate: dayjs(post.data.createdAt).toDate(),
    link: `/blog/${post.id}`,
  }));

  return rss({
    title: "Mike Francis' Blog",
    description: "UK based Engineering Lead, Software Engineer",
    site: "https://www.mikefrancis.dev",
    items,
  });
}
