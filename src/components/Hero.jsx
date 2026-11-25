import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">🍴 MADE WITH LOVE</span>

        <h1>
          Discover Your
          <br />
          <span>Favorite Recipes</span>
        </h1>

        <p>
          Explore delicious recipes, discover new flavors,
          and bring happiness to your kitchen every day.
        </p>

        <div className="hero-buttons">
          <button
            className="hero-explore-btn"
            onClick={() =>
              document.getElementById("recipes")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Explore Recipes →
          </button>

          <div className="hero-mini-text">
            <span>❤️</span> Cook something delicious today
          </div>
        </div>

        <div className="hero-features">
          <span>🥗 Fresh Ideas</span>
          <span>🍝 Easy Cooking</span>
          <span>🍰 Happy Eating</span>
        </div>
      </div>

      <div className="hero-image-area">
        <div className="hero-image-frame">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85"
            alt="Delicious food served on a table"
          />

          <div className="hero-image-badge">
            <span>✨</span>
            <div>
              <strong>Made for food lovers</strong>
              <small>Discover. Cook. Enjoy.</small>
            </div>
          </div>
        </div>

        <div className="hero-floating-card">
          <span>🍕</span>
          <div>
            <strong>Explore new tastes</strong>
            <small>Recipes for every craving</small>
          </div>
        </div>

        <div className="hero-decoration">🍊</div>
      </div>
    </section>
  );
}

export default Hero;