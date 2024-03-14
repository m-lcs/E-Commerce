// App.js
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./home";
//import Cart from "./components/Cart";
//import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;
