import { ComponentType } from 'react';
import { Movie } from '@/shared/types';

export interface MovieContentProps {
  movie: Movie;
  Thumbnail?: ComponentType<MovieThumbnailProps>;
}

export interface MovieThumbnailProps {
  imageUrl: string;
  title: string;
  className: string;
}
  