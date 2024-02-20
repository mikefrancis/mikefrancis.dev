import { createClient } from "@vercel/kv";
import { getBlogPosts } from "../../lib/contentful";
import { type APIRoute } from "astro";

export const prerender = false;

const kv = createClient({
  url: import.meta.env.KV_REST_API_URL,
  token: import.meta.env.KV_REST_API_TOKEN,
});

export async function getStaticPaths() {
  const items = await getBlogPosts();

  const posts = items.map((item) => ({
    params: { slug: item.slug },
  }));

  return posts;
}

export const GET: APIRoute = async ({ params }) => {
  try {
    const slug = params.slug as string;
    const count = (await kv.get<number>(slug)) ?? 0;

    return new Response(
      JSON.stringify({
        stars: count,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (e) {
    console.error("Request error", e);

    return new Response("Error fetching stars", {
      status: 500,
    });
  }
};

export const POST: APIRoute = async ({ params }) => {
  try {
    const slug = params.slug as string;
    let count = (await kv.get<number>(slug)) ?? 0;
    count++;

    await kv.set(slug, count);

    return new Response(
      JSON.stringify({
        stars: count,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (e) {
    console.error("Request error", e);

    return new Response("Error creating star", {
      status: 500,
    });
  }
};
