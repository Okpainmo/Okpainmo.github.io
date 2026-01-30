import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiArrowUpRight } from 'react-icons/hi2';
import { Post } from '@/globals';

interface PostCardProps {
  post: {
    title: string;
    intro: string;
    category: string;
    tags: string[];
    slug: string;
    thumbnailUrl: string;
    date: string;
    author: string;
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-700/50 rounded-2xl p-6 flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow group">
      {/* {post.thumbnailUrl && (
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-zinc-100 dark:border-zinc-800">
          <Image
            src={post.thumbnailUrl}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )} */}

      <div className="flex flex-col gap-3">
        <h3 className="text-xl font-bold text-black dark:text-white poppins">
          {post.title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed line-clamp-2">
          {post.intro}
        </p>
        <Link
          href={`/blog/categories/${post.category}/${post.slug
            .replace(/\s/g, '-')
            .toLowerCase()}`}
          className="flex items-center gap-1 text-sm font-semibold text-black dark:text-white hover:underline group/story"
        >
          Read post
          <HiArrowUpRight className="text-xs group-hover/story:translate-x-0.5 group-hover/story:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      <div className="flex flex-col gap-4 mt-auto pt-4 border-t border-zinc-50 dark:border-zinc-800/50">
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-500">
              Category
            </span>
            <span className="text-xs font-semibold text-black dark:text-white">
              {post.category}
            </span>
          </div>
          {(post.date || post.author) && (
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-500">
                Published
              </span>
              <span className="text-[10px] text-zinc-500 dark:text-zinc-400">
                {post.date} {post.author && `by ${post.author}`}
              </span>
            </div>
          )}
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
