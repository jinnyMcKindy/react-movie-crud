import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import MovieList from '../ui/MovieList';
import { afterEach } from 'vitest';
import useMovies from '../hooks/useMovies';

vi.mock('../hooks/useSearch', () => ({
  default: () => ({
    query: '',
    debouncedQuery: '',
    setQuery: vi.fn(),
  }),
}));

vi.mock('../hooks/useMovies');

describe('MovieList behavior', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('displays movies when data is available', () => {
    vi.mocked(useMovies).mockReturnValue({
        movies: [
          { id: 1, title: 'Movie 1' },
          { id: 2, title: 'Movie 2' },
        ],
        totalPages: 1,
        loading: false,
        error: null,
    });

    render(
      <MemoryRouter>
        <MovieList />
      </MemoryRouter>);

    expect(screen.getByText('Movie 1')).toBeInTheDocument();
    expect(screen.getByText('Movie 2')).toBeInTheDocument();
  });
 
  test('displays "No movies found" when movie list is empty', () => {
    vi.mocked(useMovies).mockReturnValue({
        movies: [],
        totalPages: 1,
        loading: false,
        error: null,
      })
    render(<MovieList />);
    expect(screen.getByText('No movies found')).toBeInTheDocument();
  });

  test('displays error message when there is an error', () => {
    vi.mocked(useMovies).mockReturnValue({
        movies: [],
        totalPages: 1,
        loading: false,
        error: 'Failed to fetch movies',
    });

    render(
      <MemoryRouter>
        <MovieList />
      </MemoryRouter>);
    expect(screen.getByText('Failed to fetch movies')).toBeInTheDocument();
  });

  test('displays loading component when loading', () => {
    vi.mocked(useMovies).mockReturnValue({
        movies: [],
        totalPages: 1,
        loading: true,
        error: null,
      });

    render(<MovieList />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

});
