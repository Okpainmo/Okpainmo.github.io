import React from 'react';
import PostCard from '../components/PostCard';
import CategoriesListWrapper from '../components/CategoriesListWrapper';
import type { Metadata } from 'next';
import matter from 'gray-matter';
import fs from 'fs';
import BlogLayout from '../components/layout/BlogLayout';

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

// to get blog posts
const blogPostsBasePath = 'content';

function BlogHomePage() {
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

  const sortedBlogPosts = blogPostsFileContent.sort(
    (a: any, b: any) => b.postIndex - a.postIndex
  );

  return (
    <BlogLayout>
      <header>
        <div className="brand text-2xl font-bold pt-10 pb-0 sm:pt-32 sm:pb-0 text-black dark:text-zinc-50">
          ./Okpainmo/blog
        </div>
      </header>
      <div className="flex flex-col gap-12 py-10">
        <CategoriesListWrapper />
        <section
          className="px-3 sm:px-[20px] lg:px-0 lg:max-w-6xl grid gap-y-[40px] gap-x-[30px] text-left lg:w-full lg:mb-0
        sm:grid-cols-2 lg:grid-cols-3 lg:text-left"
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
      </div>
    </BlogLayout>
  );
}

export default BlogHomePage;
