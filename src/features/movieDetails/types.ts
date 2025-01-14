import { Movie } from '@/shared/types';

export interface MovieState {
    data: Movie | null;
    loading: boolean;
    error: string | null;
}