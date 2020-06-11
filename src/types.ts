export interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  dateCreated: string;
  updatedAt: string;
  excerpt: string;
  featuredImage: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  content: string;
  timeToRead: number;
}
