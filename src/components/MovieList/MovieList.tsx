import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Movie, API_KEY, API_URL, PaginatedResponse } from '../../shared/types';
import './MovieList.scss';

export const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
  
    const fetchMovies = async (page: number, query: string = '') => {
      const endpoint = query
        ? `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
        : `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;
  
      const response = await fetch(endpoint);
      const data: PaginatedResponse = await response.json();
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };
  
    useEffect(() => {
      fetchMovies(currentPage, searchTerm);
    }, [currentPage, searchTerm]);
  
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
      setCurrentPage(1);
    };
  
    return (
      <div className="movie-list">
        <h1 className="movie-list__title">Movie List</h1>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleSearch}
          className="movie-list__search-box"
        />
        <div className="movie-list__movies">
          {movies.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-list__movie-item">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="movie-list__img"
              />
              <p className="movie-list__movie-title">{movie.title}</p>
            </Link>
          ))}
        </div>
        <div className="movie-list__pagination">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="movie-list__pagination-button"
          >
            Previous
          </button>
          <span className="movie-list__pagination-info">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="movie-list__pagination-button"
          >
            Next
          </button>
        </div>
      </div>
    );
  };