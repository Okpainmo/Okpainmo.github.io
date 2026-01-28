import React from 'react';
import type { Metadata } from 'next';
import PortfolioLayout from '../(portfolio)/components/layout/PortfolioLayout';

export const metadata: Metadata = {
  title: 'Andrew Okpainmo - Blog',
  description:
    'Thoughtful deep dives into systems engineering, blockchain architecture, and product development — grounded in real-world ownership and execution'
};

function layout({ children }: { children: React.ReactNode }) {
  return <PortfolioLayout>{children}</PortfolioLayout>;
}

export default layout;
