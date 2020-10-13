import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import '../styles/App.css';
import Recipe from "./Recipe";
import RecipeList from "./RecipeList";

export interface Props {
  list?: string[]
}

export interface State {
  list: string[]
}

class App extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      list: [
        "go to the store",
        "wash the dishes",
        "Learn some code"
      ]
    }
  }
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
      <Recipe></Recipe> 
      </div>
      <div>
      <RecipeList></RecipeList>
      </div>
    </Router>
    
      
    );
  }
}

export default App;
