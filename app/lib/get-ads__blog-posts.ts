import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const blogPostsBasePath = path.join(process.cwd(), 'content');

export async function getBlogAds() {
  if (!fs.existsSync(blogPostsBasePath)) {
    return [];
  }

  const blogFiles = fs.readdirSync(blogPostsBasePath);
  const mdxBlogPosts = blogFiles.filter((file) => file.endsWith('.mdx'));

  const blogPostsData = mdxBlogPosts.map((fileName) => {
    const filePath = path.join(blogPostsBasePath, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    return data;
  });

  const sortedBlogPosts = blogPostsData.sort(
    (a: any, b: any) => (b.postIndex || 0) - (a.postIndex || 0)
  );

  return sortedBlogPosts.map((each: any) => ({
    id: each.postSlug,
    title: each.postTitle,
    intro: each.postBrief,
    imageUrl: each.postThumbnailUrl,
    link: `/blog/categories/${each.postCategory}/${each.postSlug}`
  }));
}
