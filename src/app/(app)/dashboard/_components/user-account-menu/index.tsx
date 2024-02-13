'use client';

import dynamic from 'next/dynamic';

import { Skeleton } from '@/components/ui/skeleton';
import { useAppSelector } from '@/hooks/redux-hooks';

const userAvatarSkeleton = <Skeleton className="h-8 w-8 rounded-full" />;

export function UserAccountMenu() {
  const { status } = useAppSelector((state) => state.user);
  if (status !== 'succeeded') return userAvatarSkeleton;
  return <UserAccountMenuDynamic />;
}

const UserAccountMenuDynamic = dynamic(
  () => import('./main').then((mod) => mod.UserAccountMenuMain),
  { ssr: false, loading: () => userAvatarSkeleton },
);
