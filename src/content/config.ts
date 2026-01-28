import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.object({
      zh: z.string(),
      en: z.string(),
    }),
    excerpt: z.object({
      zh: z.string(),
      en: z.string(),
    }),
    date: z.string(),
    category: z.object({
      zh: z.string(),
      en: z.string(),
    }),
    image: z.string(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  posts: postsCollection,
};
