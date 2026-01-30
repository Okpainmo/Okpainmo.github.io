import React from 'react';
import { categories } from '@/app/data/blog';
import Link from 'next/link';

function CategoriesListWrapper() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <Link
            key={category.categoryId}
            href={`/blog/categories/${category.categoryId}`}
            className="px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 
            dark:bg-zinc-800/50 text-gray-700 dark:text-zinc-300 text-sm hover:border-zinc-400 
            dark:hover:border-zinc-600 transition-colors cursor-pointer"
          >
            {category.categoryName}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoriesListWrapper;
