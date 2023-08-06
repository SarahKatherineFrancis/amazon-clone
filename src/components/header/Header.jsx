// Header.js
import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
import LOGO from "../../assets/amazon-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./header.css";

const Header = () => {
  const [{ basket, user }] = useStateValue();

  // Function to handle user authentication (sign in / sign out)
  const handleAuthentication = () => {
    if (user) {
      // If user is signed in, sign them out on click
      auth.signOut();
    }
  };

  return (
    <div className="header">
      {/* Amazon Logo linked to home page */}
      <Link to="/">
        <img src={LOGO} alt="Amazon Logo" className="header__logo" />
      </Link>

      {/* Search bar */}
      <div className="header__search">
        <input type="text" className="header__search-input" />
        <SearchIcon className="header__search-icon" />
      </div>

      {/* Navigation menu */}
      <div className="header__nav">
        {/* "Sign in" or "Sign out" button */}
        <Link to={!user ? "/login" : "#"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__option-line1">
              {user ? `Hello, ${user.email}` : "Hello, Guest"}
            </span>
            <span className="header__option-line2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        {/* Returns and Orders option */}
        <Link to="/orders">
          <div className="header__option">
            <span className="header__option-line1">Returns</span>
            <span className="header__option-line2">& Orders</span>
          </div>
        </Link>

        {/* Basket icon and item count */}
        <Link to="/checkout">
          <div className="header__option-basket">
            <ShoppingCartIcon />
            <span className="header__option-basket-count">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
