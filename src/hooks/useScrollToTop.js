import { useEffect } from 'react';

/**
 * useScrollToTop - Custom hook to scroll the window to the top when a dependency changes.
 * @param {any} dependency - The value that triggers scrolling when it changes.
 */
const useScrollToTop = (dependency = null) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [dependency]);
};

export default useScrollToTop;
