import React from 'react';
import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import { Post } from '@/app/data/blog';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow group">
      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold text-black dark:text-white poppins line-clamp-2">
          {post.title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed line-clamp-2">
          {post.intro}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="flex items-center gap-1 text-sm font-semibold text-black dark:text-white hover:underline group/story"
        >
          Read post
          <HiArrowUpRight className="text-xs group-hover/story:translate-x-0.5 group-hover/story:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      <div className="flex flex-col gap-4 mt-auto">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-500">
            Category
          </span>
          <span className="text-xs font-semibold text-black dark:text-white">
            {post.category}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-zinc-500 dark:text-zinc-400 font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
