import React from 'react';
import Footer from '@/app/(routes)/(portfolio)/components/layout/Footer';
import Ad from '@/app/components/Ad';
import { getBlogAds } from '@/app/lib/get-ads__blog-posts';

async function ThemeSegmentLayout({ children }: { children: React.ReactNode }) {
  const ads = await getBlogAds();

  return (
    <div className="relative">
      <main className="flex justify-center min-h-screen bg-zinc-50 font-sans dark:bg-black text-left">
        <div className="min-h-screen w-full max-w-3xl px-3 sm:px-16 bg-white dark:bg-black">
          {children}
          {/* <Footer /> */}
        </div>
      </main>
      <Ad initialAds={ads} />
    </div>
  );
}

export default ThemeSegmentLayout;
