import RootProvider from '@/components/utils/root-provider';
import { inter, suit } from '@/lib/fonts';
import type { Metadata } from 'next';
import './globals.css';
import Nav from './nav';

export const metadata: Metadata = {
  title: 'Algorix LLC',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${suit.variable}`}>
      <body className="font-sans h-screen w-screen overflow-x-hidden overflow-y-auto">
        <RootProvider>
          <Nav />

          {children}
        </RootProvider>
      </body>
    </html>
  );
}
