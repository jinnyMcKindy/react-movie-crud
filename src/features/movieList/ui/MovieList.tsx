import React, { useState, useMemo } from 'react';
import MoviePreview from '@/entities/Movie/ui/MoviePreview/MoviePreview';
import Pagination  from '@/features/pagination';
import SearchInput  from '@/features/searchInput';
import useSearch from '@/features/searchInput/hooks/useSearch';
import useMovies from '../hooks/useMovies';
import Loading from '@/shared/components/loading';
import Error from '@/shared/components/error';
import { Movie } from '@/shared/types';
import './MovieList.scss';

const MovieList: React.FC = React.memo(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const { query, debouncedQuery, updateQuery } = useSearch();
  const { movies, totalPages, loading, error } = useMovies(currentPage, debouncedQuery);
  const moviePreviews = useMemo(() => {
    return movies.map((movie: Movie) => (
      <MoviePreview key={movie.id} movie={movie} />
    ));
  }, [movies]);

  return (
    <div className="movie-list">
      <h1 className="movie-list__title">Movie List</h1>
      <SearchInput query={query} setQuery={updateQuery} />
      <div className="movie-list__content">
        {loading ? (
            <Loading />
          ) : error ? (
            <Error message={error} />
        ) : (
          <>
            {movies.length === 0 && <p>No movies found</p>}
            <div className="movie-list__movies">
              {moviePreviews}
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
});
export default MovieList;
