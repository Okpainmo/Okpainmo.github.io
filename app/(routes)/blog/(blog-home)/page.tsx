import React from 'react';
import PostCard from '../components/PostCard';
import CategoriesListWrapper from '@/app/components/CategoriesListWrapper';
import type { Metadata } from 'next';
import matter from 'gray-matter';
import fs from 'fs';
import BlogLayout from '../components/layout/BlogLayout';
import NoPostsFound from '@/app/components/NoPostsFound';

export const metadata: Metadata = {
  title: 'Andrew Okpainmo | Blog',
  description:
    'Awesome articles on tech trends, top-quality tutorials, industry insights and so much about us at Zed Labs.',
  keywords: [
    'Technology',
    'Software Development',
    'Artificial Intelligence',
    'Machine Learning',
    'Cloud Computing',
    'Cybersecurity',
    'Tech News',
    'Programming',
    'Data Science',
    'Blockchain/Web3',
    'Ethereum',
    'Solana'
  ]
};

import PaginatedPostList from '../components/PaginatedPostList';

// to get blog posts
const blogPostsBasePath = 'blog-content';

async function BlogHomePage() {
  const blogFiles = fs.readdirSync(blogPostsBasePath);

  const mdxBlogPosts = blogFiles.filter((file) => file.endsWith('.mdx'));

  const blogPostsFileContent = mdxBlogPosts.map((each) => {
    const fileContent = fs.readFileSync(`${blogPostsBasePath}/${each}`, 'utf8');
    const matterResult = matter(fileContent);
    return matterResult.data;
  });

  const sortedBlogPosts = blogPostsFileContent.sort(
    (a: any, b: any) => b.postIndex - a.postIndex
  );

  return (
    <BlogLayout>
      <header className="flex flex-col gap-4">
        <div className="brand text-2xl font-bold pt-10 pb-0 sm:pt-32 sm:pb-0 text-black dark:text-zinc-50 poppins text-center">
          ./Okpainmo/blog
        </div>
        <div className="max-w-2xl mx-auto px-3 sm:px-0 text-center">
          <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed lato">
            Awesome articles on tech trends, top-quality tutorials, industry
            insights and more.
          </p>
        </div>
      </header>
      <div className="flex flex-col gap-12 py-10">
        <CategoriesListWrapper />

        {sortedBlogPosts?.length > 0 ? (
          <PaginatedPostList posts={sortedBlogPosts} baseUrl="/blog" />
        ) : (
          <NoPostsFound
            message="No blog posts available yet"
            subMessage="Do check back soon..."
          />
        )}
      </div>
    </BlogLayout>
  );
}

export default BlogHomePage;
