import "../styles/Navbar.css";

function Navbar({
  user,
  onLogin,
  onRegister,
  onLogout,
  onHome,
  onMenu,
  onSavedRecipes,
  onAdmin,
}) {
  return (
    <nav className="navbar">
      {/* BRAND LOGO */}
      <div className="brand-logo" onClick={onHome}>
        <div className="brand-icon">
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 24C11 24 7 19 8 14C8 8 14 5 19 7C23 1 30 3 34 7C40 3 47 7 48 12C55 11 59 16 57 22C55 26 51 28 46 28"
              fill="#FF7900"
            />
            <path
              d="M14 27H50L46 42H18L14 27Z"
              fill="#FFF3E6"
              stroke="#FF7900"
              strokeWidth="3"
            />
            <path
              d="M20 46C20 52 25 56 32 56C39 56 44 52 44 46"
              stroke="#FF7900"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M23 33H41"
              stroke="#FF7900"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M26 38H38"
              stroke="#FF7900"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h2 className="brand-name">
          Food <span>Recipe</span>
          <small>APP</small>
        </h2>
      </div>

      {/* NAVIGATION LINKS */}
      <div className="nav-links">
        <button className="nav-btn" onClick={onHome}>
          Home
        </button>

        <button className="nav-btn" onClick={onMenu}>
          Recipes
        </button>

        <button className="nav-btn saved-btn" onClick={onSavedRecipes}>
          <span>❤️</span> Saved Recipes
        </button>

        <a className="nav-btn about-btn" href="#about">
          About
        </a>

        <button className="admin-btn" onClick={onAdmin}>
          🛡️ Admin
        </button>
      </div>

      {/* AUTHENTICATION BUTTONS */}
      <div className="navbar-buttons">
        {user ? (
          <>
            <span className="welcome-user">Hi, {user} 👋</span>

            <button className="logout-btn" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="login-btn" onClick={onLogin}>
              Login
            </button>

            <button className="register-btn" onClick={onRegister}>
              Register
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;