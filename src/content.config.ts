import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./blog-posts" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    featuredImage: z
      .object({
        url: z.url(),
        attributionAuthor: z.string().optional(),
        attributionUrl: z.url().optional(),
      })
      .optional(),
    createdAt: z.coerce.date(),
  }),
});

export const collections = { blog };
