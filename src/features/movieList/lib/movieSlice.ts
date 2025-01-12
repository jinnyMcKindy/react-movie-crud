import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { API_KEY, API_URL } from '../../../shared/apiConstants';
import { PaginatedResponse, MovieState, FetchMoviesParams } from '../types';

const initialState: MovieState = {
  movies: [],
  totalPages: 1,
  loading: false,
  error: null ,
};

export const fetchMovies = createAsyncThunk<PaginatedResponse, FetchMoviesParams>(
  'movies/fetchMovies',
  async (params: { page: number, query: string }) => {
    const { page, query } = params;
    const endpoint = query
      ? `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
      : `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;

    const response = await fetch(endpoint);
    const data: PaginatedResponse = await response.json();
    return data;
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state: MovieState) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state: MovieState, action: PayloadAction<PaginatedResponse>) => {
        state.loading = false;
        state.movies = action.payload.results;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(fetchMovies.rejected, (state: MovieState, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch movies';
      });
  },
});

export default movieSlice.reducer;
