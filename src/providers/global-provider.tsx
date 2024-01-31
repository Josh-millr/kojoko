'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

interface GlobalProvidersProps {
  children: ReactNode;
}
export function GlobalProviders({ children }: GlobalProvidersProps) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}
