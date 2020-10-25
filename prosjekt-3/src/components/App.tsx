import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Searchbar from './SearchBar';
import { BrowserRouter as Router, Link } from "react-router-dom";
import '../styles/App.css';
import Recipe from "./Recipe";
import {RootState} from '../store/rootReducer/reducer'
import { fetchRecipe } from '../store/fetchRecipe';

export interface Props {
  list?: string[]
}

export interface State {
  list: string[]
}

function App() {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.search);

  useEffect(() => {
    dispatch(
      fetchRecipe(0, search)
    );
    // eslint-disable-next-line
  }, [search]);


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
      
      <div className='searchbarContainer'>
        <Searchbar />
      </div>

     
      <Recipe></Recipe> 
      </div>
    </Router>
    
      
    );
  }

export default App;
