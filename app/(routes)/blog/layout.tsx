import React from 'react';
import type { Metadata } from 'next';
import BlogLayout from './components/layout/BlogLayout';

export const metadata: Metadata = {
  title: 'Andrew Okpainmo - Blog',
  description:
    'Thoughtful deep dives into systems engineering, blockchain architecture, and product development — grounded in real-world ownership and execution'
};

function layout({ children }: { children: React.ReactNode }) {
  return <BlogLayout>{children}</BlogLayout>;
}

export default layout;
