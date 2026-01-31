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

function Footer() {
  return (
    <footer className="pt-20 pb-[200px] border-t border-zinc-100 dark:border-zinc-800">
      <div className="flex flex-col justify-between items-center gap-12">
        <div className="flex flex-col gap-6 items-center md:items-start">
          {/* <span className="text-sm uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-500">
            Connect With Me
          </span> */}
          <div className="mt-4">
            <Contacts />
          </div>
        </div>

        <div className="text-zinc-500 dark:text-zinc-400 text-center">
          built with so much ❤️ and{' '}
          <Link className="underline" href="/get-jabasah">
            The Jabasah Template
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
