import React, { useState } from "react";
import "../../styles/UlbiTv.css";
import PostForm from "./PostForm";
import PostList from "./PostList";

const ReactUlbiTv = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Java Script", body: "Description" },
    { id: 2, title: "Java Script 2", body: "Description" },
    { id: 3, title: "Java Script", body: "Description" },
    { id: 4, title: "Java Script", body: "Description" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, { id: Date.now(), ...newPost }]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  return (
    <div>
      <PostForm createPost={createPost} />
      {posts.length > 0 ? (
        <PostList removePost={removePost} posts={posts} />
      ) : (
        <div>Net</div>
      )}
    </div>
  );
};

export default ReactUlbiTv;
