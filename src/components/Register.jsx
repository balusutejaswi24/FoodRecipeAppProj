
import "../styles/Auth.css";

function Register({ onRegister, onClose, onSwitchLogin }) {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    const name = form.elements.namedItem("name").value.trim();
    const email = form.elements.namedItem("email").value.trim().toLowerCase();
    const password = form.elements.namedItem("password").value;
    const confirmPassword = form.elements.namedItem("confirmPassword").value;

    // 1. Name validation
    if (name.length < 3) {
      alert("Name must contain at least 3 characters.");
      return;
    }

    // 2. Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // 3. Password validation
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordPattern.test(password)) {
      alert(
        "Password must contain at least 8 characters, uppercase, lowercase, number and special character."
      );
      return;
    }

    // 4. Confirm password validation
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // 5. Check existing registered users
    const existingUsers = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]"
    );

    const emailExists = existingUsers.some(
      (user) => user.email === email
    );

    if (emailExists) {
      alert("This email is already registered. Please login.");
      return;
    }

    // 6. Create new user
    const newUser = {
      name,
      email,
      password,
    };

    existingUsers.push(newUser);

    localStorage.setItem(
      "registeredUsers",
      JSON.stringify(existingUsers)
    );

    // Keep compatibility with the previous registration storage
    localStorage.setItem(
      "registeredUser",
      JSON.stringify(newUser)
    );

    alert("Registration successful! Please login.");

    form.reset();

    onRegister();
  }

  return (
    <div className="auth-container">
      <div className="auth-box">

        <button
          type="button"
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <h2>Create Account 🍲</h2>

        <p>Join our Food Recipe App</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            minLength="3"
            maxLength="50"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Create password"
            minLength="8"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            minLength="8"
            required
          />

          <button type="submit">
            Register
          </button>

        </form>

        <p>
          Already have an account?

          <button
            type="button"
            className="switch-btn"
            onClick={onSwitchLogin}
          >
            Login
          </button>
        </p>

      </div>
    </div>
  );
}

export default Register;
