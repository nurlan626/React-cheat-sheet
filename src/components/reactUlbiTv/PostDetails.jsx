import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import PostService from "../../API/PostService";
import { useFetch } from "../../hooks/useFetch";
import MyButton from "../UI/button/MyButton";
import Loader from "../UI/loader/Loader";

const PostDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPost = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`);
        setPost(response.data);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [])
  return (
    <div>
      <button onClick={() => navigate("/allposts")}>
       back to All Posts
      </button>

      {post && <div>
        <div>user id: {post.userId}</div>
        <div>id: {post.id}</div>
        <div>title: {post.title}</div>
        <div>body: {post.body}</div>
        </div>}
        <nav className="nestedNav">
        <MyButton onClick={() => navigate(`post-comment/${post.id}`)}>comments</MyButton>
        <MyButton onClick={() => navigate(`post-userId/${post.id}`)}>User information</MyButton>
      </nav>
      <Outlet />
    </div>
  );
};

export default PostDetails;
