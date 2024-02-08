import type { AxiosRequestConfig } from 'axios';

export const backendApiClientRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
  withCredentials: true,
} satisfies AxiosRequestConfig;
