import React, { useState } from 'react';
import MovieItem  from '@/features/movieItem';
import Pagination  from '@/features/pagination';
import SearchInput  from '@/features/searchInput';
import useSearch from '../hooks/useSearch';
import useMovies from '../hooks/useMovies';
import Loading from '@/shared/components/loading';
import Error from '@/shared/components/error';
import { Movie } from '@/shared/types';
import './MovieList.scss';

const MovieList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { query, debouncedQuery, setQuery } = useSearch('');
  const { movies, totalPages, loading, error } = useMovies(currentPage, debouncedQuery);

  return (
    <div className="movie-list">
      <h1 className="movie-list__title">Movie List</h1>
      <SearchInput query={query} setQuery={setQuery} />
      <div className="movie-list__content">
        {loading ? (
            <Loading />
          ) : error ? (
            <Error message={error} />
        ) : (
          <>
            {movies.length === 0 && <p>No movies found</p>}
            <div className="movie-list__movies">
              {movies.map((movie: Movie) => <MovieItem key={movie.id} movie={movie} />)}
            </div>
          </>
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
