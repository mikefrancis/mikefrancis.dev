import React from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';

import { Post } from '../types';

interface Props {
  posts: Post[];
}

const PostGrid: React.FC<Props> = ({ posts }) => {
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
            <p className="mb-3 uppercase text-xs tracking-widest text-gray-600 dark:text-gray-400">
              {dayjs(post.dateCreated).format('MMMM YYYY')}
            </p>
            <p className="text-sm">{post.excerpt}</p>
          </article>
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
