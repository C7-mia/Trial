// Get favorites from localStorage
export function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

// Save favorites to localStorage
export function saveFavorites(favorites) {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// Check if a movie is already a favorite
export function isFavorite(movieId) {
  const favorites = getFavorites();
  return favorites.some((fav) => fav.id === movieId);
}

// Add a movie to favorites
export function addFavorite(movie) {
  const favorites = getFavorites();
  const updated = [...favorites, movie];
  saveFavorites(updated);
}

// Remove a movie from favorites
export function removeFavorite(movieId) {
  const favorites = getFavorites();
  const updated = favorites.filter((fav) => fav.id !== movieId);
  saveFavorites(updated);
}
