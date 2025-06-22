import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';
import FavoritesPage from './pages/FavoritesPage';
import Footer from './components/Footer'
import Films from './pages/films'
import GenresPage from './pages/GenresPage';
import GenreMoviesPage from './pages/GenreMoviesPage';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
  <div className="app-wrapper">
    <Header onSearch={setSearchQuery} />
    <main className="main-content">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Home searchQuery={searchQuery} />
            </>
          }
        />
        <Route path="/genre" element={<GenresPage />} />
        <Route path="/genre/:genre" element={<GenreMoviesPage />} />
        <Route path="/films" element={<Films />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/favorite" element={<FavoritesPage />} />
      </Routes>
    </main>
    <Footer />
  </div>
  );
};

export default App;
