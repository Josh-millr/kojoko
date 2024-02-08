'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { IconoirProvider } from 'iconoir-react';

import { Toaster } from '@/components/ui/toaster';
import defaultIconProps from '@/constants/global-icon-props';

import { ScreenSizeProvider } from './screen-size-provider';

interface GlobalProvidersProps {
  children: ReactNode;
}
export function GlobalProviders({ children }: GlobalProvidersProps) {
  return (
    <ScreenSizeProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <IconoirProvider iconProps={defaultIconProps}>
          <Toaster />
          {children}
        </IconoirProvider>
      </ThemeProvider>
    </ScreenSizeProvider>
  );
}
