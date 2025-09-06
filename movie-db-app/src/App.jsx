import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <header className="bg-gray-800 shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <Link to="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
            MovieDB
          </Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
        </Routes>
      </main>

      <footer className="text-center py-4 mt-8 bg-gray-800 text-gray-500 text-sm">
        <p>Powered by OMDB API. Best of Entertainment .</p>
      </footer>
    </div>
  );
}

export default App;
