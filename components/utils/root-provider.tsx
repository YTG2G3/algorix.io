'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function RootProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
