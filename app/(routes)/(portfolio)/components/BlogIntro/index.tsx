import React from 'react';
import PostCard from '../PostCard';
import Link from 'next/link';
import { HiArrowUpRight } from 'react-icons/hi2';
import type { Metadata } from 'next';
import matter from 'gray-matter';
import fs from 'fs';

// to get blog posts
const blogPostsBasePath = 'content';

function BlogIntro() {
  const blogFiles = fs.readdirSync(blogPostsBasePath);

  const mdxBlogPosts = blogFiles.filter((file) => file.endsWith('.mdx'));

  const blogPostsFilePaths = mdxBlogPosts.map((each) => {
    return each;
  });

  const blogPostsFileContent = blogPostsFilePaths.map((each) => {
    const fileContent = fs.readFileSync(`${blogPostsBasePath}/${each}`, 'utf8');

    const matterResult = matter(fileContent);

    // console.log(matterResult.data);
    return matterResult.data;
  });

  const sortedBlogPosts = blogPostsFileContent
    .sort((a: any, b: any) => b.postIndex - a.postIndex)
    .slice(0, 4);

  return (
    <div className="py-20 flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <div className="brand text-2xl font-bold text-black dark:text-zinc-50">
          /blog/select-posts
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl">
          Thought leadership and technical deep dives into the worlds of
          development, blockchain architecture, and product design.
        </p>
      </div>

      <section
        className="px-3 sm:px-[20px] lg:max-w-6xl lg:px-0 grid gap-y-[40px] gap-x-[30px] text-left lg:w-full 
      lg:mb-0 sm:grid-cols-2 lg:text-left"
      >
        {sortedBlogPosts.map((each: any) => {
          const post = {
            id: each.postSlug,
            title: each.postTitle,
            intro: each.postBrief,
            category: each.postCategory,
            tags: each.postTags || [],
            slug: each.postSlug,
            thumbnailUrl: each.postThumbnailUrl,
            date: each.postDate,
            author: each.authorName
          };
          return <PostCard key={post.id} post={post} />;
        })}
      </section>

      <Link
        href="/blog"
        target="_blank"
        rel="noopener noreferrer"
        className="flex self-start h-12 items-center justify-center gap-3 rounded-full border border-zinc-200 px-8 
          transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:border-zinc-700 font-medium"
      >
        Visit full blog <HiArrowUpRight />
      </Link>
    </div>
  );
}

export default BlogIntro;
