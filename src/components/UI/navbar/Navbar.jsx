import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import "./Navbar.css";

const Navbar = () => {
  const auth = useAuth();
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
      <NavLink to="profile" className="Link">
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink to="login" className="Link">
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
