import React from 'react';
import PortfolioLayout from '../layout/PortfolioLayout';
import {
  HiArrowRight,
  HiOutlineDocumentText,
  HiOutlinePencilSquare,
  HiEnvelope
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
    <section className="min-h-screen" id="home">
      <div className="brand text-2xl font-bold pt-12 pb-20 sm:py-20 md:py-32 text-black dark:text-zinc-50">
        ./Okpainmo
      </div>
      <div className="flex flex-col gap-6 items-start">
        <h1 className="max-w-sm md:max-w-md text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Hi 👋🏾, I’m Andrew Okpainmo.
        </h1>
        <div className="leading-[30px] text-zinc-600 dark:text-zinc-400">
          A product engineer with deep experience owning systems end-to-end -
          from architecture and full-stack development to cloud infrastructure,
          on-chain deployments, and product leadership.
        </div>
        <div className="flex gap-4 items-center justify-start">
          <a
            href="https://twitter.com/AJ_Okpainmo"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <div className="social-link-item text-zinc-400 w-[40px] h-[40px] rounded-full flex items-center justify-center border-[1px] border-zinc-400 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-colors">
              <BiLogoTwitter className="text-[20px]" />
            </div>
          </a>
          <a
            href="https://linkedin.com/in/okpainmo-andrew"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <div className="social-link-item text-zinc-400 w-[40px] h-[40px] rounded-full flex items-center justify-center border-[1px] border-zinc-400 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-colors">
              <BiLogoLinkedinSquare className="text-[20px]" />
            </div>
          </a>
          <a
            href="https://github.com/Okpainmo"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <div className="social-link-item text-zinc-400 w-[40px] h-[40px] rounded-full flex items-center justify-center border-[1px] border-zinc-400 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-colors">
              <BiLogoGithub className="text-[20px]" />
            </div>
          </a>
          <a
            href="https://www.youtube.com/@andrew_okpainmo"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <div className="social-link-item text-zinc-400 w-[40px] h-[40px] rounded-full flex items-center justify-center border-[1px] border-zinc-400 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-colors">
              <BiLogoYoutube className="text-[20px]" />
            </div>
          </a>
          <a
            href="mailto:okpainmoandrew@gmail.com"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <div className="social-link-item text-zinc-400 w-[40px] h-[40px] rounded-full flex items-center justify-center border-[1px] border-zinc-400 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-colors">
              <HiEnvelope className="text-[20px]" />
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
          transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:border-zinc-700"
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
