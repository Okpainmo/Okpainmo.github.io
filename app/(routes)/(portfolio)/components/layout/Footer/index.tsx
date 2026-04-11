import Contacts from '@/app/components/Contacts';
import React from 'react';
import {
  BiLogoTwitter,
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiLogoYoutube
} from 'react-icons/bi';
import { HiEnvelope } from 'react-icons/hi2';
import Link from 'next/link';
import CategoriesListWrapper from '@/app/components/CategoriesListWrapper';

function Footer() {
  return (
    <footer className="pt-20 pb-[200px] border-t border-zinc-100 dark:border-zinc-800">
      <div className="flex flex-col justify-between items-center gap-12">
        <div className="w-full pt-10 pb-30 border-b border-zinc-100 dark:border-zinc-800/50">
          <div className="text-center mb-6 text-sm uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-500">
            Blog Categories
          </div>
          <CategoriesListWrapper />
        </div>

        <div className="flex flex-col gap-6 items-center md:items-start">
          {/* <span className="text-sm uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-500">
            Connect With Me
          </span> */}
          <div className="mt-4">
            <Contacts />
          </div>
        </div>

        <div className="text-zinc-500 dark:text-zinc-400 text-center">
          Built with so much ❤️ and{' '}
          <Link className="underline" href="/get-jabasah">
            The Jabasah Template
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
