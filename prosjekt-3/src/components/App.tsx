import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './styles/App.css';
import { Recipe } from "Recipe.tsx";
import { RecipeList } from "RecipeList.tsx";

class App extends Component {
  render() {
    return (
    <Router>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Recipe's</Link>
        <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">All recipes</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <h2>First connection</h2>
          <p></p>
        </div>
        
      </div>
    </Router>
      
    );
  }
}

export default App;