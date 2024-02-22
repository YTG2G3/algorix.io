import { Bricolage_Grotesque } from 'next/font/google';
import localFont from 'next/font/local';

// Wanted is default font, Bricolage is for emphasis
// Use `font-sans` and `font-bricolage` in Tailwind CSS (see tailwind.config.ts)
// Suit is for the logo

export const suit = localFont({
  src: './SUIT-Variable.woff2',
  variable: '--font-suit'
});

export const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage'
});

export const wanted = localFont({
  src: './WantedSansVariable.woff2',
  variable: '--font-wanted'
});
