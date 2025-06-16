import React from 'react';
import './Hero.scss';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="overlay">
        <h1>Смотри лучшие фильмы и аниме</h1>
        <p>Без рекламы. Высокое качество. Удобный просмотр.</p>
        <button>Смотреть сейчас</button>
      </div>
    </div>
  );
};

export default Hero;
