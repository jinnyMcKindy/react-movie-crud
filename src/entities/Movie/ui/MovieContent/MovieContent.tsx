import React from 'react';
import { Link } from 'react-router-dom';
import './MovieContent.scss';
import { MovieContentProps } from '@/entities/Movie/types';

const MovieContent: React.FC<MovieContentProps> = ({ movie, Thumbnail }) => {
    return (
        <div className="movie-content">
            { Thumbnail && <Thumbnail           
              posterPath={movie.poster_path}
              title={movie.title} 
              className="movie-content__thumbnail"/> 
              }
          <div className="movie-content__content">
            <h1 className="movie-content__title">{movie.title}</h1>
            <p className="movie-content__description">{movie.overview}</p>
            <Link to="/" className="movie-content__back-link">Back to List</Link>
          </div>
        </div>
      );
};

export default MovieContent;
