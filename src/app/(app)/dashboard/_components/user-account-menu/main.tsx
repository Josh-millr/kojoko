'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils/cn';
import { useAppSelector } from '@/hooks/redux-hooks';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getInitials } from '@/utils/get-initials';
import { SignOutButton } from '@/components/signout-button';
import dashboardMenuItems from '@/constants/dashboard-menu-items';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { UserProfileChip } from '../user-profile-chip';

export function UserAccountMenuMain() {
  const pathname = usePathname();
  const { profile } = useAppSelector((state) => state.user);

  const isInSettings = (path: string) =>
    [path, pathname].every((value) => value.split('/').includes('settings'));

  const isLinkActive = (path: string) =>
    isInSettings(path) || path === pathname;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="h-8 w-8">
          <AvatarImage src={profile?.image} />
          <AvatarFallback>
            {profile?.name && getInitials(profile.name)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        alignOffset={-120}
        sideOffset={10}
        className="w-80 border-border p-2"
      >
        <UserProfileChip
          name={profile?.name as string}
          email={profile?.email as string}
          subscriptionType="free"
        />
        <DropdownMenuSeparator />
        {dashboardMenuItems.map(({ label, icon: Icon, path }) => (
          <Link href={path} key={label}>
            <DropdownMenuItem
              className={cn('gap-x-4', isLinkActive(path) && 'bg-muted')}
            >
              <Icon height={20} width={20} />
              <p className="flex flex-grow text-uip-sm capitalize">{label}</p>
            </DropdownMenuItem>
          </Link>
        ))}
        <DropdownMenuSeparator />
        <SignOutButton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
