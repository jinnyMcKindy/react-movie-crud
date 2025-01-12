import { useState, useEffect } from 'react';
import { UseSearchReturn } from '../types';

const useSearch = (initialQuery: string): UseSearchReturn => {
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return { query, debouncedQuery, setQuery };
};

export default useSearch;
