import logo from "./logo.svg";
import "./App.css";
// import { useState } from "react";
// import Users from "./components/Users";
// import Features from "./components/Features"
// import ClassCounter from "./components/class/ClassCounter";
import AllPosts from "./components/reactUlbiTv/AllPosts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/reactUlbiTv/About";
import Navbar from "./components/UI/navbar/Navbar";
import SinglePost from "./components/reactUlbiTv/SinglePost";
import Home from "./components/reactUlbiTv/Home";
import PostComment from "./components/reactUlbiTv/PostComment";
import PostUserId from "./components/reactUlbiTv/PostUserId";
import PostDetails from "./components/reactUlbiTv/PostDetails";

function App() {
  // const [data, setData] = useState([
  //   { name: "Nurlan", city: "Baku", age: 29 },
  //   { name: "Alex", city: "Odessa", age: 19 },
  // ]);
  return (
    <div className="App">
      {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Users users={data} />
        <Features />
        <ClassCounter />
        </header> */}
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/allposts" element={<AllPosts />} />
            <Route path="/allposts/:id" element={<PostDetails />}>
              {/* <Route index element={<PostUserId />} /> */}
              {/* <Route path="post-comment" element={<PostComment />} /> */}
              <Route path="post-comment/:id" element={<PostComment />} />
              {/* <Route path="post-userId" element={<PostUserId />} /> */}
              <Route path="post-userId/:id" element={<PostUserId />} />

            </ Route>

            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
