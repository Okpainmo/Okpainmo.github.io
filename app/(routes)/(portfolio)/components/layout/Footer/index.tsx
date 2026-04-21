import Contacts from '@/app/components/Contacts';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { portfolioSegments } from '@/app/data/core-research-and-development';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import CategoriesListWrapper from '@/app/components/CategoriesListWrapper';

function Footer() {
  return (
    <footer className="pt-20 pb-[200px] border-t border-zinc-100 dark:border-zinc-800">
      <div className="flex flex-col justify-between items-center gap-12">
        <div className="w-full pt-10 pb-30 border-b border-zinc-100 dark:border-zinc-800/50">
          <div className="text-left mb-6 text-sm uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-500">
            Blog Categories
          </div>
          <CategoriesListWrapper />
        </div>

        <div className="w-full border-b border-zinc-100 dark:border-zinc-800/50">
          <div className="w-full max-w-6xl mx-auto pt-10 pb-30">
            <div className="text-left mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 dark:text-zinc-400">
                  Core R&D
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white poppins">
                Deep Dives - Research & Development
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioSegments.map((segment, index) => (
                <Link
                  key={index}
                  href={segment.link}
                  target={segment.isExternal ? '_blank' : undefined}
                  rel={segment.isExternal ? 'noopener noreferrer' : undefined}
                  className="group relative flex flex-col bg-white dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-2xl hover:shadow-zinc-200 dark:hover:shadow-black"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={segment.banner}
                      alt={segment.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <segment.icon className="text-lg" />
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 poppins line-clamp-2 leading-tight group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                        {segment.title}
                      </h4>
                      <HiArrowTopRightOnSquare className="text-xs text-zinc-400 dark:text-zinc-600 mt-1 shrink-0" />
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed lato">
                      {segment.description}
                    </p>

                    <div className="mt-auto pt-6 flex items-center text-zinc-400 dark:text-zinc-500 text-[10px] font-semibold uppercase tracking-widest gap-2">
                      <div className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                      <span>
                        {segment.isExternal
                          ? 'External Resource'
                          : 'Internal Portfolio'}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center md:items-start">
          {/* <span className="text-sm uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-500">
            Connect With Me
          </span> */}
          <div className="mt-4">
            <Contacts />
          </div>
        </div>

        {/* <div className="text-zinc-500 dark:text-zinc-400 text-center">
          Built with so much ❤️ and{' '}
          <Link className="underline" href="/get-jabasah">
            The Jabasah Template
          </Link>
        </div> */}
        <div className="text-zinc-500 dark:text-zinc-400 text-center">
          © 2026 Andrew James Okpainmo • All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
