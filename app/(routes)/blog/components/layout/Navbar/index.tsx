import React from 'react';
import Link from 'next/link';
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlinePencilSquare
} from 'react-icons/hi2';

const navItems = [
  { name: 'Home', href: '/#home', icon: HiOutlineHome },
  { name: 'About', href: '/#about', icon: HiOutlineUser },
  { name: 'Projects', href: '/#projects', icon: HiOutlineBriefcase },
  { name: 'Blog', href: '/blog', icon: HiOutlinePencilSquare }
];

function Navbar() {
  return (
    <div className="fixed left-0 right-0 bottom-4 sm:bottom-8 flex justify-center z-50 px-3 sm:px-4">
      <nav
        className="pointer-events-auto w-full sm:w-auto flex items-center justify-around sm:justify-center 
      gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-2 bg-black/70 dark:bg-white/70 backdrop-blur-md border border-white/20 dark:border-black/10 
      rounded-full shadow-lg transition-all duration-500"
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full 
            text-white dark:text-black hover:text-white/70 dark:hover:text-black/70 hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300 group"
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
