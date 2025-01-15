import { Link } from 'react-router-dom';
import { MovieThumbnail } from '@/entities/Movie';
import { MovieItemProps } from '@/entities/Movie/types';
import './MoviePreview.scss';

const MoviePreview: React.FC<MovieItemProps> = ({ movie }) => (
  <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-preview__movie-item">
    <MovieThumbnail 
      posterPath={movie.poster_path} 
      title={movie.title}
      className='movie-preview__thumbnail'
    />
    <p className="movie-preview__title">{movie.title}</p>
  </Link>
);

export default MoviePreview;