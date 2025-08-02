import './globals.css';
import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-josefin'
});

export const metadata: Metadata = {
  title: 'ZOMY - Freelance Platform',
  description: 'Connect with talented freelancers and clients worldwide. Find the perfect match for your projects.',
  icons: {
    icon: '/zomy_logo.png',
    shortcut: '/zomy_logo.png',
    apple: '/zomy_logo.png',
  },
  openGraph: {
    title: 'ZOMY - Freelance Platform',
    description: 'Connect with talented freelancers and clients worldwide. Find the perfect match for your projects.',
    type: 'website',
    images: [
      {
        url: '/zomy_logo.png',
        width: 1200,
        height: 630,
        alt: 'ZOMY - Freelance Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZOMY - Freelance Platform',
    description: 'Connect with talented freelancers and clients worldwide. Find the perfect match for your projects.',
    images: ['/zomy_logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/zomy_logo.png" />
        <link rel="shortcut icon" href="/zomy_logo.png" />
        <link rel="apple-touch-icon" href="/zomy_logo.png" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>
      <body className={josefin.className}>{children}</body>
    </html>
  );
}
