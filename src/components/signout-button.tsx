import { LogOut } from 'iconoir-react';

import { Button } from '@/components/ui/button';
import { signOutAuth } from '@/actions/auth/sign-out';

export function SignOutButton() {
  return (
    <form
      action={async () => {
        await signOutAuth({
          redirectTo: process.env.NEXT_PUBLIC_SITE_URL,
        });
      }}
    >
      <Button
        type="submit"
        variant="ghost"
        className="flex w-full justify-start gap-x-3 pl-2"
      >
        <LogOut />
        <span className="text-uip-sm">Log out</span>
      </Button>
    </form>
  );
}
