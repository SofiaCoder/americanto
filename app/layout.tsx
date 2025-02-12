import type { Metadata } from 'next';
import './globals.css';
import { Lato } from 'next/font/google';
import ScrollObserver from '../components/ScrollObserver';
import Menu from '@/components/Menu';
import { createClient, repositoryName } from '@/prismicio';
import { PrismicPreview } from '@prismicio/next';
import Footer from '@/components/Footer';
import CookieConsentBanner from '@/components/CookieConsentBanner';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  try {
    const settings = await client.getSingle('settings');

    return {
      title: settings.data.site_title || 'Americanto',
      description:
        settings.data.meta_description ||
        'Americanto - Latinamerikansk kör i Stockholm',
      openGraph: {
        images: [settings.data.og_image.url || ''],
      },
    };
  } catch (error) {
    console.error('Error fetching document:', error);
    return {
      title: 'Americanto',
      description: 'Americanto - Latinamerikansk kör i Stockholm',
      openGraph: {
        images: [''],
      },
    };
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={lato.className}>
        <Menu />
        {children}
        <Footer />
        <ScrollObserver />
        <PrismicPreview repositoryName={repositoryName} />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
