import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Nav from "./components/Nav"
import Explore from './components/Explore';
import React, { useState } from 'react'

function App() {
  const [filter, setFilter] = useState("");
  return (
    <Router>
    <div className="App">
      <Nav></Nav>
      <Explore setFilter={setFilter} filter={filter} ></Explore>
  
    </div>

    </Router>
  );
}

export default App;
