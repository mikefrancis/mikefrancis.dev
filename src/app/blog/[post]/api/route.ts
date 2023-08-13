import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET(_request: Request, { params: { post } }: Params) {
  const count = (await kv.get<number>(post)) ?? 0;

  try {
    return NextResponse.json({
      stars: count,
    });
  } catch (e) {
    console.error('Request error', e);

    return new Response('Error fetching stars', {
      status: 500,
    });
  }
}

interface Params {
  params: {
    post: string;
  };
}

export async function POST(_request: Request, { params: { post } }: Params) {
  let count = (await kv.get<number>(post)) ?? 0;

  count++;

  try {
    await kv.set(post, count);
  } catch (e) {
    console.error('Request error', e);

    return new Response('Error creating star', {
      status: 500,
    });
  }
}
