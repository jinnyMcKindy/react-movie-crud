import React from 'react';
import { MovieContent, MovieThumbnail } from '@/entities/Movie';
import Loading from '@/shared/components/loading';
import Error from '@/shared/components/error';
import useMovieDetails from '../hooks/useMovieDetails';

const MovieDetails: React.FC = () => {
  const { movie, loading, error } = useMovieDetails();

  return loading ? (
    <Loading />
  ) : error ? (
    <Error message={error || 'An error occurred'} />
  ) : (
    <>
      {movie ? (
        <MovieContent movie={movie} Thumbnail={MovieThumbnail} />
      ) : (
        <p>No movie data</p>
      )}
    </>
  );
};

export default MovieDetails;
