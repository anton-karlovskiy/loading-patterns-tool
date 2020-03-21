
import { useEffect, useRef } from 'react';

const useClickAway = ({ onClickInside, onClickOutside }) => {
  const node = useRef(null);

  const handleClick = event => {
    if (node.current.contains(event.target)) {
      // inside click
      onClickInside && onClickInside();
      return;
    }
    // outside click
    onClickOutside && onClickOutside()
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return node;
};

export {
  useClickAway
};
