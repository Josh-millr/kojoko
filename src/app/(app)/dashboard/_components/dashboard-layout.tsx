import type { ReactNode } from 'react';

import { ScrollArea } from '@/components/ui/scroll-area';

export function DashboardLayoutViewport(props: { children: ReactNode }) {
  return (
    <section className="flex min-h-screen w-screen overflow-hidden">
      {props.children}
    </section>
  );
}

interface DashboardLayoutSideBarProps {
  children: ReactNode;
  width?: number;
}
export function DashboardLayoutSideBar(props: DashboardLayoutSideBarProps) {
  const { children, width = 296 } = props;
  return (
    <aside
      style={{ width: `${width}px` }}
      className="min-h-screen overflow-hidden border-r border-r-border"
    >
      {children}
    </aside>
  );
}

export function DashboardLayoutMain(props: { children: ReactNode }) {
  return (
    <ScrollArea className="h-screen min-h-screen w-full flex-grow ">
      {props.children}
    </ScrollArea>
  );
}

export function DashboardLayoutContent(props: { children: ReactNode }) {
  return <div className="p-6">{props.children}</div>;
}
