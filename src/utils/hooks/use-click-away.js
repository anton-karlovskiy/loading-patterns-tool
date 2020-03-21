
import { useEffect, useRef } from 'react';

const useClickAway = ({ onClickInside, onClickOutside }) => {
  const node = useRef(null);
  
  useEffect(() => {
    const handleClick = event => {
      if (node.current.contains(event.target)) {
        // inside click
        onClickInside && onClickInside();
        return;
      }
      // outside click
      onClickOutside && onClickOutside()
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [onClickInside, onClickOutside]);

  return node;
};

export default useClickAway;
