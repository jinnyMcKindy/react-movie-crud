// src/pages/MovieList/MovieList.tsx
import React, { useState } from 'react';
import MovieItem  from '../../movieItem/MovieItem';
import Pagination  from '../../pagination/Pagination';
import SearchInput  from '../../searchInput/SearchInput';
import useSearch from '../hooks/useSearch';
import useMovies from '../hooks/useMovies';
import { Movie } from '../types';

import './MovieList.scss';

const MovieList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { query, debouncedQuery, setQuery } = useSearch('');
  const { movies, totalPages, loading, error } = useMovies(currentPage, debouncedQuery);

  return (
    <div className="movie-list">
      <h1 className="movie-list__title">Movie List</h1>
      <SearchInput query={query} setQuery={setQuery} />
      <div className="movie-list__movies">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          movies.map((movie: Movie) => <MovieItem key={movie.id} movie={movie} />)
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
export default MovieList;
