import { ComponentType } from 'react';
import { Movie } from '@/shared/types';

export interface MovieContentProps {
  movie: Movie;
  Thumbnail?: ComponentType<MovieThumbnailProps>;
}

export interface MovieThumbnailProps {
  posterPath: string;
  title: string;
  className: string;
}

export interface MovieItemProps {
  movie: {
    id: number;
    poster_path: string;
    title: string;
  };
}

  