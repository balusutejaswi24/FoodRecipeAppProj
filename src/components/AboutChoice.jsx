
import "../styles/Auth.css";

function AboutChoice({ onYes, onNo, onSkip }) {
  return (
    <div className="auth-container">
      <div className="auth-box">

        <h2>Welcome to Food Recipe App 🍲</h2>

        <p>
          Would you like to know more about our application?
        </p>

        <div className="preference-buttons">

          <button type="button" onClick={onYes}>
            Yes - About Us
          </button>

          <button type="button" onClick={onNo}>
            No - Home
          </button>

          <button type="button" onClick={onSkip}>
            Skip - Menu
          </button>

        </div>

      </div>
    </div>
  );
}

export default AboutChoice;
