import React, { useState } from "react";
import "./login.css";
import LOGO from "../../assets/amazon-logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle sign-in
  const signIn = (e) => {
    e.preventDefault();

    // Sign in the user with the provided email and password
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // Navigate to the home page if sign-in is successful
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  // Function to handle user registration
  const register = (e) => {
    e.preventDefault();

    // Create a new user account with the provided email and password
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          // Navigate to the home page if registration is successful
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        {/* Amazon Logo */}
        <img src={LOGO} className="login__logo" alt="Amazon Logo" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          {/* Email input */}
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password input */}
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Sign In button */}
          <button
            className="login__sign-in-button"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        {/* Agreement text */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        {/* Register button */}
        <button className="login__register-button" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
