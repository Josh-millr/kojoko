'use server';

import { auth } from '@/app/auth';

export const getUserIdFromSession = async () => {
  const session = await auth();
  return session?.user.id;
};
