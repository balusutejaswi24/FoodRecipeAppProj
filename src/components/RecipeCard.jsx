
import { useState, useEffect } from "react";
import RecipeImage from "./RecipeImage";
import "../styles/RecipeCard.css";

function RecipeCard({ recipe, onViewRecipe }) {
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes") || "[]");
    const likedRecipes = JSON.parse(localStorage.getItem("likedRecipes") || "[]");

    setSaved(savedRecipes.some((item) => item.id === recipe.id));
    setLiked(likedRecipes.some((item) => item.id === recipe.id));
  }, [recipe.id]);

  function handleSave() {
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes") || "[]");

    const updated = saved
      ? savedRecipes.filter((item) => item.id !== recipe.id)
      : [...savedRecipes.filter((item) => item.id !== recipe.id), recipe];

    localStorage.setItem("savedRecipes", JSON.stringify(updated));
    setSaved(!saved);
  }

  function handleLike() {
    const likedRecipes = JSON.parse(localStorage.getItem("likedRecipes") || "[]");

    const updated = liked
      ? likedRecipes.filter((item) => item.id !== recipe.id)
      : [...likedRecipes.filter((item) => item.id !== recipe.id), recipe];

    localStorage.setItem("likedRecipes", JSON.stringify(updated));
    setLiked(!liked);
  }

  async function handleShare() {
    const shareText = `${recipe.name}
Cuisine: ${recipe.cuisine}
Cooking Time: ${recipe.time}
Ingredients: ${(recipe.ingredients || []).join(", ")}
Instructions: ${(recipe.instructions || []).join("\n")}`;

    if (navigator.share) {
      try {
        await navigator.share({ title: recipe.name, text: shareText });
      } catch (error) {
        if (error.name !== "AbortError") alert("Unable to share recipe.");
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert("Recipe copied!");
      } catch {
        alert(shareText);
      }
    }
  }

  return (
    <div className="recipe-card">
      <RecipeImage name={recipe.name} />

      <div className="recipe-card-content">
        <span className="recipe-category">{recipe.category}</span>
        <h3>{recipe.name}</h3>

        <div className="recipe-info">
          <span>{recipe.cuisine}</span>
          <span>⏱ {recipe.time}</span>
        </div>

        <div className="recipe-actions">
          <button
            type="button"
            className={`like-btn ${liked ? "active" : ""}`}
            onClick={handleLike}
          >
            {liked ? "❤️ Liked" : "🤍 Like"}
          </button>

          <button
            type="button"
            className={`save-btn ${saved ? "active" : ""}`}
            onClick={handleSave}
          >
            {saved ? "🔖 Saved" : "📌 Save"}
          </button>
        </div>

        <div className="recipe-card-extra-actions">
          <button type="button" onClick={() => onViewRecipe(recipe)}>
            View Recipe
          </button>
          <button type="button" onClick={handleShare}>
            🔗 Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
