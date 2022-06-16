import React, { useState } from "react";
import "../../styles/UlbiTv.css";
import MyModal from "../UI/modal/MyModal";
import PostForm from "./PostForm";
import PostList from "./PostList";
import PostsFilter from "./PostsFilter";
import MyButton from "../UI/button/MyButton"; 
import { useSortedAndSearchedPosts } from "../../hooks/usePosts";

const ReactUlbiTv = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "aa Script", body: "2Description" },
    { id: 2, title: "bb Script 2", body: "3Description" },
    { id: 3, title: "bb Script", body: "4Description" },
    { id: 4, title: "cc Script", body: "1Description" },
  ]);

  const [filter, setFilter] = useState({ searchQuery: "", selectetSort: "" });
  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = useSortedAndSearchedPosts(filter.selectetSort, posts, filter.searchQuery );
  const createPost = (newPost) => {
    setPosts([...posts, { id: Date.now(), ...newPost }]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div>
      <MyButton onClick={() => setModal(true)}>Add new post</MyButton>
      
      <MyModal modal={modal} setModal={(e) => setModal()}>
        <PostForm createPost={createPost} />
      </MyModal>

      <PostsFilter filter={filter} setFilter={setFilter} />
      <PostList removePost={removePost} posts={sortedAndSearchedPosts} />
    </div>
  );
};

export default ReactUlbiTv;
