
import { useState, useEffect } from "react";
import "../styles/RecipeCollections.css";

function RecipeCollections({ recipes, onBack }) {
  const [name, setName] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    setCollections(JSON.parse(localStorage.getItem("recipeCollections") || "[]"));
  }, []);

  function toggleRecipe(id) {
    setSelectedIds((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  }

  function handleCreate(e) {
    e.preventDefault();

    if (!name.trim()) {
      alert("Enter a collection name.");
      return;
    }

    if (selectedIds.length === 0) {
      alert("Select at least one recipe.");
      return;
    }

    const newCollection = {
      id: Date.now(),
      name: name.trim(),
      recipes: recipes.filter((recipe) => selectedIds.includes(recipe.id))
    };

    const updated = [...collections, newCollection];

    localStorage.setItem("recipeCollections", JSON.stringify(updated));
    setCollections(updated);
    setName("");
    setSelectedIds([]);
    alert("Collection created successfully!");
  }

  function handleDelete(id) {
    const updated = collections.filter((collection) => collection.id !== id);
    localStorage.setItem("recipeCollections", JSON.stringify(updated));
    setCollections(updated);
  }

  return (
    <section className="collections-page">
      <h2>📁 My Recipe Collections</h2>
      <p>Create your own recipe groups.</p>

      <form className="collection-form" onSubmit={handleCreate}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Collection name (e.g. Weekend Favorites)"
        />

        <h3>Select recipes</h3>

        <div className="collection-recipe-list">
          {recipes.map((recipe) => (
            <label key={recipe.id} className="collection-recipe-option">
              <input
                type="checkbox"
                checked={selectedIds.includes(recipe.id)}
                onChange={() => toggleRecipe(recipe.id)}
              />
              {recipe.name}
            </label>
          ))}
        </div>

        <button type="submit">Create Collection</button>
      </form>

      <h3>Your Collections</h3>

      {collections.length === 0 ? (
        <p>No collections created yet.</p>
      ) : (
        <div className="collections-grid">
          {collections.map((collection) => (
            <div className="collection-card" key={collection.id}>
              <h3>{collection.name}</h3>
              <p>{collection.recipes.length} recipes</p>

              <ul>
                {collection.recipes.map((recipe) => (
                  <li key={recipe.id}>{recipe.name}</li>
                ))}
              </ul>

              <button onClick={() => handleDelete(collection.id)}>
                Delete Collection
              </button>
            </div>
          ))}
        </div>
      )}

      <button className="collection-back" onClick={onBack}>
        ← Back to Recipes
      </button>
    </section>
  );
}

export default RecipeCollections;
