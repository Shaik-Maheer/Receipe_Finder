import React, { useState } from 'react';
import RecipeSearchBar from '../components3/RecipeSearchBar';
import RecipeList from '../components3/RecipeList';
import RecipeDetails from '../components3/RecipeDetails';
import { fetchRecipes, fetchRecipeDetails } from '../services/recipeService';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = async (query) => {
    const results = await fetchRecipes(query);
    setRecipes(results);
    setSelectedRecipe(null); // Reset the selected recipe when a new search is made
  };

  const handleRecipeClick = async (id) => {
    const details = await fetchRecipeDetails(id);
    setSelectedRecipe(details);
  };

  const handleAddToFavorites = (recipe) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some((fav) => fav.idMeal === recipe.idMeal)) {
      favorites.push(recipe);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert(`${recipe.strMeal} added to favorites!`);
    } else {
      alert(`${recipe.strMeal} is already in favorites.`);
    }
  };

  return (
    <div className="p-6">
      <RecipeSearchBar onSearch={handleSearch} />
      {selectedRecipe ? (
        <RecipeDetails recipe={selectedRecipe} onAddToFavorites={handleAddToFavorites} />
      ) : (
        <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
      )}
    </div>
  );
};

export default Recipes;
