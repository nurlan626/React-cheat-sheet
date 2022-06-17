import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navigation">
      <Link to="/" className="Link">
        Home
      </Link>
      <Link to="about" className="Link">
        About
      </Link>
    </nav>
  );
};

export default Navbar;
