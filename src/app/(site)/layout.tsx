import type { ReactNode } from 'react';
import NextTopLoader from 'nextjs-toploader';

import { PRIMARY } from '@/constants/brand-colors';

interface SiteLayoutProps {
  children: ReactNode;
}
export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <NextTopLoader color={PRIMARY} />
      {children}
    </>
  );
}
