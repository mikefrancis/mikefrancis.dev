import * as React from 'react';
import { Link } from 'gatsby';

import { Post } from '../types';
import { ThemeContext, THEME_DARK } from './ThemeProvider';

interface Props {
  posts: {
    node: Post;
  }[];
}

const PostGrid: React.FC<Props> = ({ posts }: Props) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="md:flex md:flex-wrap md:-mx-8">
      {posts.map(({ node }) => (
        <div key={node.id} className="md:w-1/3 md:px-8 mb-8 md:mb-16">
          <article>
            <h3 className="text-2xl mb-3">
              <Link to={`/blog/${node.slug}`}>{node.title}</Link>
            </h3>
            <p
              className={`mb-3 uppercase text-xs tracking-widest ${
                theme === THEME_DARK ? 'text-gray-500' : 'text-gray-700'
              }`}
            >
              {node.dateCreated}
            </p>
            <p className="text-sm">{node.excerpt.excerpt}</p>
          </article>
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
