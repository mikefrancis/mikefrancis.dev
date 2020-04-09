import React from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';

import { Post } from '../types';
import { ThemeContext, THEME_DARK } from './ThemeProvider';

interface Props {
  posts: Post[];
}

const PostGrid: React.FC<Props> = ({ posts }) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="md:flex md:flex-wrap md:-mx-8">
      {posts.map(post => (
        <div key={post.id} className="md:w-1/3 md:px-8 mb-8 md:mb-16">
          <article>
            <h3 className="text-2xl mb-3">
              <Link href={`/blog/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h3>
            <p
              className={`mb-3 uppercase text-xs tracking-widest ${
                theme === THEME_DARK ? 'text-gray-500' : 'text-gray-700'
              }`}
            >
              {dayjs(post.dateCreated).format('MMMM D, YYYY')}
            </p>
            <p className="text-sm">{post.excerpt}</p>
          </article>
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
