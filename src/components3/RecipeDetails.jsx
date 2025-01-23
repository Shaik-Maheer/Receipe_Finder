// export default function RecipeCard({ recipe, onSelect }) {
//   return (
//     <div
//       className="border rounded-lg shadow-md p-4 cursor-pointer hover:bg-gray-100"
//       onClick={() => onSelect(recipe.idMeal)}
//     >
//       <img
//         src={recipe.strMealThumb}
//         alt={recipe.strMeal}
//         className="w-full h-40 object-cover rounded-lg mb-3"
//       />
//       <h3 className="text-lg font-semibold text-center">{recipe.strMeal}</h3>
//     </div>
//   );
// }
import React from 'react';

const RecipeDetails = ({ recipe, onAddToFavorites }) => {
  if (!recipe) return <p className="text-center">Loading recipe details...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <img
        src={recipe.strMealThumb || 'https://via.placeholder.com/150'}
        alt={recipe.strMeal}
        className="w-full h-60 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>
      <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
      <ul className="list-disc ml-6">
        {Object.keys(recipe)
          .filter((key) => key.startsWith('strIngredient') && recipe[key])
          .map((key) => (
            <li key={key}>{recipe[key]}</li>
          ))}
      </ul>
      <h2 className="text-xl font-semibold mt-4 mb-2">Instructions:</h2>
      <p>{recipe.strInstructions || 'No instructions available.'}</p>
      <button
        onClick={() => onAddToFavorites(recipe)}
        className="bg-green-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-green-700"
      >
        Add to Favorites
      </button>
    </div>
  );
};

export default RecipeDetails;
