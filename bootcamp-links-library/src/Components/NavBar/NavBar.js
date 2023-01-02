import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link className="home-link" to="/">
        Home
      </Link>
      <Link className="post-link" to="/postLinks">
        Add a Link
      </Link>
      <Link className="about-link" to="/about">
        About
      </Link>
    </div>
  );
};

export default NavBar;
