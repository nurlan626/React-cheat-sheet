import React, { useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

const PostForm = (props) => {
  const [post, setPost] = useState({ title: "", body: "" });
  const addNewPost = (e) => {
    e.preventDefault();
    props.createPost(post);
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
