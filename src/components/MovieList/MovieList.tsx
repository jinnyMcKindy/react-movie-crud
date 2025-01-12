import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Movie, API_KEY, API_URL, PaginatedResponse } from '../../shared/types';

import './MovieList.scss';

export const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = useCallback(async (page: number, query: string = '') => {
    const endpoint = query
      ? `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
      : `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;

    try {
      const response = await fetch(endpoint);
      const data: PaginatedResponse = await response.json();
      setMovies(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
      setCurrentPage(1);
    }, 500); 
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const query = debouncedQuery ?? '';
    fetchMovies(currentPage, query);
  }, [debouncedQuery, currentPage, fetchMovies]);

    return (
      <div className="movie-list">
        <h1 className="movie-list__title">Movie List</h1>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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