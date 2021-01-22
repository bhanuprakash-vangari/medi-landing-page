import React from "react";
import "../components/TopNav.css";
import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <li>
          <img src={Logo} alt="logo" />
        </li>
        <ul>
          <li>
            <a href="#/">Home</a>
          </li>
          <li>
            <a href="#/">About</a>
          </li>
          <li>
            <a href="#/">Blog</a>
          </li>
          <li>
            <a href="#/">Contact</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <a href="#/">Sign In</a>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
