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
// below import is nextjs specific
export const dynamicParams = false;
const basePath = 'content';

type Props = {
  params: Promise<{ postId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { postId } = await params;

  const files = fs.readdirSync(basePath);

  const mdxPosts = files.filter((file) => file.endsWith('.mdx'));

  // const postFilePathsWithExtension = mdxPosts.map((each) => {
  //   // remove the initial number and hyphen from the start of each post path
  //   return each.split('_')[1];
  // });

  // const postFilePathsWithOutExtension = postFilePathsWithExtension.map(
  //   (each) => {
  //     // remove the file extension from all the paths
  //     return each.split('.')[0];
  //   }
  // );

  // const currentPostFilePath = postFilePathsWithOutExtension.find((each) => {
  //   // remove the file extension
  //   return each.split('.')[0] == postId;
  // });

  // The code i commented

  const currentPostFilePath = mdxPosts.find((item) => {
    // Extract the part after '_' and before '.mdx'
    const part = item.substring(item.indexOf('_') + 1, item.lastIndexOf('.'));

    // Check if the extracted part exactly matches the search string
    return part === postId;
  });

  // The refactored code
  // const currentPostFilePath = mdxPosts.find((item) => {
  // const fileContent = fs.readFileSync(`${basePath}/${item}`, "utf8");
  // const matterResult = matter(fileContent);
  // return matterResult.data.postSlug === postId;
  // });

  // const currentPostFilePath = mdxPosts.find((item) => item.includes(postId));

  const fileContent = fs.readFileSync(
    `${basePath}/${currentPostFilePath}`,
    'utf8'
  );

  const matterResult = matter(fileContent);
  const { postTitle, postBrief, postThumbnailUrl } = matterResult.data;

  function truncateText(text: string) {
    return (
      text.split(' ').slice(0, 5).join(' ') +
      (text.split(' ').length > 5 ? '...' : '')
    );
  }

  const postImage = `https://zed-labs-blog-files-bucket.s3.eu-north-1.amazonaws.com${postThumbnailUrl}`;
  // console.log(postImage);

  return {
    // title: truncateText(postTitle),
    title: postTitle,
    description: postBrief,
    openGraph: {
      images: [postImage]
    },
    keywords: [
      'Technology',
      'Software Development',
      'Artificial Intelligence',
      'Machine Learning',
      'Cloud Computing',
      'Cybersecurity',
      'Tech News',
      'Programming',
      'Data Science'
    ]
  };
}

async function PostPage({ params }: Props) {
  const components = presetComponents;

  const { postId } = await params;

  const files = fs.readdirSync(basePath);

  const mdxPosts = files.filter((file) => file.endsWith('.mdx'));

  // const postFilePathsWithExtension = mdxPosts.map((each) => {
  //   // remove the initial number and hyphen from the start of each post path
  //   return each.split('_')[1];
  // });

  // const postFilePathsWithOutExtension = postFilePathsWithExtension.map(
  //   (each) => {
  //     // remove the file extension from all the paths
  //     return each.split('.')[0];
  //   }
  // );

  // const currentPostFilePath = postFilePathsWithOutExtension.find((each) => {
  //   // remove the file extension
  //   return each.split('.')[0] == postId;
  // });
  // console.log(currentPostFilePath);

  // const currentPostFilePath = mdxPosts.find((item) => item.includes(postId));

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
  // console.log(fileContent);

  const matterResult = matter(fileContent);
  const {
    authorPhotoUrl,
    authorName,
    postTitle,
    postDate,
    authorBio,
    postIndex,
    authorSocials,
    postCategory
  } = matterResult.data;

  const postData = {
    authorPhotoUrl,
    authorName,
    postTitle,
    postDate,
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

    // return matterResult.data;
    return matterResult;
  });

  const sortedPosts = allPostFileContent.sort(
    (a: any, b: any) => b.postIndex - a.postIndex
  );

  // console.log(allPostFileContent);
  // console.log(allPostFileContent.length);

  /* set the category of content on the posts navigation to only show those for the 
  category that this current post is on */
  // const categoryPosts = allPostFileContent.filter((post) => {
  //   return post.postCategory === postData.postCategory;
  // });
  // console.log(categoryPosts);

  // smiles: I used js indexing pattern on the posts
  const previousPostIndex = Number(postIndex) - 1;
  // console.log(previousPostIndex);
  const nextPostIndex = Number(postIndex) + 1;
  // console.log(nextPostIndex);

  const previousPostData = sortedPosts[previousPostIndex]?.data;
  const nextPostData = sortedPosts[nextPostIndex]?.data;

  return (
    <PostPageLayout>
      <main className="mt-[75px] post-page px-3 sm:px-[20px]">
        <PostPageHeadSection
          authorPhotoUrl={postData.authorPhotoUrl}
          authorName={postData.authorName}
          postTitle={postData.postTitle}
          postDate={postData.postDate}
        />
        <PostWrapper>
          <article className="sm:mt-[30px]">
            <MDXRemote source={matterResult?.content} components={components} />
          </article>
        </PostWrapper>
        <PageNavigator
          nextTitle={nextPostData?.postTitle}
          previousTitle={previousPostData?.postTitle}
          previousPostRoute={`/blog/categories/${previousPostData?.postCategory}/${previousPostData?.postSlug}`}
          nextPostRoute={`/blog/categories/${nextPostData?.postCategory}/${nextPostData?.postSlug}`}
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
