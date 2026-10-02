import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Manrope, Sora } from 'next/font/google';

import { Twinkles } from '@/components/Twinkles';
import { site } from '@/content/site';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata: Metadata = {
  title: `${site.name} | ${site.role}`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#05070c',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable} ${jetbrains.variable}`}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-ink focus:px-3 focus:py-2 focus:text-night"
        >
          Skip to content
        </a>
        <Twinkles />
        {children}
      </body>
    </html>
  );
}
