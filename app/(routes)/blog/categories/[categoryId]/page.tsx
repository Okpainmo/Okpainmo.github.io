import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { HiArrowLongRight } from 'react-icons/hi2';
// import MainAppLayout from '@/app/global-components/layout/MainAppLayout';
import PostListPageTitleHeader from '../../components/PostPageComponents/PostListPageTitleHeader';
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import { categories } from '@/app/data/blog';
import CategoriesListWrapper from '../../components/CategoriesListWrapper';

type Props = {
  params: { categoryId: string };
};

const basePath = 'content';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const currentCategoryData = categories.find((category) => {
    return category.categoryId === params.categoryId;
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

function CategoryPage({ params }: Props) {
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
    return post.postCategory === params.categoryId;
  });

  // console.log(categoryPosts);
  const currentCategoryData = categories.find((category) => {
    return category.categoryId === params.categoryId;
  });

  return (
    <>
      <main>
        <header>
          <div className="brand text-2xl font-bold pt-10 pb-0 sm:pt-32 sm:pb-0 text-black dark:text-zinc-50">
            {`./Okpainmo/blog`} <br /> {`(${params.categoryId})`}
          </div>
        </header>

        <section className="py-10">
          <CategoriesListWrapper />
        </section>

        {categoryPosts?.length > 0 ? (
          <section
            className="min-h-screen px-3 sm:px-[20px] grid gap-y-[40px] md:gap-y-[50px] gap-x-[30px]
          md:gap-x-[50px] text-left lg:w-full lg:mb-0 sm:grid-cols-2 lg:grid-cols-3 lg:text-left md:mt-[50px] py-[50px] mx-auto"
          >
            {categoryPosts?.map((each) => {
              return (
                <Link
                  key={each.postSlug}
                  href={`/${each.postCategory}/${each.postSlug
                    .replace(/\s/g, '-')
                    .toLowerCase()}`}
                  className="flex flex-col justify-between group rounded-lg pb-4 min-h-[270px]"
                >
                  <section>
                    <div className="post-image-wrapper mb-4">
                      <Image
                        className="w-full rounded-lg"
                        src={each.postThumbnailUrl}
                        alt={each.postTitle}
                        width={300}
                        height={300}
                      />
                    </div>
                    <div
                      className={`mb-3 text-[20px] font-semibold flex items-start justify-between gap-5 sm:gap-8`}
                    >
                      <span className="post-title poppins md:min-h-[65px]">
                        {/* <span className='post-title poppins font-thin md:min-h-[140px]'> */}
                        {each.postTitle}
                      </span>
                      <div className="text_teal-core mt-2 inline-flex items-center gap-2 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        <span className="text-[14px]">Read</span>{' '}
                        <HiArrowLongRight />
                      </div>
                    </div>
                    <p
                      className={`m-0 w-full text-[14px] opacity-50 post-brief`}
                    >
                      {each?.postBrief?.slice(0, 100)}...
                    </p>
                  </section>
                  <div className="date-and-author mt-4 text-[12px]">
                    {each.postDate} | {each.authorName}
                  </div>
                </Link>
              );
            })}
          </section>
        ) : (
          <section className="min-h-screen pt-[100px] px-3 sm:px-[20px] lg:px-12 text-center text-gray-500 poppins text-base leading-[30px]">
            No posts added to this category. <br /> Please check back soon... 😊
          </section>
        )}
      </main>
    </>
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
