import type { ReactNode } from 'react';

import { ViewportGuard } from '@/components/viewport-guard';
import { DashboardProvider } from '@/providers/dashboard-provider';

interface AppLayoutProps {
  children: ReactNode;
}
export default function DashboardLayout({ children }: AppLayoutProps) {
  return (
    <ViewportGuard>
      <DashboardProvider>{children}</DashboardProvider>
    </ViewportGuard>
  );
}
