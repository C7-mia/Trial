import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import Favorites from "./pages/Favorites.jsx";
import About from "./pages/About.jsx";
import MovieDetails from "./components/MovieDetails.jsx";

// Components
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <div className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
