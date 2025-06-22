import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="overlay">
        <h1>Смотри лучшие фильмы в оригинале с субтитрами</h1>
        <p>Без рекламы. Высокое качество. Удобный просмотр.</p>
        <Link to="/films">
        <button>Смотреть сейчас</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
