import React from 'react';
import Link from 'next/link';
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight
} from 'react-icons/hi2';

function PageNavigator({
  nextTitle,
  previousTitle,
  previousPostRoute,
  nextPostRoute
}: {
  nextTitle: string;
  previousTitle: string;
  previousPostRoute: string;
  nextPostRoute: string;
}) {
  return (
    <section className="page-navigator flex flex-col sm:flex-row gap-6 mt-20 w-full md:w-[70%] lg:w-[50%] md:mx-auto border-t border-zinc-200 dark:border-zinc-800 pt-12">
      {previousTitle && (
        <Link
          href={previousPostRoute}
          className="flex-1 group bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl hover:border-black dark:hover:border-white transition-all flex flex-col gap-3"
        >
          <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-500 text-xs font-bold uppercase tracking-widest">
            <HiOutlineChevronDoubleLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Previous</span>
          </div>
          <div className="text-black dark:text-white font-bold poppins text-sm leading-relaxed line-clamp-2">
            {previousTitle}
          </div>
        </Link>
      )}

      {nextTitle && (
        <Link
          href={nextPostRoute}
          className="flex-1 group bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl hover:border-black dark:hover:border-white transition-all flex flex-col gap-3 text-right"
        >
          <div className="flex items-center justify-end gap-2 text-zinc-700 dark:text-zinc-500 text-xs font-bold uppercase tracking-widest">
            <span>Read Next</span>
            <HiOutlineChevronDoubleRight className="group-hover:translate-x-1 transition-transform" />
          </div>
          <div className="text-black dark:text-white font-bold poppins text-sm leading-relaxed line-clamp-2">
            {nextTitle}
          </div>
        </Link>
      )}
    </section>
  );
}

export default PageNavigator;
