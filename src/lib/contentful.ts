import {
  createClient,
  type EntryFieldTypes,
  type EntriesQueries,
} from "contentful";
import { micromark } from "micromark";

export const client = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : import.meta.env.CONTENTFUL_ACCESS_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

export interface ContentfulBlogPost {
  contentTypeId: "post";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    dateCreated: EntryFieldTypes.Date;
    excerpt: EntryFieldTypes.Text;
    content: EntryFieldTypes.Text;
    featuredImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
}

export async function getBlogPosts(
  params?: EntriesQueries<ContentfulBlogPost, any>
) {
  const entries = await client.getEntries<ContentfulBlogPost>({
    ...params,
    content_type: "post",
    order: "-sys.createdAt",
  } as any);

  const items = entries.items.map((item) => {
    return {
      title: item.fields.title,
      slug: String(item.fields.slug),
      date: item.fields.dateCreated,
      content: micromark(item.fields.content),
      excerpt: item.fields.excerpt,
      // @ts-ignore
      featuredImage: item.fields.featuredImage?.fields?.file.url,
    };
  });

  return items;
}
