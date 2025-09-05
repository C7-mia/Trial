import React, { useState, useEffect } from "react";
import {
  isFavorite,
  addFavorite,
  removeFavorite,
} from "../utils/favorites.jsx";

export default function MovieCard({ movie, onClick }) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(movie.id));
  }, [movie.id]);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    if (favorite) {
      removeFavorite(movie.id);
      setFavorite(false);
    } else {
      addFavorite(movie);
      setFavorite(true);
    }
  };

  return (
    <div
      onClick={() => onClick(movie.id)}
      className="cursor-pointer shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative"
    >
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-80 object-cover"
        />
      ) : (
        <div className="w-full h-80 flex items-center justify-center bg-gray-700 text-white">
          No Image
        </div>
      )}

      {/* Favorite button */}
      <button
        onClick={toggleFavorite}
        className={`absolute top-2 right-2 p-2 rounded-full text-xl ${
          favorite ? "bg-red-600 text-white" : "bg-white text-gray-700"
        }`}
      >
        {favorite ? "❤️" : "🤍"}
      </button>

      <div className="p-4">
        <h2 className="text-lg font-bold">{movie.title}</h2>
        <p className="text-gray-500 text-sm">
          {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
        </p>
      </div>
    </div>
  );
                }
