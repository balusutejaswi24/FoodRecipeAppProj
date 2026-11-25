
import { useState, useEffect } from "react";
import recipes from "../data/recipes";
import RecipeCard from "./RecipeCard";
import "../styles/RecipeSection.css";

function RecipeSection({ onViewRecipe, onAddRecipe, onCollections }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [userRecipes, setUserRecipes] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("userRecipes") || "[]");
    setUserRecipes(stored);
  }, []);

  const allRecipes = [...recipes, ...userRecipes];

  const categories = [
    "All",
    "South Indian",
    "North Indian",
    "Chinese",
    "Veg",
    "Non-Veg",
    "Breakfast",
    "Lunch",
    "Snacks",
    "Dinner",
    "Starters",
    "Soups",
    "Drinks",
    "Ice Creams",
    "Desserts",
    "Special Recipes"
  ];

  const filteredRecipes = allRecipes.filter((recipe) => {
    const term = search.toLowerCase().trim();

    const matchesSearch =
      recipe.name?.toLowerCase().includes(term) ||
      recipe.cuisine?.toLowerCase().includes(term) ||
      (recipe.ingredients || []).some((ingredient) =>
        ingredient.toLowerCase().includes(term)
      );

    const matchesCategory =
      category === "All" ||
      recipe.category === category ||
      recipe.cuisine === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="recipe-section" id="recipes">
      <h2>Our Recipes</h2>

      <p className="recipe-description">
        Explore delicious recipes from different cuisines.
      </p>

      <div className="recipe-extra-actions">
        <button onClick={onAddRecipe}>➕ Submit Recipe</button>
        <button onClick={onCollections}>📁 My Collections</button>
      </div>

      <input
        type="text"
        placeholder="Search by recipe, cuisine, or ingredient..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="recipe-search"
      />

      <div className="category-buttons">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "category-btn active" : "category-btn"}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="recipe-grid">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onViewRecipe={onViewRecipe}
            />
          ))
        ) : (
          <p className="no-recipes">
            No recipes found. Try another search!
          </p>
        )}
      </div>
    </section>
  );
}

export default RecipeSection;
