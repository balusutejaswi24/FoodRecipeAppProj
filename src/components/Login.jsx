
import { useState } from "react";

import "../styles/Auth.css";

function Login({ onLogin, onClose, onSwitchRegister }) {

  // CAPTCHA GENERATOR
  function generateCaptcha() {
    const characters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let code = "";

    for (let i = 0; i < 6; i++) {
      code += characters[
        Math.floor(Math.random() * characters.length)
      ];
    }

    return code;
  }

  const [captcha, setCaptcha] = useState(generateCaptcha());

  const [captchaInput, setCaptchaInput] = useState("");

  function handleRefreshCaptcha() {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    const email = form.elements.namedItem("email").value
      .trim()
      .toLowerCase();

    const password = form.elements.namedItem("password").value;

    // EMAIL VALIDATION
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // PASSWORD VALIDATION
    if (!password) {
      alert("Please enter your password.");
      return;
    }

    // CAPTCHA VALIDATION
    if (
      captchaInput.trim().toUpperCase() !== captcha
    ) {
      alert("Incorrect CAPTCHA! Please try again.");

      setCaptcha(generateCaptcha());

      setCaptchaInput("");

      return;
    }

    // GET REGISTERED USERS
    const registeredUsers = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]"
    );

    // FIND MATCHING USER
    const savedUser = registeredUsers.find(
      (user) =>
        user.email.toLowerCase() === email &&
        user.password === password
    );

    // OLD USER COMPATIBILITY
    const oldUser = JSON.parse(
      localStorage.getItem("registeredUser") || "null"
    );

    const matchingOldUser =
      oldUser &&
      oldUser.email.toLowerCase() === email &&
      oldUser.password === password;

    // LOGIN SUCCESS
    if (savedUser) {
      alert(
        "Login successful! Welcome " +
        savedUser.name +
        " 🍲"
      );

      onLogin(savedUser.email);

    } else if (matchingOldUser) {
      alert(
        "Login successful! Welcome " +
        oldUser.name +
        " 🍲"
      );

      onLogin(oldUser.email);

    } else {
      alert("Invalid email or password!");
    }
  }

  return (
    <div className="auth-container">

      <div className="auth-box">

        {/* CLOSE BUTTON */}

        <button
          type="button"
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <h2>Welcome Back 🍲</h2>

        <p>Login to your Food Recipe App</p>

        <form onSubmit={handleSubmit}>

          {/* EMAIL */}

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          {/* PASSWORD */}

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />

          {/* CAPTCHA */}

          <div className="captcha-container">

            <label>Security Verification</label>

            <div className="captcha-code">

              <span>{captcha}</span>

              <button
                type="button"
                onClick={handleRefreshCaptcha}
                title="Refresh CAPTCHA"
              >
                🔄
              </button>

            </div>

            <input
              type="text"
              name="captcha"
              placeholder="Enter CAPTCHA code"
              value={captchaInput}
              onChange={(e) =>
                setCaptchaInput(e.target.value)
              }
              autoComplete="off"
              required
            />

          </div>

          {/* LOGIN BUTTON */}

          <button type="submit">
            Login
          </button>

        </form>

        {/* REGISTER */}

        <p>
          Don't have an account?

          <button
            type="button"
            className="switch-btn"
            onClick={onSwitchRegister}
          >
            Register
          </button>
        </p>

      </div>

    </div>
  );
}

export default Login;
