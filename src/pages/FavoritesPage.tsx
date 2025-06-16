import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import { removeFavorite } from '../store/slices/favoritesSlice';
import { Link } from 'react-router-dom';
import './FavoritesPage.scss';

const FavoritesPage: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch();

  if (favorites.length === 0) {
    return <h2 className="favorites-empty">Вы еще не добавили фильмы в избранное.</h2>;
  }

  return (
    <div className="favorites-page">
      <h1>Избранные фильмы</h1>
      <div className="favorites-grid">
        {favorites.map((movie) => (
          <div key={movie.id} className="favorite-card">
            <Link to={`/movie/${movie.id}`}>
              <img src={movie.poster} alt={movie.title} />
              <h3>{movie.title}</h3>
            </Link>
            <button onClick={() => dispatch(removeFavorite(movie.id))}>
              Убрать из избранного
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
