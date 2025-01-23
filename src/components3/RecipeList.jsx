// import RecipeCard from "./RecipeCard";

// export default function RecipeList({ recipes, onSelectRecipe }) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {recipes.map((recipe) => (
//         <RecipeCard
//           key={recipe.idMeal}
//           recipe={recipe}
//           onSelect={onSelectRecipe}
//         />
//       ))}
//     </div>
//   );
// }
import React from 'react';

const RecipeList = ({ recipes, onRecipeClick }) => {
  if (recipes.length === 0) return <p className="text-center">No recipes found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.idMeal}
          className="cursor-pointer bg-white shadow-lg rounded-lg p-4"
          onClick={() => onRecipeClick(recipe.idMeal)}
        >
          <img
            src={recipe.strMealThumb || 'https://via.placeholder.com/150'}
            alt={recipe.strMeal}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold">{recipe.strMeal}</h3>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
