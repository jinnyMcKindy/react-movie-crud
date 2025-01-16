import { configureStore } from '@reduxjs/toolkit';
import movieListReducer from '@/features/movieList/lib/movieSlice';
import movieDetailsReducer from '@/features/movieDetails/lib/movieDetailsSlice';
import searchReducer from '@/features/searchInput/lib/searchSlice';

export const store = configureStore({
  reducer: {
    movies: movieListReducer,
    movie: movieDetailsReducer,
    search: searchReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
