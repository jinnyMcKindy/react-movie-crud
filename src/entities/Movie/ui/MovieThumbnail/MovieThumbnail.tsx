import React, { useState } from 'react';
import './MovieThumbnail.scss';
import fallbackUrl from '@/assets/video_placeholder.png';
import { MovieThumbnailProps } from '@/entities/Movie/types';
import { IMAGE_URL } from '@/shared/apiConstants';

const buildImageURL = (imageUrl: string, size: number) => {
  return  `${IMAGE_URL}w${size}${imageUrl}`;
}
const MovieThumbnail: React.FC<MovieThumbnailProps> = ({
  posterPath,
  title,
  className,
}) => {
  const [imgSrc, setImgSrc] = useState(posterPath);
  
  return (
    <img
      src={buildImageURL(imgSrc, 500)}
      alt={title}
      className={className}
      onError={() => setImgSrc(fallbackUrl)}
    />
  );
};

export default MovieThumbnail;
