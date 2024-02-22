import { Bricolage_Grotesque, Inter } from 'next/font/google';
import localFont from 'next/font/local';

// Inter is default font, SUIT is for emphasis
// Use `font-sans` and `font-suit` in Tailwind CSS (see tailwind.config.ts)

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const suit = localFont({
  src: './SUIT-Variable.woff2',
  variable: '--font-suit'
});

export const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage'
});
