import React from 'react';
import PostCard from '../components/PostCard';
import CategoriesListWrapper from '@/app/components/CategoriesListWrapper';
import type { Metadata } from 'next';
import matter from 'gray-matter';
import fs from 'fs';
import { categories as publicationCategories } from '@/app/data/blockchain-research-publications';
import BlogLayout from '../components/layout/ResearchLayout';
import NoPostsFound from '@/app/components/NoPostsFound';

export const metadata: Metadata = {
  title: 'Andrew Okpainmo | Blockchain Research & Publications',
  description:
    'Scholarly explorations and technical deep-dives into decentralized systems, blockchain architecture, and R&D insights.',
  keywords: [
    'Blockchain Research',
    'Distributed Systems',
    'Consensus Algorithms',
    'Decentralized Infrastructure',
    'Cryptography',
    'Layer 1',
    'Layer 2',
    'Peer-to-Peer Networks'
  ]
};

import PaginatedPostList from '../components/PaginatedPostList';

// to get publications
const publicationsBasePath = 'blockchain_publications-content';

async function PublicationsHomePage() {
  const publicationFiles = fs.readdirSync(publicationsBasePath);

  const mdxPublications = publicationFiles.filter((file) =>
    file.endsWith('.mdx')
  );

  const publicationFileContent = mdxPublications.map((each) => {
    const fileContent = fs.readFileSync(
      `${publicationsBasePath}/${each}`,
      'utf8'
    );
    const matterResult = matter(fileContent);
    return matterResult.data;
  });

  const sortedPublications = publicationFileContent.sort(
    (a: any, b: any) => b.postIndex - a.postIndex
  );

  return (
    <BlogLayout>
      <header className="flex flex-col gap-4">
        <div className="brand text-2xl font-bold pt-10 pb-0 sm:pt-32 sm:pb-0 text-black dark:text-zinc-50 poppins">
          ./Okpainmo/blockchain-research-publications
        </div>
        <div className="max-w-2xl mx-auto px-3 sm:px-0 text-center">
          <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed lato">
            Technical research and architectural analysis on the future of
            decentralized infrastructure. Documenting the design decisions and
            theoretical foundations of blockchain systems.
          </p>
        </div>
      </header>
      <div className="flex flex-col gap-12 py-10">
        <CategoriesListWrapper
          categories={publicationCategories}
          basePath="/blockchain-research-publications"
        />

        {sortedPublications?.length > 0 ? (
          <PaginatedPostList
            posts={sortedPublications}
            baseUrl="/blockchain-research-publications"
          />
        ) : (
          <NoPostsFound
            message="No research publications found"
            subMessage="Do check back soon..."
          />
        )}
      </div>
    </BlogLayout>
  );
}

export default PublicationsHomePage;
