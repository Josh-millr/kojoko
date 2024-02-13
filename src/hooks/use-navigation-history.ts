/* eslint-disable react-hooks/exhaustive-deps */
import {
  useEffect, useState, useRef, useCallback,
} from 'react';
import { usePathname } from 'next/navigation';

interface NavHistoryRef {
  stack: string[];
}

export const useNavigationHistory = () => {
  const [isEnd, setIsEnd] = useState<boolean>(true);
  const historyRef = useRef<NavHistoryRef>({ stack: [] });

  const currentUrl = usePathname();

  const updateStack = useCallback(() => {
    if (!historyRef.current.stack.includes(currentUrl)) {
      historyRef.current.stack.unshift(currentUrl);
    }
    setIsEnd(historyRef.current.stack[0] === currentUrl);
  }, [currentUrl]);

  useEffect(() => {
    updateStack();
  }, [currentUrl]);

  return { isEnd, updateStack };
};
