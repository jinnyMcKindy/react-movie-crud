
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../app/store';
import { useEffect } from 'react';
import { fetchMovies } from '../lib/movieSlice';
import { RootState } from '../../../app/store';
import { MovieState } from '../types';

const useMovies = (currentPage: number, debouncedQuery: string): MovieState => {
  const dispatch = useDispatch<AppDispatch>();
  const { movies, totalPages, loading, error } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies({ page: currentPage, query: debouncedQuery }));
  }, [dispatch, currentPage, debouncedQuery]);

  return { movies, totalPages, loading, error };
};

export default useMovies;
