import React from 'react';
import type { Metadata } from 'next';
import PortfolioLayout from './components/layout/PortfolioLayout';

export const metadata: Metadata = {
  title: 'Andrew Okpainmo - Portfolio',
  description:
    'Product engineer specializing in blockchain research and development - delivering cutting-edge solutions at the intersection of product and engineering.'
};

function layout({ children }: { children: React.ReactNode }) {
  return <PortfolioLayout>{children}</PortfolioLayout>;
}

export default layout;
