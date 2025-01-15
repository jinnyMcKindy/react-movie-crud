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
    <picture>
      <source
        media="(max-width: 480px)"
        srcSet={buildImageURL(imgSrc, 500)}
      />
      <source
        media="(max-width: 768px)"
        srcSet={buildImageURL(imgSrc, 400)}
      />
      <source
        media="(max-width: 1200px)"
        srcSet={buildImageURL(imgSrc, 200)}
      />
      <img
        src={buildImageURL(imgSrc, 300)}
        alt={title}
        className={className}
        onError={() => setImgSrc(fallbackUrl)}
      />
    </picture>

  );
};

export default MovieThumbnail;
