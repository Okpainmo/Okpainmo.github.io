import React from 'react';
import PortfolioLayout from '../layout/PortfolioLayout';
import {
  HiArrowRight,
  HiOutlineDocumentText,
  HiOutlinePencilSquare
} from 'react-icons/hi2';
import Link from 'next/link';
import {
  BiLogoTwitter,
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiLogoYoutube
} from 'react-icons/bi';

function Top() {
  return (
    <section className="min-h-screen">
      <div className="brand text-2xl font-bold py-20 sm:py-32">./Okpainmo</div>
      <div className="flex flex-col gap-6 items-start">
        <h1 className="max-w-sm md:max-w-md text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          {/* Hi 👋🏾, I'm Andrew Okpainmo, a product engineer currently specializing in blockchain research and development. */}
          Hi 👋🏾, I’m Andrew Okpainmo.
        </h1>
        <div className="leading-[30px]">
          A product engineer with deep experience owning systems end-to-end -
          from architecture and development to cloud infrastructure, on-chain
          deployments, and product leadership. My current focus is blockchain
          research and development.
        </div>
        <div className="flex gap-4 items-center justify-start mt-4">
          <a href="https://twitter.com/AJ_Okpainmo">
            <div className="social-link-item text-zinc-400 w-[40px] h-[40px] rounded-full flex items-center justify-center border-[1px] border-zinc-400 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-colors">
              <BiLogoTwitter className="text-[20px]" />
            </div>
          </a>
          <a href="https://linkedin.com/in/okpainmo-andrew">
            <div className="social-link-item text-zinc-400 w-[40px] h-[40px] rounded-full flex items-center justify-center border-[1px] border-zinc-400 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-colors">
              <BiLogoLinkedinSquare className="text-[20px]" />
            </div>
          </a>
          <a href="https://github.com/Okpainmo">
            <div className="social-link-item text-zinc-400 w-[40px] h-[40px] rounded-full flex items-center justify-center border-[1px] border-zinc-400 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-colors">
              <BiLogoGithub className="text-[20px]" />
            </div>
          </a>
          <a href="https://www.youtube.com/@andrew_okpainmo">
            <div className="social-link-item text-zinc-400 w-[40px] h-[40px] rounded-full flex items-center justify-center border-[1px] border-zinc-400 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-colors">
              <BiLogoYoutube className="text-[20px]" />
            </div>
          </a>
        </div>
        <a
          href="#about"
          className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-black 
        dark:hover:text-white transition-colors cursor-pointer group"
        >
          More about me{' '}
          <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
      <div className="top-section-action-buttons flex flex-col gap-4 text-base font-medium sm:flex-row mt-12 sm:mt-20 mb-10">
        <a
          className="flex  self-start h-12 items-center justify-center gap-3 rounded-full bg-black px-8 text-white 
          transition-all hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiOutlineDocumentText className="text-xl" />
          My Resume
        </a>
        <Link
          className="flex self-start h-12 items-center justify-center gap-3 rounded-full border border-zinc-200 px-8 
          transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
          href="/blog"
        >
          <HiOutlinePencilSquare className="text-xl" />
          Read My Blog
        </Link>
      </div>
    </section>
  );
}

export default Top;
