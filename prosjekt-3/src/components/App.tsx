import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../styles/App.css";
import { Provider } from "react-redux";

import RecipeContainer from "./RecipeContainer";
import store from "../store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
              Recipe's
            </Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/allrecipes" className="nav-link">
                    All recipes
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <RecipeContainer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
