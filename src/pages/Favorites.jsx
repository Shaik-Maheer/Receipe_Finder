
import React, { useState, useEffect } from 'react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  if (favorites.length === 0) return <p className="text-center mt-6">No favorites yet.</p>;

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Your Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((recipe) => (
          <div key={recipe.idMeal} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={recipe.strMealThumb || 'https://via.placeholder.com/150'}
              alt={recipe.strMeal}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{recipe.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
