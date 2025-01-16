import React, { useState } from 'react';
import './MovieThumbnail.scss';
import fallbackUrl from '@/shared/ui/video_placeholder.png';
import { MovieThumbnailProps } from '@/entities/Movie/types';
import { buildImageURL } from '@/shared/utils/buildImageURL';

const MovieThumbnail: React.FC<MovieThumbnailProps> = ({
  posterPath,
  title,
  className,
}) => {
  const [error, onError] = useState(false);

  const setSrc = () => {
    return error ? fallbackUrl : buildImageURL(posterPath, 300);
  }
  return (
    <picture>
      <source
        media="(max-width: 480px)"
        srcSet={buildImageURL(posterPath, 500)}
      />
      <source
        media="(max-width: 768px)"
        srcSet={buildImageURL(posterPath, 400)}
      />
      <source
        media="(max-width: 1200px)"
        srcSet={buildImageURL(posterPath, 200)}
      />
      <img
        src={setSrc()}
        alt={title}
        className={className}
        onError={() => {
          onError(true);
        }}
      />
    </picture>

  );
};

export default MovieThumbnail;
