import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/postLinks">Add a Link</Link>
    </div>
  );
};

export default NavBar;
