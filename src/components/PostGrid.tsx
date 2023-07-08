import dayjs from 'dayjs';
import Link from 'next/link';

import { Post } from '../types';

interface Props {
  posts: Post[];
}

const PostGrid = ({ posts }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {posts.map((post) => (
        <article key={post.id} className="space-y-5">
          <h3 className="font-bold">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p className="uppercase text-xs tracking-widest text-gray-600 dark:text-gray-400">
            {dayjs(post.dateCreated).format('MMMM YYYY')}
          </p>
          <p className="text-sm">{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
};

export default PostGrid;
