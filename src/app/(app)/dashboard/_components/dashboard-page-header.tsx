'use client';

import { usePathname } from 'next/navigation';

export function DashboardPageHeader() {
  const pathname = usePathname();

  const pathSegments = pathname.split('/');
  const activeSegment = pathSegments[4];

  return (
    <div className="flex h-[144px] w-full items-end border-b border-b-border px-8 py-6">
      <h1 className="font-sans text-heading-lg capitalize">
        {activeSegment} Settings
      </h1>
    </div>
  );
}
