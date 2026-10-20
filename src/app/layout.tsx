import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google';
import '@/styles/globals.css';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hospitality.afrismme.com'),
  title: 'AfriSMME Hub | Restaurant & Hospitality Support Services',
  description: 'Turnkey architectural enhancement, dining acoustics, bespoke furniture restoration, and preventative facility maintenance for high-end restaurants and hospitality venues across Africa.',
  keywords: [
    'Restaurant support South Africa',
    'Hospitality facility maintenance',
    'Dining room acoustic engineering',
    'Commercial furniture restoration',
    'Commercial kitchen extraction maintenance',
    'AfriSMME Hub',
    'Luxury restaurant design and support',
    'Alfresco terrace weatherproofing',
  ],
  authors: [{ name: 'AfriSMME Hub Hospitality Engineering' }],
  creator: 'AfriSMME Hub',
  publisher: 'AfriSMME Hub',
  robots: 'index, follow',
  openGraph: {
    title: 'AfriSMME Hub | Restaurant & Hospitality Support Services',
    description: 'Turnkey architectural enhancement, dining acoustics, bespoke furniture restoration, and scheduled preventative facility maintenance.',
    url: 'https://hospitality.afrismme.com',
    siteName: 'AfriSMME Hospitality Support',
    images: [
      {
        url: '/images/hero_luxury_dining.jpg',
        width: 1200,
        height: 630,
        alt: 'AfriSMME Hub Hospitality Services - Luxury Dining Architecture',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AfriSMME Hub | Restaurant & Hospitality Support Services',
    description: 'Turnkey architectural enhancement, dining acoustics, bespoke furniture restoration, and preventative facility maintenance.',
    images: ['/images/hero_luxury_dining.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1B3B2B',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sansFont.variable} ${displayFont.variable} scroll-smooth`}>
      <body className="bg-ivory-100 text-charcoal-900 min-h-screen selection:bg-bronze-500 selection:text-charcoal-950 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
