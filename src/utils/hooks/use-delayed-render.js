
import { useEffect, useState } from 'react';

const useDelayedRender = (delay, fallback) => {
  const [delayed, setDelayed] = useState(true);
  
  useEffect(() => {
    const timeout = setTimeout(() => setDelayed(false), delay);
    return () => clearTimeout(timeout);
  }, [delay]);
  return fn => !delayed ? fn() : fallback || null;
};

export default useDelayedRender;
