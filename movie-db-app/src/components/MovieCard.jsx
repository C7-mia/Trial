import React from 'react';
import { Link } from 'react-router-dom';

const PLACEHOLDER_IMAGE = "https://via.placeholder.com/300x450?text=No+Image";

function MovieCard({ movie }) {
    const poster = movie.Poster === "N/A" ? PLACEHOLDER_IMAGE : movie.Poster;

    return (
        <Link to={`/movie/${movie.imdbID}`} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-400/20 transform hover:-translate-y-1 transition-all duration-300">
            <img src={poster} alt={`${movie.Title} Poster`} className="w-full h-auto object-cover" style={{aspectRatio: '2/3'}} />
            <div className="p-4">
                <h3 className="text-lg font-bold truncate">{movie.Title}</h3>
                <p className="text-gray-400">{movie.Year}</p>
            </div>
        </Link>
    );
}

export default MovieCard;
