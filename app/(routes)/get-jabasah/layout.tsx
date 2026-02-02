import React from 'react';
import type { Metadata } from 'next';
import ThemeSegmentLayout from './components/layout/ThemeSegmentLayout';

export const metadata: Metadata = {
  title: 'Jabasah - Premium Portfolio Template For Senior Software Engineers',
  description:
    'Elevate your professional presence with the Jabasah Portfolio Template. A premium, developer-focused masterpiece with an in-built MDX-powered blog and more other awesome features.',
  openGraph: {
    title: 'Jabasah - Premium Portfolio Template For Senior Software Engineers',
    description:
      'Elevate your professional presence with the Jabasah Portfolio Template. A premium, developer-focused masterpiece with an in-built MDX-powered blog and more other awesome features.',
    images: [
      {
        url: 'https://okpainmo.github.io/_/okpainmo__the-logo.png',
        width: 1200,
        height: 630,
        alt: 'Jabasah Template Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jabasah - Premium Portfolio Template For Senior Software Engineers',
    description:
      'Elevate your professional presence with the Jabasah Portfolio Template. A premium, developer-focused masterpiece with an in-built MDX-powered blog and more other awesome features.',
    images: ['https://okpainmo.github.io/_/okpainmo__the-logo.png']
  }
};

function layout({ children }: { children: React.ReactNode }) {
  return <ThemeSegmentLayout>{children}</ThemeSegmentLayout>;
}

export default layout;
