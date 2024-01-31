import type { NextAuthConfig } from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import { SupabaseAdapter } from '@auth/supabase-adapter';

export const authConfig = {
  pages: {
    signIn: '/auth',
    signOut: '/dashboard',
  },
  session: {
    strategy: 'database',
  },
  providers: [GitHub, Google],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
  }),
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (new URL(url).pathname === '/auth') {
        return `${baseUrl}/account-setup`;
      }
      return url;
    },
    // @ts-ignore @audit - Fix the problem that's making user props not inferring to any
    async session({ session, user }) {
      return { ...session, user: { ...user } };
    },
  },
} satisfies NextAuthConfig;
