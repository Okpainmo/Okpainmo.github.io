import React from 'react';
import Link from 'next/link';

type PageProps = {
  href: string;
  type?: string;
  children: React.ReactNode;
};
function WrapperLink(props: PageProps) {
  const { href, type, children } = props;
  return (
    <Link
      target="_blank"
      className={`text-zinc-700 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors ${
        type === 'text'
          ? 'underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4'
          : ''
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}

export default WrapperLink;
