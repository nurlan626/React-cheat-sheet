import React from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div>
        <button onClick={() => navigate("/allposts")}>
        Navigating Programmatically go to All Posts
      </button>
      <span>Post id {id}</span>

      <nav class="nestedNav">
        <Link to="post-comment">comments </Link>
        <Link to="post-userId">user</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default PostDetails;
