// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import movieListReducer from '@/features/movieList/lib/movieSlice';
import movieDetailsReducer from '@/features/movieDetails/lib/MovieDetailsSlice';

export const store = configureStore({
  reducer: {
    movies: movieListReducer,
    movie: movieDetailsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
