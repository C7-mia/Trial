import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams(); // get movie ID from URL
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY;
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error("Error fetching movie details:", err);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <p className="text-center mt-10">Loading movie details...</p>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
        <button
          onClick={() => navigate(-1)} // go back to previous page
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✖
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-64 rounded-lg"
            />
          )}
          <div>
            <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
            <p className="text-gray-600 mb-2">
              Release Date: {movie.release_date || "N/A"}
            </p>
            <p className="text-gray-600 mb-2">
              Rating: {movie.vote_average || "N/A"}
            </p>
            <p className="text-gray-800">{movie.overview || "No description available."}</p>
          </div>
        </div>
      </div>
    </div>
  );
    }
