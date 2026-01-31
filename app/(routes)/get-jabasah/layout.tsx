import React from 'react';
import type { Metadata } from 'next';
import ThemeSegmentLayout from './components/layout/ThemeSegmentLayout';

export const metadata: Metadata = {
  title: 'Andrew Okpainmo - Portfolio',
  description:
    'Product engineer specializing in blockchain research and development - delivering cutting-edge solutions at the intersection of product and engineering.'
};

function layout({ children }: { children: React.ReactNode }) {
  return <ThemeSegmentLayout>{children}</ThemeSegmentLayout>;
}

export default layout;
