
import { useState, useEffect } from "react";

import RecipeCard from "./RecipeCard";

import "../styles/RecipeSection.css";

function SavedRecipes({ onViewRecipe }) {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const recipes =
      JSON.parse(localStorage.getItem("savedRecipes")) || [];

    setSavedRecipes(recipes);
  }, []);

  function handleRemove(recipeId) {
    const updatedRecipes = savedRecipes.filter(
      (recipe) => recipe.id !== recipeId
    );

    localStorage.setItem(
      "savedRecipes",
      JSON.stringify(updatedRecipes)
    );

    setSavedRecipes(updatedRecipes);
  }

  return (
    <section className="recipe-section">
      <h2>🔖 Saved Recipes</h2>

      <p className="recipe-description">
        Your favorite recipes saved for later.
      </p>

      <div className="recipe-grid">
        {savedRecipes.length > 0 ? (
          savedRecipes.map((recipe) => (
            <div key={recipe.id}>
              <RecipeCard
                recipe={recipe}
                onViewRecipe={onViewRecipe}
              />

              <button
                type="button"
                onClick={() => handleRemove(recipe.id)}
              >
                Remove from Saved
              </button>
            </div>
          ))
        ) : (
          <p className="no-recipes">
            No saved recipes yet. Click Save on a recipe!
          </p>
        )}
      </div>
    </section>
  );
}

export default SavedRecipes;
