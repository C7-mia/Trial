import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}&plot=full`);
        if (response.data.Response === "True") {
          setMovie(response.data);
        } else {
          setError(response.data.Error);
        }
      } catch (err) {
        setError('Failed to fetch movie details.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p className="text-center text-red-500 mt-8">{error}</p>;
  if (!movie) return null;

  return (
    <div className="container mx-auto px-6 py-8">
       <Link to="/" className="text-yellow-400 hover:text-yellow-300 mb-8 inline-block">&larr; Back to Search</Link>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img src={movie.Poster} alt={movie.Title} className="rounded-lg shadow-lg w-full" />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-2">{movie.Title} <span className="text-gray-400 font-light">({movie.Year})</span></h1>
          <div className="flex items-center gap-4 mb-4 text-gray-400">
            <span>{movie.Rated}</span>
            <span>&bull;</span>
            <span>{movie.Runtime}</span>
            <span>&bull;</span>
            <span>{movie.Genre}</span>
          </div>
          <div className="flex items-center mb-6">
            <span className="text-2xl text-yellow-400 font-bold mr-2">IMDb Rating: {movie.imdbRating}</span>
            <span className="text-gray-400">({movie.imdbVotes} votes)</span>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Plot</h2>
          <p className="mb-6 text-gray-300">{movie.Plot}</p>
          
          <div>
            <p><strong className="font-semibold">Director:</strong> {movie.Director}</p>
            <p><strong className="font-semibold">Writer:</strong> {movie.Writer}</p>
            <p><strong className="font-semibold">Actors:</strong> {movie.Actors}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailPage;
