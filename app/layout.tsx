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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josefin.className}>{children}</body>
    </html>
  );
}
