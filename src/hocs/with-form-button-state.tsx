'use client';

import type { FC } from 'react';
import { useFormStatus } from 'react-dom';
import { TailSpin } from 'react-loading-icons';

import type { ButtonProps } from '@/components/ui/button';

export const withFormButtonState = (WrappedComponent: FC<ButtonProps>) =>
  function EnhancedComponent({ children, ...otherProps }: ButtonProps) {
    const { pending } = useFormStatus();

    return (
      <WrappedComponent {...otherProps} disabled={pending}>
        {pending && <TailSpin className='mr-2' width={20} height={20} />}
        {children}
      </WrappedComponent>
    );
  };
