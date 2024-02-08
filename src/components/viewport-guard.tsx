import type { ReactNode } from 'react';
import { cookies } from 'next/headers';

import { deSerialize } from '@/utils/deserialize';
import type { ViewportSize } from '@/types/viewport-size';
import { isMinDashboardViewport } from '@/utils/is-min-dashboard-viewport';

import { SupportNotice } from './support-notice';

interface ViewportGuardProps {
  children: ReactNode;
}

export function ViewportGuard({ children }: ViewportGuardProps) {
  const viewportSizeSerialized = cookies().get('viewport-size')?.value;

  if (!viewportSizeSerialized) {
    // @todo Display a button for users to reload their webpage or enable cookies
    handleViewportSizeCookieNotFound();
    return null;
  }

  const viewportWidth = deSerialize<ViewportSize>(viewportSizeSerialized).width;

  return !isMinDashboardViewport(viewportWidth) ? (
    <SupportNotice />
  ) : (
    <>{children}</>
  );
}

const handleViewportSizeCookieNotFound = () => {
  // The reason could be that the user deleted the cookie or the
  // @todo Handle the cookies bot found case.
};
