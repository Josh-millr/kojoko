import type { ReactNode } from 'react';

import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/utils/cn';

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

interface DashboardLayoutSideBarSectionProps {
  children: ReactNode;
  className?: string;
  stretch?: boolean;
  fixed?: boolean;
  noBorder?: boolean;
}
export function DashboardLayoutSideBarSection(
  props: DashboardLayoutSideBarSectionProps,
) {
  const {
    children, className, stretch, fixed, noBorder,
  } = props;
  return (
    <div
      className={cn(
        'bg-background p-4',
        stretch && 'w-full',
        fixed && 'sticky left-0 top-0',
        noBorder ? 'border-0' : 'border-b-border [&:not(:last-child)]:border-b',
        className,
      )}
    >
      {children}
    </div>
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
