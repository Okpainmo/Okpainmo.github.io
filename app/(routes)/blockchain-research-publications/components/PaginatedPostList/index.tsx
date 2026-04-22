'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PostCard from '../PostCard';
import Pagination from '@/app/components/Pagination';

const POSTS_PER_PAGE = 12;

function PostListContent({
  posts,
  baseUrl
}: {
  posts: any[];
  baseUrl: string;
}) {
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const currentPage = page ? parseInt(page) : 1;
  const validatedPage = isNaN(currentPage) || currentPage < 1 ? 1 : currentPage;

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (validatedPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="flex flex-col gap-12">
      <section
        className="px-3 sm:px-[20px] lg:px-0 lg:max-w-6xl grid gap-y-[40px] gap-x-[30px] text-left lg:w-full lg:mb-0
      sm:grid-cols-2 lg:grid-cols-3 lg:text-left"
      >
        {paginatedPosts.map((each: any) => {
          const post = {
            id: each.postSlug,
            title: each.postTitle,
            intro: each.postBrief,
            category: each.postCategory,
            tags: each.postTags || [],
            slug: each.postSlug,
            thumbnailUrl: each.postThumbnailUrl,
            date: each.postDate,
            lastUpdated: each.postLastUpdated,
            author: each.authorName
          };
          return <PostCard key={post.id} post={post} />;
        })}
      </section>

      <Pagination
        currentPage={validatedPage}
        totalPages={totalPages}
        baseUrl={baseUrl}
      />
    </div>
  );
}

export default function PaginatedPostList({
  posts,
  baseUrl
}: {
  posts: any[];
  baseUrl: string;
}) {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-zinc-500">
          Loading publications...
        </div>
      }
    >
      <PostListContent posts={posts} baseUrl={baseUrl} />
    </Suspense>
  );
}
