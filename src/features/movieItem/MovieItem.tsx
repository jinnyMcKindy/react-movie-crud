import { Link } from 'react-router-dom';

interface MovieItemProps {
  movie: {
    id: number;
    poster_path: string;
    title: string;
  };
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => (
  <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-list__movie-item">
    <img
      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
      alt={movie.title}
      className="movie-list__img"
    />
    <p className="movie-list__movie-title">{movie.title}</p>
  </Link>
);

export default MovieItem;