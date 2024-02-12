import { useEffect, useRef } from 'react';

export const usePerformOncePostRender = (func: () => void) => {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      func();
    }
  }, [func]);
};
