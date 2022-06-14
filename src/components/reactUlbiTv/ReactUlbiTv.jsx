import React, { useState } from "react";
import "../../styles/UlbiTv.css";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";
import PostForm from "./PostForm";
import PostList from "./PostList";

const ReactUlbiTv = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "3Java Script", body: "2Description" },
    { id: 2, title: "2Java Script 2", body: "3Description" },
    { id: 3, title: "3Java Script", body: "4Description" },
    { id: 4, title: "4ava Script", body: "1Description" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");



  const createPost = (newPost) => {
    setPosts([...posts, { id: Date.now(), ...newPost }]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const sortPosts = (sort) => {
    setSelectedSort(sort);
    console.log(selectedSort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };
  return (
    <div>
      <PostForm createPost={createPost} />
      <MyInput  
      value={searchQuery}
      onChange={e => setSearchQuery(e.targer.value)}
      placeholder="Поиск" />
      <MySelect
        onChange={sortPosts}
        value={selectedSort}
        options={[
          { name: "по названию", value: "title" },
          { name: "по описанию", value: "body" },
        ]}
        defaultValue="сортировка по"
      />
      {posts.length > 0 ? (
        <PostList removePost={removePost} posts={posts} />
      ) : (
        <div>Постов нет</div>
      )}
    </div>
  );
};

export default ReactUlbiTv;
