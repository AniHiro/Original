import React from 'react';
import type { Movie } from '../types/Movie';
import { Link } from 'react-router-dom';
import './MovieCard.scss';

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
    </Link>
  );
};

export default MovieCard;

