import React from 'react';
import type { Metadata } from 'next';
import PortfolioLayout from './components/layout/PortfolioLayout';

export const metadata: Metadata = {
  title: 'Andrew Okpainmo - Portfolio',
  description:
    'Product Engineer(Full Stack, Cloud, and DevOps) | Blockchain Research and Development.'
};

function layout({ children }: { children: React.ReactNode }) {
  return <PortfolioLayout>{children}</PortfolioLayout>;
}

export default layout;
