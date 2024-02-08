'use client';

import { type ReactNode, useEffect } from 'react';
import { useWindowSize } from 'react-use';
import { createContext, useContext, useCallback } from 'react';
import { useEventListener, useDebounceValue } from 'usehooks-ts';

import type { ViewportSize } from '@/types/viewport-size';
import { setViewportSizeToCookie } from '@/utils/set-viewport-size-to-cookie';

interface ScreenSizeProviderProps {
  children: ReactNode;
}

const ViewportSizeContext = createContext({
  width: 0,
  height: 0,
});

export function ScreenSizeProvider({ children }: ScreenSizeProviderProps) {
  const viewportSize = useWindowSize();
  const [debouncedViewportSize] = useDebounceValue<ViewportSize>(
    viewportSize,
    500,
  );
  const viewportSizeMemoHandler = useCallback(
    () =>
      setViewportSizeToCookie(
        debouncedViewportSize.width,
        debouncedViewportSize.height,
      ),
    [debouncedViewportSize],
  );

  useEffect(() => {
    viewportSizeMemoHandler();
  }, [viewportSizeMemoHandler]);

  useEventListener('resize', viewportSizeMemoHandler);

  return (
    <ViewportSizeContext.Provider value={{ ...debouncedViewportSize }}>
      {children}
    </ViewportSizeContext.Provider>
  );
}

export const useViewportSize = () => useContext(ViewportSizeContext);
