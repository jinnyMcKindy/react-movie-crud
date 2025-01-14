import { Link } from 'react-router-dom';
import { MovieThumbnail } from '@/entities/Movie';
interface MovieItemProps {
  movie: {
    id: number;
    poster_path: string;
    title: string;
  };
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => (
  <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-list__movie-item">
    <MovieThumbnail 
      imageUrl={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
      title={movie.title}
      className='movie-list__thumbnail'
    />
    <p className="movie-list__movie-title">{movie.title}</p>
  </Link>
);

export default MovieItem;