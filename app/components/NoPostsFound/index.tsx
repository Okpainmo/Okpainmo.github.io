import React from 'react';
import { HiOutlineDocumentSearch } from 'react-icons/hi';

interface NoPostsFoundProps {
  message?: string;
  subMessage?: string;
}

const NoPostsFound: React.FC<NoPostsFoundProps> = ({
  message = 'No posts found in this category',
  subMessage = 'Do check back soon...'
}) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[400px] px-6 py-20 text-center animate-in fade-in duration-700">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 rounded-full scale-110 blur-xl opacity-50" />
        <div className="relative flex items-center justify-center w-24 h-24 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-sm rotate-3 hover:rotate-0 transition-transform duration-500">
          <HiOutlineDocumentSearch className="w-12 h-12 text-zinc-400 dark:text-zinc-500" />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 poppins tracking-tight">
        {message}
      </h3>

      <p className="max-w-md mx-auto text-zinc-500 dark:text-zinc-400 text-lg lato leading-relaxed">
        {subMessage}
      </p>

      <div className="mt-10 flex items-center gap-2">
        <div className="h-px w-8 bg-zinc-200 dark:bg-zinc-800" />
        <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <div className="h-px w-8 bg-zinc-200 dark:bg-zinc-800" />
      </div>
    </section>
  );
};

export default NoPostsFound;
