import React from 'react';
import {
  BiLogoTwitter,
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiLogoYoutube
} from 'react-icons/bi';
function Footer() {
  return (
    <footer className="pt-20 pb-[200px] border-t border-zinc-100 dark:border-zinc-800">
      <div className="flex flex-col justify-between items-center gap-12">
        <div className="flex flex-col gap-6 items-center md:items-start">
          {/* <span className="text-sm uppercase tracking-widest font-bold text-zinc-400 dark:text-zinc-500">
            Connect With Me
          </span> */}
          <div className="social-links flex gap-4 items-center justify-center mt-4">
            <a href="https://twitter.com/AJ_Okpainmo">
              <div className="social-link-item text-zinc-400 w-[40px] h-[40px] rounded-full flex items-center justify-center border-[1px] border-zinc-400 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-colors">
                <BiLogoTwitter className="text-[20px]" />
              </div>
            </a>
            <a href="https://linkedin.com/in/okpainmo-andrew">
              <div className="social-link-item text-zinc-400 w-[40px] h-[40px] rounded-full flex items-center justify-center border-[1px] border-zinc-400 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-colors">
                <BiLogoLinkedinSquare className="text-[20px]" />
              </div>
            </a>
            <a href="https://github.com/Okpainmo">
              <div className="social-link-item text-zinc-400 w-[40px] h-[40px] rounded-full flex items-center justify-center border-[1px] border-zinc-400 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-colors">
                <BiLogoGithub className="text-[20px]" />
              </div>
            </a>
            <a href="https://www.youtube.com/@andrew_okpainmo">
              <div className="social-link-item text-zinc-400 w-[40px] h-[40px] rounded-full flex items-center justify-center border-[1px] border-zinc-400 hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white transition-colors">
                <BiLogoYoutube className="text-[20px]" />
              </div>
            </a>
          </div>
        </div>

        <div className="text-zinc-500 dark:text-zinc-400">
          built with so much ❤️ by Me
        </div>
      </div>
    </footer>
  );
}

export default Footer;
