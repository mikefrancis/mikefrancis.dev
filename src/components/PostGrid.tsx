import * as React from "react";
import { Link } from "gatsby";

import { Post } from "../types";

interface Props {
  posts: {
    node: Post;
  }[];
}

const PostGrid: React.FC<Props> = ({ posts }) => (
  <div className="md:flex md:flex-wrap md:-mx-8">
    {posts.map(({ node }) => (
      <div key={node.id} className="md:w-1/3 md:px-8 mb-16">
        <article>
          <h3 className="text-2xl mb-3">
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </h3>
          <p className="mb-3 text-gray-500 uppercase text-xs tracking-widest">
            {node.frontmatter.date}
          </p>
          <p className="text-sm">{node.frontmatter.description}</p>
        </article>
      </div>
    ))}
  </div>
);

export default PostGrid;
