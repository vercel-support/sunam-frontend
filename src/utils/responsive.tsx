import { useState, useEffect } from 'react';

interface Props {
  innerWidth?: number;
  innerHeight?: number;
  width: number;
  height: number;
}

export function getWindowSize(): Props {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
}
