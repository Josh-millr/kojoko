import type { ReactNode } from 'react';

import { ViewportGuard } from '@/components/viewport-guard';
import { DashboardProvider } from './_provider/dashboard-provider';

interface DashboardLayoutProps {
  children: ReactNode;
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <ViewportGuard>
      <DashboardProvider>{children}</DashboardProvider>
    </ViewportGuard>
  );
}
