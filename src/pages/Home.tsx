import React from 'react';
import MovieCard from '../components/MovieCard';
import { movies } from '../data/movies';
import './Home.scss';

interface HomeProps {
  searchQuery: string;
}

const Home: React.FC<HomeProps> = ({ searchQuery }) => {
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="home">
      <h1>🎬 Список фильмов</h1>
      <div className="movie-list">
        {filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
};

export default Home;



