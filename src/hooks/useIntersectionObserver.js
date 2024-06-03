import { useState, useEffect } from 'react';

const useIntersectionObserver = (elements, options) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setEntries(entries);
    }, options);

    elements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [elements, options]);

  return entries;
};

export default useIntersectionObserver;
