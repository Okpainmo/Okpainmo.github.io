import React from 'react';
import { categories } from '@/app/data/blog';
import CategoriesListWrapper from '../../CategoriesListWrapper';
import Contacts from '@/app/(routes)/components/Contacts';

function Footer() {
  return (
    <footer className="pt-20 pb-[200px] border-zinc-100 dark:border-zinc-800">
      <div className="flex flex-col justify-between items-center gap-12">
        <CategoriesListWrapper />

        <div className="flex flex-col gap-6 items-center md:items-start">
          <div className="mt-4">
            <Contacts />
          </div>
        </div>

        <div className="text-zinc-500 dark:text-zinc-400">
          built with so much ❤️ by Me
        </div>
      </div>
    </footer>
  );
}

export default Footer;
