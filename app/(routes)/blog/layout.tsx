import React from 'react';
import type { Metadata } from 'next';
import BlogLayout from './components/layout/BlogLayout';

export const metadata: Metadata = {
  title: 'Andrew Okpainmo - Blog',
  description:
    'Thoughtful deep dives into systems engineering, blockchain architecture, and product development — grounded in real-world ownership and execution',
  openGraph: {
    title: 'Andrew Okpainmo | Blog',
    description:
      'Thoughtful deep dives into systems engineering, blockchain architecture, and product development — grounded in real-world ownership and execution',
    url: 'https://okpainmo.github.io/blog',
    siteName: 'Andrew Okpainmo | Blog',
    images: [
      {
        url: 'https://okpainmo.github.io/_/okpainmo__the-logo.png',
        width: 800,
        height: 800
      }
    ],
    locale: 'en-US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrew Okpainmo | Blog',
    description:
      'Thoughtful deep dives into systems engineering, blockchain architecture, and product development — grounded in real-world ownership and execution',
    creator: '@AJ_Okpainmo',
    images: ['https://okpainmo.github.io/_/okpainmo__the-logo.png']
  },
  icons: {
    icon: 'https://okpainmo.github.io/_/okpainmo__the-logo.png'
  }
};

function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default layout;
