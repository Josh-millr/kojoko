'use client';

import { useRouter } from 'next/navigation';
import { NavArrowLeft, NavArrowRight } from 'iconoir-react';

import { Button } from '@/components/ui/button';
import { useNavigationHistory } from '@/hooks/use-navigation-history';

export function HistoryNavigator() {
  const router = useRouter();
  const { isEnd, updateStack } = useNavigationHistory();

  const goBack = () => {
    router.back();
  };
  const goForward = () => {
    router.forward();
    updateStack();
  };

  return (
    <div className="flex">
      <Button variant="ghost" size="icon" onClick={goBack}>
        <NavArrowLeft width={24} height={24} />
      </Button>
      <Button variant="ghost" size="icon" disabled={isEnd} onClick={goForward}>
        <NavArrowRight width={24} height={24} />
      </Button>
    </div>
  );
}
