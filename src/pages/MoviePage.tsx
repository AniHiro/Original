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
        // Выходим из полноэкранного — останавливаем видео и скрываем плеер
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
      if (videoRef.current && videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen().catch((err) => {
          console.warn('Не удалось включить полноэкранный режим', err);
        });
      }
    }, 100);
  };

  return (
    <div className="movie-page">
      <img src={movie.poster} alt={movie.title} className="poster" />
      <div className="info">
        <h1>{movie.title}</h1>
        <p>Год выпуска: {movie.year}</p>
        <p>Уровень: {movie.level}</p>

        <button onClick={handleWatchClick}>Смотреть</button>

        <button onClick={handleToggleFavorite}>
          {isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
        </button>
      </div>

      {showPlayer && (
        <div className="video-player">
          <video ref={videoRef} controls autoPlay>
            <source src={movie.video} type="video/mp4" />
            {movie.subtitles?.en && (
              <track
                label='English'
                kind="subtitles"
                srcLang="en"
                src={movie.subtitles.en}
                default
              />
            )}
            {movie.subtitles?.en && (
              <track
                label='Русский'
                kind="subtitles"
                srcLang="ru"
                src={movie.subtitles.ru}
                default
              />
            )}
            {movie.subtitles?.en && (
              <track
                label='Двойные'
                kind="subtitles"
                srcLang="ru-en"
                src={movie.subtitles.dual}
                default
              />
            )}
            Ваш браузер не поддерживает видео.
          </video>
        </div>
      )}
    </div>
  );
};

export default MoviePage;
