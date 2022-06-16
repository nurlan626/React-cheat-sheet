import React, { useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const PostForm = ({ createPost }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    if (post.title && post.body) {
      createPost(post);
    }
    setPost({ title: "", body: "" });
  };
  return (
    <form action="">
      <MyInput
        type="text"
        placeholder="название поста"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        value={post.body}
        type="text"
        placeholder="описание поста"
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <MyButton type="submit" onClick={addNewPost}>
        Add
      </MyButton>
    </form>
  );
};
export default PostForm;
