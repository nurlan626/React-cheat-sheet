import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navigation">
      <NavLink to="/" className="Link">
        Home
      </NavLink>
      <NavLink to="about" className="Link">
        About
      </NavLink>
      <NavLink to="allPosts" className="Link">
        All Posts
      </NavLink>

    </nav>
  );
};

export default Navbar;
