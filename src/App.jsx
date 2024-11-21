import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Nav from "./components/Nav"

function App() {
  return (
    <Router>
    <div className="App">
      <Nav></Nav>
  
    </div>

    </Router>
  );
}

export default App;
