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
  const [error, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const url = (imageSize: number) => error ? fallbackUrl : buildImageURL(posterPath, imageSize);

  return (
    <>
        <picture>
        {isLoading && <div className="movie-thumbnail__loading">Loading...</div>}
         <source
            media="(max-width: 480px)"
            srcSet={url(500)}
          />
          <source
            media="(max-width: 768px)"
            srcSet={url(400)}
          />
          <img
            src={url(300)}
            alt={title}
            className={className}
            onLoad={() => setIsLoading(false)}
            onError={() => setHasError(true)}
          />
        </picture>
    </>
  );
};

export default MovieThumbnail;
