import React from 'react';
import type { Metadata } from 'next';
// import PostListPageTitleHeader from '../../components/PostPageComponents/PostListPageTitleHeader';
import fs from 'fs';
import matter from 'gray-matter';
import { categories } from '@/app/data/blockchain-research-publications';
import CategoriesListWrapper from '@/app/components/CategoriesListWrapper';
import PostCard from '../../components/PostCard';
import BlogLayout from '../../components/layout/ResearchLayout';
import NoPostsFound from '@/app/components/NoPostsFound';

import PaginatedPostList from '../../components/PaginatedPostList';

type Props = {
  params: Promise<{ categoryId: string }>;
};

const basePath = 'blockchain_publications-content';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryId } = await params;

  const currentCategoryData = categories.find((category: any) => {
    return category.categoryId === categoryId;
  });

  return {
    title: currentCategoryData?.categoryName,
    description: currentCategoryData?.categoryBrief,
    openGraph: {
      title: `Andrew Okpainmo | Research - ${currentCategoryData?.categoryName}`,
      description: currentCategoryData?.categoryBrief,
      url: 'https://okpainmo.github.io/blockchain-research-publications',
      siteName: 'Andrew Okpainmo | Research',
      images: [
        {
          url: 'https://okpainmo.github.io/_/okpainmo__the-logo.png',
          width: 800,
          height: 800
        }
      ],
      locale: 'en-US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `Andrew Okpainmo | Research - ${currentCategoryData?.categoryName}`,
      description: currentCategoryData?.categoryBrief,
      creator: '@AJ_Okpainmo',
      images: ['https://okpainmo.github.io/_/okpainmo__the-logo.png']
    },
    icons: {
      icon: 'https://okpainmo.github.io/_/okpainmo__the-logo.png'
    },
    keywords: [
      'Blockchain Research',
      'Distributed Systems',
      'Consensus Protocols',
      'Technical Publications'
    ]
  };
}

async function CategoryPage({ params }: Props) {
  const { categoryId } = await params;

  const currentCategoryData = categories.find((category: any) => {
    return category.categoryId === categoryId;
  });

  const files = fs.readdirSync(basePath);

  const mdxPosts = files.filter((file) => file.endsWith('.mdx'));

  const allPostFileContent = mdxPosts.map((each) => {
    const fileContent = fs.readFileSync(`${basePath}/${each}`, 'utf8');
    const matterResult = matter(fileContent);
    return matterResult.data;
  });

  const categoryPosts = allPostFileContent.filter((post) => {
    return (
      post.postCategory === categoryId ||
      post.subCategories?.includes(categoryId)
    );
  });

  const sortedCategoryPosts = categoryPosts.sort(
    (a: any, b: any) => b.postIndex - a.postIndex
  );

  return (
    <BlogLayout>
      <main>
        <header className="flex flex-col gap-4">
          <div className="brand text-2xl font-bold pt-10 pb-0 sm:pt-32 sm:pb-0 text-black dark:text-zinc-50 poppins text-center">
            {`./Okpainmo/blockchain-research-publications`} <br />{' '}
            {`(${categoryId})`}
          </div>
          {currentCategoryData?.categoryBrief && (
            <div className="max-w-2xl mx-auto px-3 sm:px-0 text-center">
              <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed lato">
                {currentCategoryData.categoryBrief}
              </p>
            </div>
          )}
        </header>

        <section className="py-10">
          <CategoriesListWrapper
            categories={categories}
            basePath="/blockchain-research-publications"
          />
        </section>

        {sortedCategoryPosts?.length > 0 ? (
          <PaginatedPostList
            posts={sortedCategoryPosts}
            baseUrl={`/blockchain-research-publications/categories/${categoryId}`}
          />
        ) : (
          <NoPostsFound
            message="No research publications in this category"
            subMessage="Do check back soon..."
          />
        )}
      </main>
    </BlogLayout>
  );
}

export default CategoryPage;

export async function generateStaticParams() {
  const paths = categories.map((category: any) => {
    return { categoryId: category.categoryId };
  });

  return paths;
}
