import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { movies } from '../data/movies';
import './GenreMoviesPage.scss'

const GenreMoviesPage: React.FC = () => {
  const params = useParams();
  const genre = params.genre || '';
  const decodedGenre = decodeURIComponent(genre);

  const filteredMovies = movies.filter((movie) =>
    movie.genres.some((g) => g.toLowerCase() === decodedGenre.toLowerCase())
  );

  return (
    <div className="genre-movies-page">
      <h1>Фильмы жанра: {decodedGenre}</h1>
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

export default GenreMoviesPage;

