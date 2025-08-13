import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./blog-posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featuredImage: z.string().optional(),
    createdAt: z.coerce.date(),
  }),
});

export const collections = { blog };
