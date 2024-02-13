import { useState, useEffect } from 'react';

export default function useScroll() {
  const [scroll, setScroll] = useState(0);

  function debounce(func: Function, timeout = 100) {
    let timer: ReturnType<typeof setTimeout>;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(window), timeout);
    };
  }

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    }
    window.addEventListener("scroll", debounce(handleScroll, 50));
    return () => window.removeEventListener("scroll", debounce(handleScroll, 50));
  }, []);

  return scroll;
}
