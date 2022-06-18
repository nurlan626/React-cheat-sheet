import logo from "./logo.svg";
import "./App.css";
// import { useState } from "react";
// import Users from "./components/Users";
// import Features from "./components/Features"
// import ClassCounter from "./components/class/ClassCounter";
import ReactUlbiTv from "./components/reactUlbiTv/ReactUlbiTv";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/UI/navbar/Navbar";

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
            <Route path="/" element={<ReactUlbiTv />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<ReactUlbiTv />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
