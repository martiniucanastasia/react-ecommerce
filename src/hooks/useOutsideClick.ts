import { useEffect, useRef } from "react";

export const useOutsideClick = (callback: any): React.MutableRefObject<any> => {
  const ref: React.MutableRefObject<any> = useRef();
  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);
  return ref;
};
