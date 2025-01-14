import React, { useState } from 'react';
import './MovieThumbnail.scss';
import fallbackUrl from '@/assets/video_placeholder.png';
import { MovieThumbnailProps } from '@/entities/Movie/types';

const MovieThumbnail: React.FC<MovieThumbnailProps> = ({
  imageUrl,
  title,
  className,
}) => {
  const [imgSrc, setImgSrc] = useState(imageUrl);

  return (
    <img
      src={imgSrc}
      alt={title}
      className={className}
      onError={() => setImgSrc(fallbackUrl)}
    />
  );
};

export default MovieThumbnail;
