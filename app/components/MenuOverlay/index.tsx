'use client';

import React, { useEffect } from 'react';
import { HiXMark, HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { portfolioSegments } from '@/app/data/portfolioSegments';
import { useAppDispatch, useAppSelector } from '@/app/rtk-base/store';
import { closeMenu } from '@/app/rtk-base/slices/menuSlice';
import Image from 'next/image';
import Link from 'next/link';

function MenuOverlay() {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.menu);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 lg:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-3xl transition-opacity duration-500 animate-in fade-in"
        onClick={() => dispatch(closeMenu())}
      />

      {/* Content Container */}
      <div className="relative w-full h-[97vh] sm:h-full max-w-6xl bg-zinc-100/10 dark:bg-zinc-900/20 backdrop-blur-2xl border border-white/10 rounded-[2rem] sm:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col transform transition-all duration-500 animate-in zoom-in fade-in">
        {/* Header */}
        <div className="sticky top-0 z-50 flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 border-b border-white/5 bg-white/5 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
              <div className="w-5 h-5 border-2 border-white/40 rounded-full border-t-white animate-spin-slow" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white poppins leading-none">
                Core R&D
              </h2>
              <p className="text-xs text-white/50 lato mt-1">
                Blockchain Research & Development
              </p>
            </div>
          </div>
          <button
            onClick={() => dispatch(closeMenu())}
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all duration-300 group"
          >
            <HiXMark className="text-2xl group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Scrollable Grid */}
        <div className="flex-1 overflow-y-auto custom-scrollbar px-3 sm:px-4 md:px-6 py-4 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mx-auto">
            {portfolioSegments.map((segment, index) => (
              <Link
                key={index}
                href={segment.link}
                target={segment.isExternal ? '_blank' : undefined}
                rel={segment.isExternal ? 'noopener noreferrer' : undefined}
                onClick={() => !segment.isExternal && dispatch(closeMenu())}
                className="group relative flex flex-col bg-white/5 hover:bg-white/10 border border-white/5 
                hover:border-white/20 rounded-[2rem] overflow-hidden transition-all duration-500 
                hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5"
              >
                {/* Banner wrapper */}
                <div className="relative w-full h-[175px] sm:h-[200px] overflow-hidden bg-zinc-800">
                  <Image
                    src={segment.banner}
                    alt={segment.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white transform transition-transform duration-500 group-hover:scale-110">
                    <segment.icon className="text-2xl" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-white/90 transition-colors poppins">
                      {segment.title}
                    </h3>
                    <HiArrowTopRightOnSquare className="text-xl text-white/30 group-hover:text-white/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed lato line-clamp-3">
                    {segment.description}
                  </p>

                  <div className="mt-auto pt-6 flex items-center text-white/40 text-xs font-semibold uppercase tracking-wider gap-2">
                    <div className="w-1 h-1 rounded-full bg-white/40" />
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

        {/* Footer info */}
        <div className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 bg-white/5 border-t border-white/5 text-center">
          <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium poppins">
            © {new Date().getFullYear()} Andrew Okpainmo • System Design &
            Blockchain R&D
          </p>
        </div>
      </div>
    </div>
  );
}

export default MenuOverlay;
