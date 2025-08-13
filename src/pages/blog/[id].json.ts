import { createClient } from "@vercel/kv";
import { type APIContext } from "astro";

export const prerender = false;

const kv = createClient({
  url: import.meta.env.KV_REST_API_URL,
  token: import.meta.env.KV_REST_API_TOKEN,
});

export async function GET({ params }: APIContext) {
  try {
    const slug = params.id as string;
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
}

export async function POST({ params }: APIContext) {
  const slug = params.id as string;

  try {
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
}
