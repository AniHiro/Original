import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../data/movies';
import './MoviePage.scss';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store'
import { addFavorite, removeFavorite } from '../store/slices/favoritesSlice'


const MoviePage: React.FC = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);

  if (!movie) return <div>Фильм не найден.</div>;
  
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <div className="movie-page">
      <img src={movie.poster} alt={movie.title} className="poster" />
      <div className="info">
        <h1>{movie.title}</h1>
        <p>Год выпуска: {movie.year}</p>
        <p>Уровень: {movie.level}</p>
        <button>Смотреть</button>
        <button onClick={handleToggleFavorite}>
          {isFavorite ? 'убрать из избранного' : 'Добавить в избранное'}
        </button>  
      </div>
    </div>
  );
};

export default MoviePage;
