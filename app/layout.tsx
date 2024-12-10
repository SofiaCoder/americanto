import type { Metadata } from 'next';
import './globals.css';
import { Lato } from 'next/font/google';
import ScrollObserver from '../components/ScrollObserver';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={lato.className}>
        {children}
        <ScrollObserver />
      </body>
    </html>
  );
}
