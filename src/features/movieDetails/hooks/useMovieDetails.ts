import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../lib/MovieDetailsSlice';
import { RootState, AppDispatch } from '@/app/store';

const useMovieDetails = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch: AppDispatch = useDispatch();

    const { data: movie, loading, error } = useSelector(
        (state: RootState) => state.movie
    );

    useEffect(() => {
        if (id) {
            dispatch(fetchMovieDetails(id));
        }
    }, [id, dispatch]);

    return { movie, loading, error };
};

export default useMovieDetails;
