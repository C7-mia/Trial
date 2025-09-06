import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md font-medium ${
      isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Title */}
          <div className="text-2xl font-bold text-blue-600">Movie App</div>

          {/* Links */}
          <div className="flex space-x-4">
            <NavLink to="/" className={linkClasses} end>
              Home
            </NavLink>
            <NavLink to="/movies" className={linkClasses}>
              Movies
            </NavLink>
            <NavLink to="/favorites" className={linkClasses}>
              Favorites
            </NavLink>
            <NavLink to="/about" className={linkClasses}>
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
      }
