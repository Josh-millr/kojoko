'use client';

import type { ReactNode } from 'react';
import { Provider } from 'react-redux';

import appStore from '@/store';

export function StoreProvider({ children }: { children: ReactNode }) {
  return <Provider store={appStore}>{children}</Provider>;
}
