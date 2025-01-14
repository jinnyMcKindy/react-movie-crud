import { createSlice, createAsyncThunk, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { API_KEY, API_URL } from '@/shared/apiConstants';
import { PaginatedResponse, MovieState, FetchMoviesParams } from '../types';

const initialState: MovieState = {
  movies: [],
  totalPages: 1,
  loading: false,
  error: null ,
};

const FETCH_MOVIES = "movies/fetchMovies";

const trimAndEscapeParam = (param: string): string => {
  const trimmedQuery = param.trim();
  return encodeURIComponent(trimmedQuery);
};

export const fetchMovies = createAsyncThunk<PaginatedResponse, FetchMoviesParams>(
  FETCH_MOVIES,
  async (params: FetchMoviesParams) => {
    const { page, query } = params;
    const escapedQuery = trimAndEscapeParam(query);
    const escapedPage = trimAndEscapeParam(page.toString());
    const endpoint = escapedQuery
      ? `${API_URL}/search/movie?api_key=${API_KEY}&query=${escapedQuery}&page=${escapedPage}`
      : `${API_URL}/movie/popular?api_key=${API_KEY}&page=${escapedPage}`;

    const response = await fetch(endpoint);
    const data: PaginatedResponse = await response.json();
    return data;
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<MovieState>) => {
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
