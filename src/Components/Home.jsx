import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">🎬 Welcome to Movie App</h1>
      <p className="text-gray-600 mb-6">
        Browse movies, add your favorites, and learn more about them.
      </p>
      <Link
        to="/movies"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Explore Movies
      </Link>
    </div>
  );
        }
