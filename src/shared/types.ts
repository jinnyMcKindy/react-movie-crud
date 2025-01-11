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
  
export const API_KEY = import.meta.env.VITE_API_KEY;
export const API_URL = import.meta.env.VITE_API_URL;