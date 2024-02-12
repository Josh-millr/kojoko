'use client';

import { type ReactNode, useCallback } from 'react';

import { usePerformOncePostRender } from '@/hooks/use-perform-once-post-render';

type Action = () => void;

interface PerformOnceOnRenderProps {
  children: ReactNode;
  actions: Action[];
}
export function PerformOnceOnRender(props: PerformOnceOnRenderProps) {
  usePerformOncePostRender(() => {
    executeActions();
  });

  const executeActions = useCallback(() => {
    props.actions.forEach((fn) => fn());
  }, [props.actions]);

  return <>{props.children}</>;
}
