import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Explore from "./components/Explore";
import React, { useEffect, useState } from "react";

function App() {
  const [filter, setFilter] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Router>
      <div className="App">
        <Nav setSearchTerm={setSearchTerm}></Nav>
        <Explore
          setFilter={setFilter}
          filter={filter}
          searchTerm={searchTerm}
        ></Explore>
      </div>
    </Router>
  );
}

export default App;
