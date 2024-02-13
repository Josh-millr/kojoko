import type { ReactNode } from 'react';

interface ConditionalRendererProps {
  children: ReactNode;
  loader: any;
  dependence: any;
}

export function ConditionalRenderer(props: ConditionalRendererProps) {
  const { children, loader, dependence } = props;
  return <>{dependence ? children : loader}</>;
}
