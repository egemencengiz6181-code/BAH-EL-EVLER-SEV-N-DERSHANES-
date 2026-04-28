import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bahcelievlersevinc.com'),
  title: {
    default: 'Bahçelievler Sevinç Dershanesi',
    template: '%s | Bahçelievler Sevinç Dershanesi',
  },
  description: "Bahçelievler — Sevinç Dershanesi. Hedef okuluna giden yol.",
  authors: [{ name: 'Bahçelievler Sevinç Dershanesi', url: 'https://www.bahcelievlersevinc.com' }],
  creator: 'Bahçelievler Sevinç Dershanesi',
  publisher: 'Bahçelievler Sevinç Dershanesi',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/logos/Sevinc-Kurs-Logo.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Bahçelievler Sevinç Dershanesi',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sevincdershanesi',
    creator: '@sevincdershanesi',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
