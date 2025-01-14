import React from 'react';
import { Link } from 'react-router-dom';
import './MovieContent.scss';
import { MovieContentProps } from '@/entities/Movie/types';

const MovieContent: React.FC<MovieContentProps> = ({ movie, Thumbnail }) => {
    return (
        <div className="movie-details">
            { Thumbnail && <Thumbnail           
              imageUrl={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
              title={movie.title} 
              className="movie-details__thumbnail"/> 
              }
          <div className="movie-details__content">
            <h1 className="movie-details__title">{movie.title}</h1>
            <p className="movie-details__description">{movie.overview}</p>
            <Link to="/" className="movie-details__back-link">Back to List</Link>
          </div>
        </div>
      );
};

export default MovieContent;
