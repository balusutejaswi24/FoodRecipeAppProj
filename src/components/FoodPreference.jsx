
import "../styles/Auth.css";

function FoodPreference({ onPreference }) {
  return (
    <div className="auth-container">
      <div className="auth-box">

        <h2>🍽️ Choose Your Food Preference</h2>

        <p>
          Select your favorite food type to explore recipes.
        </p>

        <button
          type="button"
          onClick={() => onPreference("Veg")}
        >
          🥦 Vegetarian
        </button>

        <button
          type="button"
          onClick={() => onPreference("Non-Veg")}
        >
          🍗 Non-Vegetarian
        </button>

        <button
          type="button"
          onClick={() => onPreference("All")}
        >
          🍽️ All Recipes
        </button>

      </div>
    </div>
  );
}

export default FoodPreference;
