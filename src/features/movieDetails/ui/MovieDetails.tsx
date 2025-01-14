import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../lib/MovieDetailsSlice';
import { RootState, AppDispatch } from '@/app/store';
import { MovieContent, MovieThumbnail } from '@/entities/Movie';
import Loading from '@/shared/components/loading';
import Error from '@/shared/components/error';


const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch();

  const { data: movie, loading, error } = useSelector(
    (state: RootState) => state.movie
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetails(id));
    }
  }, [id, dispatch]);

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
