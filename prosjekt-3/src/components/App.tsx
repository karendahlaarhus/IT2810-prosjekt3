import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import '../styles/App.css';
import Recipe from "./Recipe";

import { FormGroup, Input } from 'reactstrap';

export interface Props {
  list?: string[]
}

export interface State {
  list: string[]
}

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
              <Link to="/allrecipes" className="nav-link">All recipes</Link>
            </li>
          </ul>
        </div>
      </nav>
      
      <FormGroup>
        <Input
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="Search for recipes"
        />
      </FormGroup>
    
     
      <Recipe></Recipe> 
      </div>
    </Router>
    
      
    );
  }
}

export default App;
