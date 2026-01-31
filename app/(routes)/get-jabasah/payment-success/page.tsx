import React from 'react';
import {
  HiCheckCircle,
  HiOutlineHome,
  HiOutlineArrowUpRight
} from 'react-icons/hi2';
import Link from 'next/link';

function TemplatePaymentSuccessScreen() {
  return (
    <div className="min-h-[80vh] flex flex-col">
      {/* Header Section */}
      <section className="pt-8 sm:pt-20 pb-8">
        <Link
          href="/get-jabasah"
          className="brand text-2xl font-bold text-black dark:text-zinc-50 mb-4 sm:mb-8 hover:opacity-70 transition-opacity"
        >
          ./get-jabasah
        </Link>
      </section>

      {/* Success Content */}
      <section className="flex-1 flex flex-col items-center justify-center text-center max-w-md mx-auto py-12">
        <div className="w-20 h-20 bg-green-50 dark:bg-green-500/10 rounded-full flex items-center justify-center mb-8 animate-in zoom-in duration-500">
          <HiCheckCircle className="text-5xl text-green-500 dark:text-green-400" />
        </div>

        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
          Payment Successful!
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-12">
          Thank you for your purchase. An email with your download link and
          GitHub repository access instructions has been sent to your inbox. We
          can't wait to see what you build!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Link
            href="/"
            className="flex-1 flex items-center justify-center gap-2 py-4 px-6 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg hover:shadow-xl"
          >
            <HiOutlineHome className="text-xl" />
            Back to Home
          </Link>

          <Link
            href="https://github.com" // Placeholder for actual download/repo link if applicable
            target="_blank"
            className="flex-1 hidden items-center justify-center gap-2 py-4 px-6 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 rounded-2xl font-semibold border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all"
          >
            Access Repository
            <HiOutlineArrowUpRight className="text-lg" />
          </Link>
        </div>
      </section>

      {/* Footer Support Info */}
      <section className="py-12 text-center">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Having any trouble? Drop me an email at <br />
          <span className="text-zinc-900 dark:text-white font-medium underline cursor-pointer">
            <a href="mailto:okpainmoandrew@gmail.com">
              okpainmoandrew@gmail.com
            </a>
          </span>
        </p>
      </section>
    </div>
  );
}

export default TemplatePaymentSuccessScreen;
