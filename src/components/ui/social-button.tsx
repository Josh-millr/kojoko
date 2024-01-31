'use client';

import type { ButtonHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

import { GoogleIcon } from './logo/google';
import { GithubIcon } from './logo/github';

const socialButtonVariants = cva(
  'me-2 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4',
  {
    variants: {
      platform: {
        google:
          'bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-[#4285F4]/50 dark:focus:ring-[#4285F4]/55',
        github:
          'bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-[#24292F]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-gray-500',
      },
      fullWidth: {
        true: 'flex w-full place-content-center',
        false: 'w-fit',
      },
    },
    defaultVariants: {
      fullWidth: false,
    },
  },
);

const provideIcon = (platform: string) => {
  switch (platform) {
    case 'google':
      return <GoogleIcon size={16} />;
    case 'github':
      return <GithubIcon size={16} />;
    default:
      throw new Error('Social platform not supported');
  }
};

type ButtonVariantProps = VariantProps<typeof socialButtonVariants>;

interface SocialButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<ButtonVariantProps, 'platform'>,
    Required<Pick<ButtonVariantProps, 'platform'>> {
  fullWidth?: boolean;
}

export function SocialButton(props: SocialButtonProps) {
  const { children, className, platform, fullWidth = false, ...others } = props;
  return (
    <button
      className={cn(socialButtonVariants({ platform, fullWidth }), className)}
      {...others}
    >
      <span className="me-2">{provideIcon(platform as string)}</span>
      {children}
    </button>
  );
}
