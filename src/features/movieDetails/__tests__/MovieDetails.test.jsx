import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import MovieDetails from '../ui/MovieDetails';
import useMovieDetails from '../hooks/useMovieDetails';
import { buildImageURL } from '@/shared/utils/buildImageURL';

vi.mock('../hooks/useMovieDetails');

describe('MovieDetails Component', () => {

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('displays loading indicator when loading', () => {
    vi.mocked(useMovieDetails).mockReturnValue({
      movie: null,
      loading: true,
      error: null,
    });

    render(<MovieDetails />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message when there is an error', () => {
    const errorMessage = 'Failed to fetch movie details';
    vi.mocked(useMovieDetails).mockReturnValue({
      movie: null,
      loading: false,
      error: errorMessage,
    });

    render(<MovieDetails />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  test('displays movie content when data is available', () => {
    const movie = {
      id: 1,
      title: 'Sample Movie',
      overview: 'Sample overview',
      poster_path: '/sample-poster.jpg',
    };
    const imgUrl = buildImageURL(movie.poster_path, 300);
  
    vi.mocked(useMovieDetails).mockReturnValue({
      movie,
      loading: false,
      error: null,
    });
  
    render(
      <MemoryRouter>
        <MovieDetails />
      </MemoryRouter>);
  
    expect(screen.getByText(movie.title)).toBeInTheDocument();
  
    expect(screen.getByText(movie.overview)).toBeInTheDocument();
  
    const posterImage = screen.getByRole('img');
    expect(posterImage).toHaveAttribute('src', imgUrl);
  });
  

  test('displays "No movie data" when movie is null', () => {
    vi.mocked(useMovieDetails).mockReturnValue({
      movie: null,
      loading: false,
      error: null,
    });

    render(<MovieDetails />);

    expect(screen.getByText(/no movie data/i)).toBeInTheDocument();
  });
});
