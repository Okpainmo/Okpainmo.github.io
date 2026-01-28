import '@/app/styles/globals.css';
import type { Metadata } from 'next';
import { nunito_sans, poppins, lato } from './utils/font';
import { Toaster } from 'react-hot-toast';
import { AppProvider } from '@/app/rtk-base/provider';

export const metadata: Metadata = {
  title: 'Andrew Okpainmo | Portfolio',
  description:
    'Product engineer specializing in blockchain research and development - building scalable solutions at the intersection of product and engineering.',
  openGraph: {
    title: 'Andrew Okpainmo | Portfolio',
    description:
      'Product engineer specializing in blockchain research and development.',
    url: 'https://okpainmo.github.io',
    siteName: 'Andrew Okpainmo',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/42122017',
        width: 800,
        height: 800
      }
    ],
    locale: 'en-US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrew Okpainmo | Portfolio',
    description:
      'Product engineer specializing in blockchain research and development - building scalable solutions at the intersection of product and engineering.',
    creator: '@AJ_Okpainmo',
    images: ['https://avatars.githubusercontent.com/u/42122017']
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito_sans} ${poppins} ${lato}`}>
      <body suppressHydrationWarning>
        <AppProvider>
          {children}
          <Toaster position="top-right" />
        </AppProvider>
      </body>
    </html>
  );
}
