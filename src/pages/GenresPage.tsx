import React from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../data/movies';
import './GenresPage.scss';

const GenresPage: React.FC = () => {
  // Собираем уникальные жанры
  const genres = Array.from(
    new Set(movies.flatMap((movie) => movie.genres))
  );

  return (
    <div className="genres-page">
      <h1>Жанры</h1>
      <div className="genre-list">
        {genres.map((genre) => (
          <Link key={genre} to={`/genre/${encodeURIComponent(genre)}`} className="genre-item">
            {genre}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenresPage;
