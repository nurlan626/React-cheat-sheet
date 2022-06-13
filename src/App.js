import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Users from "./components/Users";
import Features from "./components/Features"
import ClassCounter from "./components/class/ClassCounter";
import ReactUlbiTv from "./components/reactUlbiTv/ReactUlbiTv";

function App() {
  const [data, setData] = useState([
    { name: "Nurlan", city: "Baku", age: 29 },
    { name: "Alex", city: "Odessa", age: 19 },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Users users={data} />
        <Features />
        <ClassCounter /> */}
        <ReactUlbiTv />
      </header>
    </div>
  );
}

export default App;
