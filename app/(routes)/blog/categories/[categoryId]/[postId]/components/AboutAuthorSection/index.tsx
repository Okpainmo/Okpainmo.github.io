import React from 'react';
import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoTwitter
} from 'react-icons/bi';

type AuthorSocials = {
  twitter?: string;
  linkedin?: string;
  github?: string;
};

function AboutAuthorSection({
  authorBio,
  authorSocials
}: {
  authorBio: string;
  authorSocials: AuthorSocials;
}) {
  return (
    <section className="about-author border-t border-zinc-200 dark:border-zinc-800 mt-12 py-12 w-full md:w-[70%] lg:w-[50%] md:mx-auto flex flex-col gap-y-4">
      <h3 className="text-base poppins font-bold text-black dark:text-white uppercase tracking-wider">
        About The Author
      </h3>
      <div className="text-zinc-800 dark:text-zinc-300 leading-relaxed">
        {authorBio}
      </div>
      <div className="social-links flex items-center justify-start gap-4">
        {authorSocials.twitter && (
          <a
            href={authorSocials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-700 hover:text-black hover:border-black dark:text-zinc-400 dark:hover:text-white dark:hover:border-white transition-all"
          >
            <BiLogoTwitter className="text-lg" />
          </a>
        )}
        {authorSocials.linkedin && (
          <a
            href={authorSocials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-700 hover:text-black hover:border-black dark:text-zinc-400 dark:hover:text-white dark:hover:border-white transition-all"
          >
            <BiLogoLinkedinSquare className="text-lg" />
          </a>
        )}
        {authorSocials.github && (
          <a
            href={authorSocials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-700 hover:text-black hover:border-black dark:text-zinc-400 dark:hover:text-white dark:hover:border-white transition-all"
          >
            <BiLogoGithub className="text-lg" />
          </a>
        )}
      </div>
    </section>
  );
}

export default AboutAuthorSection;
