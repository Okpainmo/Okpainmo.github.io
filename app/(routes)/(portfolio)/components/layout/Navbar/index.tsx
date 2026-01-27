import React from 'react';
import Link from 'next/link';
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlinePencilSquare
} from 'react-icons/hi2';

const navItems = [
  { name: 'Home', href: '#home', icon: HiOutlineHome },
  { name: 'About', href: '#about', icon: HiOutlineUser },
  { name: 'Projects', href: '#projects', icon: HiOutlineBriefcase },
  { name: 'Blog', href: '/blog', icon: HiOutlinePencilSquare }
];

function Navbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 sm:bottom-8 flex justify-center z-50 px-3 sm:px-4 pointer-events- mb-6 dm:mb-10 none">
      <nav
        className="pointer-events-auto w-full sm:w-auto flex items-center justify-around sm:justify-center 
      gap-1 sm:gap-4 px-3 py-1 sm:py-3  bg-black/50 dark:bg-zinc-900/40 backdrop-blur-xs border border-white/10 
      rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500"
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 px-3 sm:px-5 py-2 rounded-xl sm:rounded-full 
            text-white/70 hover:text-white transition-all duration-300 group"
          >
            <item.icon className="text-xl sm:text-lg group-hover:scale-110 transition-transform" />
            <span className="text-[10px] sm:text-sm font-medium poppins">
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
