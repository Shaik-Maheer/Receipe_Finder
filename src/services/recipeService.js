
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchRecipes = async (query) => {
  const response = await fetch(`${BASE_URL}/search.php?s=${query}`);
  const data = await response.json();
  return data.meals || [];
};

export const fetchRecipeDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  const data = await response.json();
  return data.meals ? data.meals[0] : null;
};
