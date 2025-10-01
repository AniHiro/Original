import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import './films.scss';
import { fetchMovies } from '../api/movies';
import type { Movie } from '../types/Movie';


const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filter, setFilter] = useState<'all' | 'movie' | 'cartoon' | 'anime'>('all');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchMovies();
        if (mounted) await setMovies(data);
      } catch (err: any) {
        if (mounted) setError(err.message || 'Ошибка загрузки');
      } finally {
        if (mounted) setLoading(false)
      }
    };

    load();

    return () => { mounted = false; };
  }, []);

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

      {loading && <div className='loading'>Загрузка фильмов...</div>}
      {error && <div className='error'>Ошибка: {error}</div>}

     {!loading && !error && (
      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`} className="movie-card" key={movie.id}>
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </Link>
        ))}
      </div>
    )}

    {!loading && !error && filteredMovies.length === 0 && (
      <p>Фильмы не найдены</p>
    )}
    </div>
  );
};

export default MoviesPage;



