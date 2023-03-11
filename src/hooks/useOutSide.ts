import { useEffect, useRef } from 'react';

type EventHandler = (event: MouseEvent | TouchEvent) => void;

const useOutsideClick = (refs: React.RefObject<HTMLElement>[], handler: EventHandler) => {
  const savedHandler = useRef<EventHandler>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (refs.filter(ref => ref.current && ref.current.contains(event.target as Node)).length == 0) {
        savedHandler.current?.(event);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [refs]);
};

export default useOutsideClick;
