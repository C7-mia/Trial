import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import Loader from '../components/Loader';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [noResults, setNoResults] = useState(false);

  const fetchMovies = async (searchTerm) => {
    setLoading(true);
    setError('');
    setNoResults(false);
    setMovies([]);

    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
      if (response.data.Response === "True") {
        setMovies(response.data.Search);
      } else {
        setNoResults(true);
        setError(response.data.Error);
      }
    } catch (err) {
      setError('Failed to fetch movies. Please check your network connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-yellow-400">Search For A Movie</h1>
      <SearchBar onSearch={fetchMovies} />

      {loading && <Loader />}
      {error && !noResults && <p className="text-center text-red-500 mt-8">{error}</p>}
      {noResults && <p className="text-center text-gray-400 mt-8">No movies found matching your search. Please try another title.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mt-8">
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;

