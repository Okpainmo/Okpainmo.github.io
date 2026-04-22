import type { Metadata } from 'next';
import PostWrapper from './components/PostWrapper';
import PageNavigator from './components/PageNavigator';
import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { presetComponents } from './components/PostPageElementsSetup';
import PostPageHeadSection from './components/PostPageHeadSection';
import AboutAuthorSection from './components/AboutAuthorSection';
import { categories } from '@/app/data/blog';
import PostPageLayout from './components/layout/PostPageLayout';
import PostImageZoomModal from './components/PostImageZoomModal';

export const dynamicParams = false;
const basePath = 'blog-content';

type Props = {
  params: Promise<{ categoryId: string; postId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { postId } = await params;

  const files = fs.readdirSync(basePath);
  const mdxPosts = files.filter((file) => file.endsWith('.mdx'));

  const currentPostFilePath = mdxPosts.find((item) => {
    const part = item.substring(item.indexOf('_') + 1, item.lastIndexOf('.'));
    return part === postId;
  });

  if (!currentPostFilePath) return { title: 'Post Not Found' };

  const fileContent = fs.readFileSync(
    `${basePath}/${currentPostFilePath}`,
    'utf8'
  );
  const matterResult = matter(fileContent);
  const { postTitle, postBrief } = matterResult.data;

  return {
    title: postTitle,
    description: postBrief,
    openGraph: {
      title: postTitle,
      description: postBrief,
      url: 'https://okpainmo.github.io/blog',
      siteName: 'Andrew Okpainmo | Blog',
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
    }
  };
}

async function PostPage({ params }: Props) {
  const { categoryId, postId } = await params;
  const components = presetComponents;

  const files = fs.readdirSync(basePath);
  const mdxPosts = files.filter((file) => file.endsWith('.mdx'));

  // 1. Read all posts to get their metadata
  const allPosts = mdxPosts.map((fileName) => {
    const content = fs.readFileSync(`${basePath}/${fileName}`, 'utf8');
    return matter(content);
  });

  // 2. Filter posts by the current category
  const categoryPosts = allPosts.filter((post) => {
    const data = post.data;
    return (
      data.postCategory === categoryId ||
      data.subCategories?.includes(categoryId)
    );
  });

  // 3. Sort posts by postIndex (Latest first / Descending)
  const sortedPosts = categoryPosts.sort(
    (a, b) => b.data.postIndex - a.data.postIndex
  );

  // 4. Find current post index in the filtered & sorted list
  const currentPostIndex = sortedPosts.findIndex(
    (post) => post.data.postSlug === postId
  );
  const currentPost = sortedPosts[currentPostIndex];

  if (!currentPost) {
    return <div>Post not found in this category</div>;
  }

  const N = sortedPosts.length;

  // 5. Cyclic Navigation Logic
  // nextPostIndex (Next in list = older) -> user says swapped, so maybe they want Next to be Newer (current - 1)
  // Let's follow the user's feedback: "next articles show on the previous link"
  // Previous usually should be Older (current + 1)
  // Next usually should be Newer (current - 1)

  const nextPostIndex = (currentPostIndex - 1 + N) % N;
  const previousPostIndex = (currentPostIndex + 1) % N;

  const nextPostData = sortedPosts[nextPostIndex]?.data;
  const previousPostData = sortedPosts[previousPostIndex]?.data;

  const {
    authorPhotoUrl,
    authorName,
    postTitle,
    postDate,
    postLastUpdated,
    authorBio,
    authorSocials,
    postTags
  } = currentPost.data;

  return (
    <PostPageLayout>
      <PostImageZoomModal />
      <main className="mt-[75px] post-page px-3 sm:px-[20px]">
        <PostPageHeadSection
          authorPhotoUrl={authorPhotoUrl}
          authorName={authorName}
          postTitle={postTitle}
          postDate={postDate}
          postLastUpdated={postLastUpdated}
          postTags={postTags}
        />
        <PostWrapper>
          <article className="sm:mt-[30px]">
            <MDXRemote source={currentPost.content} components={components} />
          </article>
        </PostWrapper>
        <PageNavigator
          nextTitle={nextPostData?.postTitle}
          previousTitle={previousPostData?.postTitle}
          previousPostRoute={`/blog/categories/${categoryId}/${previousPostData?.postSlug}`}
          nextPostRoute={`/blog/categories/${categoryId}/${nextPostData?.postSlug}`}
        />
        <AboutAuthorSection
          authorBio={authorBio}
          authorSocials={authorSocials}
        />
      </main>
    </PostPageLayout>
  );
}

export default PostPage;

export async function generateStaticParams() {
  const files = fs.readdirSync(basePath);
  const mdxPosts = files.filter((file) => file.endsWith('.mdx'));

  const paths: any[] = [];

  mdxPosts.forEach((fileName) => {
    const content = fs.readFileSync(`${basePath}/${fileName}`, 'utf8');
    const { data } = matter(content);

    // Add primary category path
    paths.push({ categoryId: data.postCategory, postId: data.postSlug });

    // Add subcategory paths if any
    if (data.subCategories && Array.isArray(data.subCategories)) {
      data.subCategories.forEach((subCat: string) => {
        paths.push({ categoryId: subCat, postId: data.postSlug });
      });
    }
  });

  return paths;
}
