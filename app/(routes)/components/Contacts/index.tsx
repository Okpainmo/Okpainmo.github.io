import React from 'react';
import {
  BiLogoTwitter,
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiLogoYoutube
} from 'react-icons/bi';
import { HiEnvelope } from 'react-icons/hi2';

function Contacts() {
  return (
    <section className="contact-links flex gap-4 items-center justify-center">
      <a
        href="https://twitter.com/AJ_Okpainmo"
        // target="_blank"
        // rel="noopener noreferrer"
      >
        <div className="contact-link-item text-zinc-400 w-[40px] h-[40px] rounded-full flex items-center justify-center border border-zinc-400 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-colors">
          <BiLogoTwitter className="text-[20px]" />
        </div>
      </a>
      <a
        href="https://linkedin.com/in/okpainmo-andrew"
        // target="_blank"
        // rel="noopener noreferrer"
      >
        <div className="contact-link-item text-zinc-400 w-[40px] h-[40px] rounded-full flex items-center justify-center border border-zinc-400 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-colors">
          <BiLogoLinkedinSquare className="text-[20px]" />
        </div>
      </a>
      <a
        href="https://github.com/Okpainmo"
        // target="_blank"
        // rel="noopener noreferrer"
      >
        <div className="contact-link-item text-zinc-400 w-[40px] h-[40px] rounded-full flex items-center justify-center border border-zinc-400 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-colors">
          <BiLogoGithub className="text-[20px]" />
        </div>
      </a>
      <a
        href="https://www.youtube.com/@andrew_okpainmo"
        // target="_blank"
        // rel="noopener noreferrer"
      >
        <div className="contact-link-item text-zinc-400 w-[40px] h-[40px] rounded-full flex items-center justify-center border border-zinc-400 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-colors">
          <BiLogoYoutube className="text-[20px]" />
        </div>
      </a>
      <a
        href="mailto:okpainmoandrew@gmail.com"
        // target="_blank"
        // rel="noopener noreferrer"
      >
        <div className="contact-link-item text-zinc-400 w-[40px] h-[40px] rounded-full flex items-center justify-center border border-zinc-400 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-colors">
          <HiEnvelope className="text-[20px]" />
        </div>
      </a>
    </section>
  );
}

export default Contacts;
