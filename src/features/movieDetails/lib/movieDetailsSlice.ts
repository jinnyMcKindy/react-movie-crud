import { createSlice, createAsyncThunk, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { API_KEY, API_URL } from '@/shared/apiConstants';
import { MovieState } from '../types';
import { Movie } from '@/shared/types';

const initialState: MovieState = {
  data: null,
  loading: false,
  error: null,
};

const FETCH_MOVIE_DETAILS = 'movie/fetchMovieDetails';

export const fetchMovieDetails = createAsyncThunk<Movie, string, { rejectValue: string }>(
  FETCH_MOVIE_DETAILS,
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return (await response.json()) as Movie;
    } catch (error: unknown) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<MovieState>) => {
    builder
      .addCase(fetchMovieDetails.pending, (state: MovieState) => {
        state.loading = true;
      })
      .addCase(fetchMovieDetails.fulfilled, (state: MovieState, action: PayloadAction<Movie>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state: MovieState, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = action.payload ?? 'Failed to fetch movie details';
      });
  },
});

export default movieSlice.reducer;
