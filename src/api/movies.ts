import type { Movie } from '../types/Movie';
import { movies } from '../data/movies';

export const fetchMovies = async (delay = 1200): Promise<Movie[]> => {
    return new Promise<Movie[]>((resolve, reject) => {
        setTimeout(() => {
            resolve(movies);
        }, delay);
    });
};