import { Link } from 'react-router-dom';
import { MovieThumbnail } from '@/entities/Movie';
import { MovieItemProps } from '@/entities/Movie/types';
import { IMAGE_URL } from '@/shared/apiConstants';

const MoviePreview: React.FC<MovieItemProps> = ({ movie }) => (
  <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-list__movie-item">
    <MovieThumbnail 
      imageUrl={`${IMAGE_URL}w200${movie.poster_path}`} 
      title={movie.title}
      className='movie-list__thumbnail'
    />
    <p className="movie-list__movie-title">{movie.title}</p>
  </Link>
);

export default MoviePreview;