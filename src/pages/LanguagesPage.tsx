import React from 'react';
import './LanguagesPage.scss';
import { Link } from 'react-router-dom';
import { movies } from '../data/movies';

const languageFlags = [
  { id: 'Japanese', label: 'Японский', code: 'Japanese', flag: '/poster/japan-flag-xs.jpg' },
  { id: 'Korean', label: 'Корейский', code: 'Korean', flag: '/poster/south-korea-flag-xs.jpg' },
  { id: 'Chinese', label: 'Китайский', code: 'Chinese', flag: '/poster/china-flag-xs.jpg' },
  {/*{ id: 'English', label: 'Английский', code: 'English', flag: '/poster/united-states-of-america-flag-xs.jpg' },*/}
];

const LanguagePage: React.FC = () => {
  return (
    <div className="language-page">
      <h1>Выберите язык</h1>
      <div className="language-grid">
        {languageFlags.map((lang) => {
          const langMovies = movies.filter(
            (movie) => movie.Audiotrack === lang.code
          ).slice(0, 3);

          return (
            <Link to={`/language/${lang.id}`} className="language-card" key={lang.id}>
              <div className="flag-wrapper">
                <img src={lang.flag} alt={lang.label} className="flag" />
                <div className="preview-posters">
                  {langMovies.map((movie) => (
                    <img key={movie.id} src={movie.poster} alt={movie.title} />
                  ))}
                </div>
              </div>
              <span className="label">{lang.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LanguagePage;

