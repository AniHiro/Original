import React, { useEffect, useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import { FaHeart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const favoritesCount = useSelector((state: RootState) => state.favorites.length);
  const [animate, setAnimate] = useState(false);
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false)

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

      <div className='burger' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/films">Фильмы</Link></li>
          <li><Link to="/series">Сериалы</Link></li>
          <li><Link to="/genre">Жанры</Link></li>
          <li><Link to="/language">Языки</Link></li>
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





