import { Movie } from '@/shared/types';
  
export type PaginatedResponse = {
    results: Movie[];
    total_pages: number;
    page: number;
};

export interface MovieState {
    movies: Movie[];
    totalPages: number;
    loading: boolean;
    error: string | null;
}

export interface FetchMoviesParams {
    page: number;
    query: string;
};