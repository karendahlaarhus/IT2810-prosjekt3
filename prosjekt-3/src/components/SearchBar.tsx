import React from 'react';
import {sendQuery} from '../store/actions/action'
import { connect, useDispatch } from 'react-redux';


export const SearchBar = () => {
  
  const dispatch = useDispatch();
  // const onChange = (e: React.FormEvent<HTMLInputElement>) =>{
  //   dispatch(searchRecipe(e.currentTarget.value))
  // }

    return(
      <div>
        <div>
          <h1>Recipe search</h1>
          <form id="searchBar" ></form>
          <input 
            type="text" 
            name="SearchText" 
            placeholder="Search for recipes"
            onChange={(e) => dispatch(sendQuery(e.currentTarget.value))}/>
          {/* <button type="submit"> Search</button> */}
        </div>
      </div>
    )
  };

const mapStateToProps = (state: { recipes: { text: any; }; }) => ({
  text : state.recipes.text
})

export default connect(mapStateToProps)(SearchBar)
