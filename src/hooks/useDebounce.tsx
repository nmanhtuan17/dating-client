import {useEffect, useState} from 'react';

const useDebounce = (val: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(val);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(val);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [val]);

  return debounceValue;
};

export default useDebounce;
