import { ReactNode } from 'react';

import '@/styles/globals.css';
import { GlobalProviders } from '@/providers/global-provider';

import inter from './fonts';
import metadata from './metadata';

export { metadata };

type RootLayoutProps = Readonly<{ children: ReactNode }>;
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <main>
          <GlobalProviders>{children}</GlobalProviders>
        </main>
      </body>
    </html>
  );
}
