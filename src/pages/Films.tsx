import React, { useState } from 'react';
import { movies } from '../data/movies';
import { Link } from 'react-router-dom';
import './films.scss';

const MoviesPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'movie' | 'cartoon' | 'anime'>('all');

  const filteredMovies = movies.filter((movie) => {
    if (filter === 'all') return true;
    return movie.type === filter;
  });

  return (
    <div className="movies-page">
      <h1>Список Фильмов и Мультфильмов</h1>

      <div className="filters">
        <button onClick={() => setFilter('all')}>Все</button>
        <button onClick={() => setFilter('movie')}>Фильмы</button>
        <button onClick={() => setFilter('cartoon')}>Мультфильмы</button>
        <button onClick={() => setFilter('anime')}>Аниме</button>
      </div>

      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`} className="movie-card" key={movie.id}>
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
