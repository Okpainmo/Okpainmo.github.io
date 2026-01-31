import React from 'react';
import {
  HiArrowRight,
  HiCheckCircle,
  HiOutlineRocketLaunch,
  HiOutlineSparkles,
  HiOutlineCreditCard
} from 'react-icons/hi2';
import Link from 'next/link';

function GetJabasahPage() {
  return (
    <div className="pb-20">
      {/* Header Section */}
      <section className="pt-8 sm:pt-20 pb-8">
        <div className="brand text-2xl font-bold text-black dark:text-zinc-50 mb-4 sm:mb-8">
          ./get-jabasah
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
          The Jabasah Portfolio Template is a premium, developer-focused
          portfolio template built with Next.js, Redux, and Tailwind. Designed
          for engineers who want to showcase their work with maximum impact and
          minimum effort.
        </p>
      </section>

      {/* Video Demo Section */}
      <section className="mb-8">
        <div
          className="relative aspect-video w-full overflow-hidden border border-zinc-200 
        dark:border-zinc-800 shadow-2xl bg-zinc-100 dark:bg-zinc-900"
        >
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // TODO: Replace with actual demo video ID
            title="Jabasah Template Demo"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-center text-sm text-zinc-500 mt-4 italic">
          Watch the template in action: Smooth transitions, fast loading, and
          fully responsive.
        </p>
      </section>

      {/* About Section */}
      <section className="grid md:grid-cols-2 gap-12 items-start mb-24">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-3">
            <HiOutlineSparkles className="text-zinc-400" />
            About the Template
          </h2>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              The Jabasah Template isn't just a theme; it's a complete
              engineering foundation. Inspired by the needs of modern
              developers, it combines a sleek minimal aesthetic with powerful
              features like a built-in blog, dynamic project cards, and smooth
              modal transitions.
            </p>
            <p>
              Every pixel has been crafted to ensure your brand as an engineer
              shines. Whether you're a full-stack dev, a blockchain researcher,
              or a UI specialist, this template adapts to your story.
            </p>
          </div>
        </div>

        <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800/50 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
            <HiOutlineRocketLaunch className="text-zinc-400" />
            How to Get Started
          </h3>
          <ul className="space-y-4 mb-8">
            {[
              "Click the 'Get Now' button below to proceed to checkout.",
              'Complete your payment securely via the payment portal.',
              'Receive an instant download link and access to the GitHub repository.',
              'Follow the 5-minute setup guide to deploy your site to GitHub Pages or Vercel.'
            ].map((step, index) => (
              <li
                key={index}
                className="flex gap-3 text-zinc-700 dark:text-zinc-300"
              >
                <HiCheckCircle className="text-zinc-400 shrink-0 mt-1" />
                <span className="text-sm">{step}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-baseline gap-2 mb-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
            <span className="text-4xl font-bold text-zinc-900 dark:text-white">
              $10
            </span>
            <span className="text-zinc-500 dark:text-zinc-400 text-sm">
              one-time payment
            </span>
          </div>

          <Link
            href="/get-jabasah/payment"
            className="flex items-center justify-center gap-2 w-full py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg hover:shadow-xl"
          >
            <HiOutlineCreditCard className="text-xl" />
            Get Jabasah Now
            <HiArrowRight />
          </Link>

          <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
            <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-500">
              License & Terms
            </p>
            <div className="space-y-2">
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed flex gap-2">
                <span className="shrink-0">•</span>
                <span>
                  This license permits multiple usage of this template per user.
                </span>
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed flex gap-2 font-medium">
                <span className="shrink-0">•</span>
                <span>
                  This template{' '}
                  <span className="text-red-500/80 dark:text-red-400/80 font-bold">
                    CANNOT BE RE-SOLD
                  </span>
                  .
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetJabasahPage;
