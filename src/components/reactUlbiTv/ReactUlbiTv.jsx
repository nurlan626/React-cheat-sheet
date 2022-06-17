import React, { useEffect, useState } from "react";
import "../../styles/UlbiTv.css";
import MyModal from "../UI/modal/MyModal";
import PostForm from "./PostForm";
import PostList from "./PostList";
import PostsFilter from "./PostsFilter";
import MyButton from "../UI/button/MyButton";
import { usePosts } from "../../hooks/usePosts";
import PostService from "../../API/PostService";
import { useFetch } from "../../hooks/useFetch";

const ReactUlbiTv = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "1", body: "4" },
    { id: 2, title: "  2", body: "3" },
    { id: 3, title: "3 ", body: "2" },
    { id: 4, title: "4", body: "1" },
  ]);

  const [filter, setFilter] = useState({ searchQuery: "", selectetSort: "" });
  const [modal, setModal] = useState(false);
  const [fetchPosts, loading, error] = useFetch(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  const sortedAndSearchedPosts = usePosts(
    posts,
    filter.selectetSort,
    filter.searchQuery
  );
  const createPost = (newPost) => {
    setPosts([...posts, { id: Date.now(), ...newPost }]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="UlbiTv">
      <MyButton onClick={() => setModal(true)}>Add new post</MyButton>

      <MyModal modal={modal} setModal={(e) => setModal()}>
        <PostForm createPost={createPost} />
      </MyModal>

      <PostsFilter filter={filter} setFilter={setFilter} />
      {error ? <div>{error}</div> :  <PostList
        removePost={removePost}
        posts={sortedAndSearchedPosts}
        loading={loading}
      />}
     
    </div>
  );
};

export default ReactUlbiTv;
