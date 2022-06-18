import React from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";

const SinglePost = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/allposts", { replace: true })}>
        Navigating Programmatically go to All Posts
      </button>
      <nav className="nestedNav">
        <Link to="post-comment">comments </Link>
        <Link to="post-userId">user</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default SinglePost;
