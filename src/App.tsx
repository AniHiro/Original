import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';
import FavoritesPage from './pages/FavoritesPage';
import Footer from './components/Footer'

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Header onSearch={setSearchQuery} />
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
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/favorite" element={<FavoritesPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
