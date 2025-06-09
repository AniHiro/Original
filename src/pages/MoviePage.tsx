import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../data/movies';
import './MoviePage.scss';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { addFavorite, removeFavorite } from '../store/slices/favoritesSlice';

const MoviePage: React.FC = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);
  const [showPlayer, setShowPlayer] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const fullscreenElement = document.fullscreenElement;
      if (!fullscreenElement && showPlayer) {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
        setShowPlayer(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [showPlayer]);

  if (!movie) return <div>Фильм не найден.</div>;

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  const handleWatchClick = () => {
    setShowPlayer(true);
    setTimeout(() => {
      if (videoRef.current?.requestFullscreen) {
        videoRef.current.requestFullscreen().catch((err) => {
          console.warn('Не удалось включить полноэкранный режим', err);
        });
      }
    }, 100);
  };

  return (
    <div className="movie-page">
      {/* ВЕРХНЯЯ ЧАСТЬ: Постер и кнопки */}
      <div className="movie-hero">
        <img src={movie.poster} alt={movie.title} className="poster" />
        <div className="controls">
          <h1>{movie.title}</h1>
          <button onClick={handleWatchClick}>Смотреть</button>
          <button onClick={handleToggleFavorite}>
            {isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
          </button>
        </div>
      </div>

      {/* ПЛЕЕР */}
      {showPlayer && (
        <div className="video-player">
          <video ref={videoRef} controls autoPlay>
            <source src={movie.video} type="video/mp4" />
            {movie.subtitles?.en && (
              <track label="English" kind="subtitles" srcLang="en" src={movie.subtitles.en} default />
            )}
            {movie.subtitles?.ru && (
              <track label="Русский" kind="subtitles" srcLang="ru" src={movie.subtitles.ru} />
            )}
            {movie.subtitles?.dual && (
              <track label="Двойные" kind="subtitles" srcLang="ru-en" src={movie.subtitles.dual} />
            )}
            Ваш браузер не поддерживает видео.
          </video>
        </div>
      )}

      {/* ОПИСАНИЕ */}
      <section className="movie-description">
        <h2>Описание</h2>
        <p>{movie.description}</p>
      </section>

      {/* ИНФОРМАЦИЯ */}
      <section className="movie-info">
        <h2>Информация о фильме</h2>
        <ul>
          <li><strong>Год выпуска:</strong> {movie.year}</li>
          <li><strong>Жанры:</strong> {movie.genres.join(', ')}</li>
          <li><strong>Длительность:</strong> {movie.duration}</li>
          <li><strong>Рейтинг:</strong> {movie.rating}/10</li>
          <li><strong>Уровень:</strong> {movie.level}</li>
        </ul>
      </section>
    </div>
  );
};

export default MoviePage;
