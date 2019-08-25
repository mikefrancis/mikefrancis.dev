export interface Node<T> {
  node: T;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  dateCreated: string;
  excerpt: {
    excerpt: string;
  };
  content: {
    childMarkdownRemark: {
      html: string;
      timeToRead: number;
    };
  };
}

export interface GraphQLResponse<T> {
  data: T;
  pageContext?: {
    current: number;
    skip: number;
    limit: number;
    total: number;
  };
}

export interface AllMarkdownQuery<T> {
  allContentfulBlogPost: {
    edges: Node<T>[];
  };
}

export interface MarkdownQuery<T> {
  contentfulBlogPost: T;
}

export interface SiteQuery {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}
