/* eslint-disable no-unused-vars */
declare namespace NodeJS {
  interface ProcessEnv {
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    AUTH_SECRET: string;
    NEXT_PUBLIC_SUPABASE_URL: string;
    SUPABASE_SERVICE_ROLE_KEY: string;
    SUPABASE_JWT_SECRET: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_SITE_URL: string;
  }
}
