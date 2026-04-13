// 'use client';

import type { Metadata } from 'next';
import PostWrapper from './components/PostWrapper';
import PageNavigator from './components/PageNavigator';
import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
// import { serialize } from 'next-mdx-remote/serialize';
import { presetComponents } from './components/PostPageElementsSetup';
import PostPageHeadSection from './components/PostPageHeadSection';
import AboutAuthorSection from './components/AboutAuthorSection';
import { categories } from '@/app/data/blog';
import PostPageLayout from './components/layout/PostPageLayout';
import PostImageZoomModal from './components/PostImageZoomModal';
import postPageSlice from '@/app/rtk-base/slices/postPageSlice';
// below import is nextjs specific
export const dynamicParams = false;
const basePath = 'blockchain_content_publications';

type Props = {
  params: Promise<{ postId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { postId } = await params;

  const files = fs.readdirSync(basePath);

  const mdxPosts = files.filter((file) => file.endsWith('.mdx'));

  const currentPostFilePath = mdxPosts.find((item) => {
    // Extract the part after '_' and before '.mdx'
    const part = item.substring(item.indexOf('_') + 1, item.lastIndexOf('.'));

    // Check if the extracted part exactly matches the search string
    return part === postId;
  });

  const fileContent = fs.readFileSync(
    `${basePath}/${currentPostFilePath}`,
    'utf8'
  );

  const matterResult = matter(fileContent);
  const { postTitle, postBrief, postThumbnailUrl } = matterResult.data;

  // const postImage = `https://zed-labs-blog-files-bucket.s3.eu-north-1.amazonaws.com${postThumbnailUrl}`;
  const postImage = `https://okpainmo.github.io/_/okpainmo__the-logo.png`;

  return {
    title: postTitle,
    description: postBrief,
    openGraph: {
      title: postTitle,
      description: postBrief,
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
      title: postTitle,
      description: postBrief,
      creator: '@AJ_Okpainmo',
      images: ['https://okpainmo.github.io/_/okpainmo__the-logo.png']
    },
    icons: {
      icon: 'https://okpainmo.github.io/_/okpainmo__the-logo.png'
    },
    keywords: [
      'Blockchain Research',
      'Distributed Systems',
      'Consensus Algorithms',
      'Technical Publications'
    ]
  };
}

async function PostPage({ params }: Props) {
  const components = presetComponents;

  const { postId } = await params;

  const files = fs.readdirSync(basePath);

  const mdxPosts = files.filter((file) => file.endsWith('.mdx'));

  const currentPostFilePath = mdxPosts.find((item) => {
    // Extract the part after '_' and before '.mdx'
    const part = item.substring(item.indexOf('_') + 1, item.lastIndexOf('.'));

    // Check if the extracted part exactly matches the search string
    return part === postId;
  });

  const fileContent = fs.readFileSync(
    `${basePath}/${currentPostFilePath}`,
    'utf8'
  );

  const currentPost = matter(fileContent);
  const {
    authorPhotoUrl,
    authorName,
    postTitle,
    postDate,
    postLastUpdated,
    authorBio,
    postIndex,
    authorSocials,
    postCategory
  } = currentPost.data;

  const postData = {
    authorPhotoUrl,
    authorName,
    postTitle,
    postDate,
    postLastUpdated,
    authorBio,
    authorSocials,
    postCategory
  };

  const allPostFilePaths = mdxPosts.map((each) => {
    return each;
  });

  const allPostFileContent = allPostFilePaths.map((each) => {
    const fileContent = fs.readFileSync(`${basePath}/${each}`, 'utf8');

    const matterResult = matter(fileContent);

    return matterResult;
  });

  const sortedPosts = allPostFileContent.sort(
    (a: any, b: any) =>
      allPostFileContent.findIndex(
        (post) => post.data.postSlug === b.data.postSlug
      ) -
      allPostFileContent.findIndex(
        (post) => post.data.postSlug === a.data.postSlug
      )
  );

  const currentPostIndex = allPostFileContent.findIndex(
    (post) => post.data.postSlug === postId
  );

  const previousPostIndex = currentPostIndex - 1;

  const nextPostIndex = currentPostIndex + 1;

  const previousPostData = sortedPosts[previousPostIndex]?.data;

  const nextPostData = sortedPosts[nextPostIndex]?.data;

  return (
    <PostPageLayout>
      <PostImageZoomModal />
      <main className="mt-[75px] post-page px-3 sm:px-[20px]">
        <PostPageHeadSection
          authorPhotoUrl={postData.authorPhotoUrl}
          authorName={postData.authorName}
          postTitle={postData.postTitle}
          postDate={postData.postDate}
          postLastUpdated={postData.postLastUpdated}
        />
        <PostWrapper>
          <article className="sm:mt-[30px]">
            <MDXRemote source={currentPost?.content} components={components} />
          </article>
        </PostWrapper>
        <PageNavigator
          nextTitle={nextPostData?.postTitle}
          previousTitle={previousPostData?.postTitle}
          previousPostRoute={`/blockchain-research-publications/categories/${previousPostData?.postCategory}/${previousPostData?.postSlug}`}
          nextPostRoute={`/blockchain-research-publications/categories/${nextPostData?.postCategory}/${nextPostData?.postSlug}`}
        />
        <AboutAuthorSection
          authorBio={postData.authorBio}
          authorSocials={postData.authorSocials}
        />
      </main>
    </PostPageLayout>
  );
}

export default PostPage;

export async function generateStaticParams() {
  const files = fs.readdirSync(basePath);

  const mdxPosts = files.filter((file) => file.endsWith('.mdx'));

  const allPostFilePaths = mdxPosts.map((each) => {
    return each;
  });

  const allPostFileContent = allPostFilePaths.map((each) => {
    const fileContent = fs.readFileSync(`${basePath}/${each}`, 'utf8');

    const matterResult = matter(fileContent);

    // return matterResult.data;
    return matterResult.data;
  });

  // console.log(allPostFileContent);
  // const currentPostFilePath = mdxPosts.find((item) => item.includes(postId));

  // const paths = categories.map((category) => {
  //   return {
  //     categoryId: category,
  //     postId: postPaths.map((postPath) => postPath),
  //   };
  // });

  const paths = allPostFileContent.map((postData) => {
    return { categoryId: postData.postCategory, postId: postData.postSlug };
  });

  // console.log(paths);
  return paths;
}
