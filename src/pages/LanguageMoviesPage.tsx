import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { movies } from '../data/movies';
import './LanguageMoviesPage.scss';

const LanguageMoviesPage: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const filteredMovies = movies.filter((movie) => movie.Audiotrack.toLowerCase() === (lang || '').toLowerCase());

  return (
    <div className="language-movies-page">
      <h1>Фильмы на языке: {lang}</h1>
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LanguageMoviesPage;
