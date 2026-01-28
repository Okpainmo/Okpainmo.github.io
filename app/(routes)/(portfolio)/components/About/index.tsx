import React from 'react';
import Image from 'next/image';
import { skills } from '@/app/data/skills';

function About() {
  return (
    <>
      <div className="py-10 flex flex-col min-h-screen">
        <div className="brand text-2xl font-bold mb-8 text-black dark:text-zinc-50">
          /about-me
        </div>
        <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
          <div className="relative w-[150px] aspect-square float-left mr-6 mb-6">
            <Image
              src="/images/me.jpg"
              alt="Andrew Okpainmo"
              fill
              className="object-cover rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800"
            />
          </div>

          <p className="mb-6">
            Driven by a passion for precision and a deep-seated curiosity for
            emerging technologies, I've spent the last several years
            architecting scalable solutions at the intersection of blockchain
            and product engineering. My journey began with a simple fascination
            for how things work, which quickly evolved into a career dedicated
            to building robust, decentralized systems that solve real-world
            problems.
          </p>
          <p className="mb-6">
            I specialize in creating seamless user experiences powered by
            complex back-end logic. Whether it's developing secure smart
            contracts, optimizing high-performance DApps, or leading
            cross-functional teams toward a unified vision, I thrive on the
            challenge of pushing the boundaries of what's possible in the
            digital space.
          </p>
          <p>
            When I'm not deep in code, you'll find me exploring the latest in
            cryptographic research, mentoring aspiring developers, or
            contributing to open-source projects that move the needle forward
            for the global tech community. I believe that the best products are
            born from collaboration, transparency, and an unwavering commitment
            to excellence.
          </p>
        </div>

        <div className="border-b border-zinc-200 dark:border-zinc-800 my-10"></div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 text-gray-700 dark:text-zinc-300 text-sm hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
