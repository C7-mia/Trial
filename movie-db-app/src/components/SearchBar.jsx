import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="e.g. The Matrix"
        className="w-full max-w-lg px-4 py-2 rounded-l-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-r-md hover:bg-yellow-300 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
