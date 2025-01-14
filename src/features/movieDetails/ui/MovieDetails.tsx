import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Movie } from '@/shared/types';
import { API_KEY, API_URL } from '@/shared/apiConstants';
import MovieThumbnail from '@/shared/components/movieThumbnail';
import Loading from '@/shared/components/loading';
import './MovieDetails.scss';

const MovieDetails: React.FC = () => {
    const [movie, setMovie] = useState<Movie | null>(null);
    const { id } = useParams<{ id: string }>();
  
    useEffect(() => {
      const fetchMovieDetails = async () => {
        const response = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
        const data: Movie = await response.json();
        setMovie(data);
      };
      fetchMovieDetails();
    }, [id]);
  
    if (!movie) {
      return <Loading />;
    }
  
    return (
      <div className="movie-details">
        <MovieThumbnail 
          imageUrl={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
          title={movie.title} 
          className="movie-details__thumbnail"
        />
        <div className="movie-details__content">
          <h1 className="movie-details__title">{movie.title}</h1>
          <p className="movie-details__description">{movie.overview}</p>
          <Link to="/" className="movie-details__back-link">Back to List</Link>
        </div>
      </div>
    );
  };

  export default MovieDetails;