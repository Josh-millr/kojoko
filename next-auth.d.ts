import { DefaultSession } from 'next-auth';

export declare module 'next-auth' {
  export interface Session {
    user: {
      // Extend default user data
    } & DefaultSession['user'];
  }
}
