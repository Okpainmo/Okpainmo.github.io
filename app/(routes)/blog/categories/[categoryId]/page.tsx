import React from 'react';
import type { Metadata } from 'next';
// import PostListPageTitleHeader from '../../components/PostPageComponents/PostListPageTitleHeader';
import fs from 'fs';
import matter from 'gray-matter';
import { categories } from '@/app/data/blog';
import CategoriesListWrapper from '../../components/CategoriesListWrapper';
import PostCard from '../../components/PostCard';
import BlogLayout from '../../components/layout/BlogLayout';

type Props = {
  params: Promise<{ categoryId: string }>;
};

const basePath = 'content';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryId } = await params;

  // read route params
  const currentCategoryData = categories.find((category) => {
    return category.categoryId === categoryId;
  });

  // console.log('tracking page params', params);

  return {
    title: currentCategoryData?.categoryName,
    description: currentCategoryData?.categoryBrief,
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
}

// const pageId = 'blog';

async function CategoryPage({ params }: Props) {
  const { categoryId } = await params;

  const files = fs.readdirSync(basePath);

  const mdxPosts = files.filter((file) => file.endsWith('.mdx'));

  const allPostFilePaths = mdxPosts.map((each) => {
    return each;
  });

  const allPostFileContent = allPostFilePaths.map((each) => {
    const fileContent = fs.readFileSync(`${basePath}/${each}`, 'utf8');

    const matterResult = matter(fileContent);

    return matterResult.data;
  });

  // console.log(allPostFileContent);

  const categoryPosts = allPostFileContent.filter((post) => {
    return post.postCategory === categoryId;
  });

  const sortedCategoryPosts = categoryPosts.sort(
    (a: any, b: any) => b.postIndex - a.postIndex
  );

  // console.log(categoryPosts);
  const currentCategoryData = categories.find((category) => {
    return category.categoryId === categoryId;
  });

  return (
    <BlogLayout>
      <main>
        <header>
          <div className="brand text-2xl font-bold pt-10 pb-0 sm:pt-32 sm:pb-0 text-black dark:text-zinc-50">
            {`./Okpainmo/blog`} <br /> {`(${categoryId})`}
          </div>
        </header>

        <section className="py-10">
          <CategoriesListWrapper />
        </section>

        {sortedCategoryPosts?.length > 0 ? (
          <section
            className="px-3 sm:px-[20px] lg:px-0 grid gap-y-[40px] gap-x-[30px] text-left lg:w-full lg:mb-0
          sm:grid-cols-2 lg:grid-cols-3 lg:text-left pt-[20px] pb-[50px] mx-auto"
          >
            {sortedCategoryPosts?.map((each: any) => {
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
        ) : (
          <section className="min-h-screen pt-[100px] px-3 sm:px-[20px] lg:px-12 text-center text-gray-500 text-base leading-[30px]">
            No posts added to this category. <br /> Please check back soon... 😊
          </section>
        )}
      </main>
    </BlogLayout>
  );
}

export default CategoryPage;

export async function generateStaticParams() {
  const paths = categories.map((category) => {
    return { categoryId: category.categoryId };
  });

  // console.log(paths);
  return paths;
}
