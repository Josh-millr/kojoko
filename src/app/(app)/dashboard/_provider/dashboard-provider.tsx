'use client';

import type { ReactNode } from 'react';

import { StoreProvider } from '@/providers/store-provider';

import { DashboardInitGlobalDataProvider } from './dashboard-init-data-global-provider';

export function DashboardProvider({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <DashboardInitGlobalDataProvider>
        {children}
      </DashboardInitGlobalDataProvider>
    </StoreProvider>
  );
}
