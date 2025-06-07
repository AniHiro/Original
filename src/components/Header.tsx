import React, { useEffect, useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { FaHeart, FaSearch } from 'react-icons/fa';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const favoritesCount = useSelector((state: RootState) => state.favorites.length);
  const [animate, setAnimate] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (favoritesCount > 0) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [favoritesCount]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value); 
  };

  return (
    <header className="header">
      <Link to="/" className="logo">Original</Link>
      <nav>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/movies">Фильмы</Link></li>
          <li><Link to="/series">Сериалы</Link></li>
          <li><Link to="/cartoons">Мультфильмы</Link></li>
        </ul>
      </nav>
      <div className="search-box">
        <FaSearch />
        <input
          type="text"
          placeholder="Поиск..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <Link to="/favorite" className="favorites-link">
        <FaHeart className={`heart-icon ${animate ? 'pulse' : ''}`} />
        <span>Избранное</span>
        {favoritesCount > 0 && <span className="badge">{favoritesCount}</span>}
      </Link>
    </header>
  );
};

export default Header;





