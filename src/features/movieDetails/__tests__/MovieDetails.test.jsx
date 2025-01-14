import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import MovieDetails from '../ui/MovieDetails';
import useMovieDetails from '../hooks/useMovieDetails';

vi.mock('../hooks/useMovieDetails');

describe('MovieDetails Component', () => {
  const mockUseMovieDetails = useMovieDetails;

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('displays loading indicator when loading', () => {
    mockUseMovieDetails.mockReturnValue({
      movie: null,
      loading: true,
      error: null,
    });

    render(<MovieDetails />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message when there is an error', () => {
    const errorMessage = 'Failed to fetch movie details';
    mockUseMovieDetails.mockReturnValue({
      movie: null,
      loading: false,
      error: errorMessage,
    });

    render(<MovieDetails />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  // test('displays movie content when data is available', () => {
  //   const movie = {
  //     id: 1,
  //     title: 'Sample Movie',
  //     overview: 'Sample overview',
  //     poster_path: '/sample-poster.jpg',
  //   };
  //   mockUseMovieDetails.mockReturnValue({
  //     movie,
  //     loading: false,
  //     error: null,
  //   });

  //   render(<MovieDetails />);

  //   expect(screen.getByText(movie.title)).toBeInTheDocument();
  // });

  test('displays "No movie data" when movie is null', () => {
    mockUseMovieDetails.mockReturnValue({
      movie: null,
      loading: false,
      error: null,
    });

    render(<MovieDetails />);

    expect(screen.getByText(/no movie data/i)).toBeInTheDocument();
  });
});
