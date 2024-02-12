'use client';

import type { ReactNode } from 'react';

import { useAppDispatch } from '@/hooks/redux-hooks';
import { PerformOnceOnRender } from '@/components/perform-once-on-render';
import { fetchUserProfile } from '@/store/slice/user/thunk/fetch-user-profile';

interface DashboardInitGlobalDataProviderProps {
  children: ReactNode;
}
export function DashboardInitGlobalDataProvider(
  props: DashboardInitGlobalDataProviderProps,
) {
  const dispatch = useAppDispatch();

  return (
    <PerformOnceOnRender
      actions={[() => dispatch(fetchUserProfile())]}
    >
      {props.children}
    </PerformOnceOnRender>
  );
}
