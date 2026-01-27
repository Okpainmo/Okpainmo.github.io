import React from 'react';
import PostCard from '../PostCard';
import { posts } from '@/app/data/blog';
import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';

function BlogIntro() {
  return (
    <div className="py-20 flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <div className="brand text-2xl font-bold">/blog/select-posts</div>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl">
          Thought leadership and technical deep dives into the worlds of
          development, blockchain architecture, and product design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <Link
        href="/blog"
        className="flex self-start h-12 items-center justify-center gap-3 rounded-full border border-zinc-200 px-8 
          transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900 font-medium"
      >
        Visit full blog <HiArrowUpRight />
      </Link>
    </div>
  );
}

export default BlogIntro;
