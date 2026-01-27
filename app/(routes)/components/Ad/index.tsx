'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiXMark, HiArrowRight } from 'react-icons/hi2';
import { useAppDispatch, useAppSelector } from '@/app/rtk-base/store';
import { closeAd, showNextAd } from '@/app/rtk-base/slices/adSlice';

function Ad() {
  const dispatch = useAppDispatch();
  const { currentAd, isVisible } = useAppSelector((state) => state.ad);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(showNextAd());
    }, 15000);

    return () => clearInterval(interval);
  }, [dispatch]);

  if (!currentAd) return null;

  return (
    <div
      className={`hidden xl:flex fixed bottom-6 right-6 z-60 max-w-sm w-full transition-all duration-500 transform ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl p-4 relative group overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => dispatch(closeAd())}
          className="absolute top-2 right-2 p-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-black dark:hover:text-white transition-colors z-10"
        >
          <HiXMark className="text-lg" />
        </button>

        <div className="flex gap-4 items-center">
          {/* Ad Image */}
          <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-xl">
            <Image
              src={currentAd.imageUrl}
              alt={currentAd.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Ad Content */}
          <div className="flex flex-col gap-1 pr-4">
            <h3 className="text-sm font-bold text-black dark:text-white line-clamp-1 poppins">
              {currentAd.title}
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-tight">
              {currentAd.intro}
            </p>
            <Link
              href={currentAd.link}
              className="text-xs font-semibold text-black dark:text-white flex items-center gap-1 mt-1 hover:underline group/link"
              onClick={() => dispatch(closeAd())}
            >
              Learn more
              <HiArrowRight className="text-[10px] group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ad;
