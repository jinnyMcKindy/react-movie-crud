import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/app/store';
import { setQuery, setDebouncedQuery } from '../lib/searchSlice';

export interface UseSearchReturn {
  query: string;
  debouncedQuery: string;
  updateQuery: (newQuery: string) => void;
};

const useSearch = (): UseSearchReturn => {
  const dispatch = useDispatch<AppDispatch>();
  const query = useSelector((state: RootState) => state.search.query);
  const debouncedQuery = useSelector((state: RootState) => state.search.debouncedQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setDebouncedQuery(query));
    }, 500);

    return () => clearTimeout(timer);
  }, [query, dispatch]);

  const updateQuery = (newQuery: string) => {
    dispatch(setQuery(newQuery));
  };

  return { query, debouncedQuery, updateQuery };
};

export default useSearch;
