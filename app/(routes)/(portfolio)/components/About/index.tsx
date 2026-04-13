'use client';

import React from 'react';
import Image from 'next/image';
import { skills, expertiseDomains } from '@/app/data/skills';
import Link from 'next/link';
import { useAppDispatch } from '@/app/rtk-base/store';
import { openMenu } from '@/app/rtk-base/slices/menuSlice';

function About() {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="py-10 flex flex-col min-h-screen">
        <div className="brand text-2xl font-bold mb-8 text-black dark:text-zinc-50">
          /about-me
        </div>
        <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
          <div className="relative w-[150px] aspect-square float-left mr-6 mb-6">
            <Image
              src="/_/me.jpg"
              alt="Andrew Okpainmo"
              fill
              className="object-cover rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-800"
            />
          </div>

          <p className="mb-6">
            Driven by a deep-seated curiosity for emerging technologies and a
            strong itch for entrepreneurship, I spent a good chunk of the last
            couple years making passionate attempts at founding and building
            startups. With multiple 'failures' and priceless lessons learned, I
            pivoted and founded{' '}
            <Link
              href="https://www.linkedin.com/company/zedlabs-hq"
              className="italic underline underline-offset-4 text-zinc-900 dark:text-zinc-100"
            >
              Zed Labs
            </Link>{' '}
            - a creative digital agency delivering software and other services
            to clients. In less than 2 years we've worked on some pretty cool
            stuff, like{' '}
            <Link
              href="/blog/categories/project-stories/how-we-built-the-king-of-pi-mall-blockchain-ecommerce-project"
              className="italic underline underline-offset-4 text-zinc-900 dark:text-zinc-100"
            >
              this blockchain e-commerce project
            </Link>
            , and{' '}
            <Link
              href="/blog/categories/project-stories/the-private-practice-project-so-far"
              className="italic underline underline-offset-4 text-zinc-900 dark:text-zinc-100"
            >
              this amazing health-tech startup project.
            </Link>
          </p>
          <p className="mb-6">
            Thanks to years of valuable experiences marked by leadership and
            keeping up with new technologies(intentionally optimizing my career
            to enable me deliver efficiently across the entire engineering
            stack), I excel and specialize in leading teams - spearheading the
            delivery of world-class software from ideation and design-direction,
            to full-stack development, deployments(cloud/DevOps), and product
            leadership.
          </p>
          <p className="mb-6">
            Strongly goal oriented, you'll hardly ever find me without a project
            I'm working on. <br /> Right now, my primary interests lie in
            blockchain/web3 technologies. I'm passionate about decentralization,
            and believe it holds the key to a more equitable and transparent
            future. <br /> About Artificial Intelligence, I think it's cool -
            absolutely the biggest thing the tech world has ever seen. I
            actively utilize AI in my engineering workflows and day-to-day
            processes, but I unfortunately do not believe AI is ever going to
            make 'real' software engineers obsolete.
          </p>
          <div className="mb-6 text-gray-600 dark:text-gray-400">
            Thank you for taking the time to go through my profile. I&apos;m
            always open to connecting with like-minded individuals, so feel free
            to reach out. Up next, you can:
            <ul className="mt-4 flex flex-col gap-y-3 list-none text-base">
              <li className="flex items-start gap-3 group">
                <span className="mt-2.5 h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 transition-colors" />
                <Link
                  href="#projects"
                  className="italic underline underline-offset-4 text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white transition-colors"
                >
                  check out some of my projects
                </Link>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-2.5 h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 transition-colors" />
                <Link
                  href="/blog"
                  className="italic underline underline-offset-4 text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white transition-colors"
                >
                  read some posts from my blog
                </Link>
              </li>
              <li className="flex items-start gap-3 group">
                <span className="mt-2.5 h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600 shrink-0 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 transition-colors" />
                <button
                  type="button"
                  onClick={() => dispatch(openMenu())}
                  className="italic underline underline-offset-4 text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white transition-all cursor-pointer text-left p-0 bg-transparent border-none outline-none appearance-none"
                >
                  explore my core R&amp;D efforts in blockchain/web3
                </button>
              </li>
            </ul>
          </div>
          <p className="mb-6">
            Also, just below is an array of skills and expertise domains I
            possess. Do check them out to learn more about me.
          </p>
          <p>Cheers!</p>
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
        <div className="flex flex-wrap gap-2 mt-5">
          {expertiseDomains.map((each) => (
            <div
              key={each}
              className="px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 text-gray-700 dark:text-zinc-300 text-sm hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              {each}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
