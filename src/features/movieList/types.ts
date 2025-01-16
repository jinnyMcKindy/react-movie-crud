export type Movie = {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
};
  
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