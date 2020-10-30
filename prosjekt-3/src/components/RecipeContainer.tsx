import React from 'react'
import SortBar from "./SortBar";
import SearchBar from './SearchBar'
import FilterBar from './FilterButtons'
import RecipeDisplay from './RecipeDisplay'
import { Typography } from "@material-ui/core";



export default function RecipeContainer() {
  return (
    <div>
      
      <br></br>
      <div style={{zIndex: 1, padding: "2vw 8vw 8vw 8vw"}}>
        <Typography variant="h2" align="center" style={{ fontFamily: "Futura", color:'#35281e' }}>
          bon appétit
        </Typography>
        <br></br>
        <Typography variant="subtitle1" align="center" style={{ fontFamily: "Futura", color:'#35281e' }}>
          What do you want to eat today? Search among hundreds of delicious
          recipes.
        </Typography>
        <br></br>
        
        <div className='choices'>
          <div className='sortDiv'> 
              <SortBar />
          </div>
          <div className='filterDiv'>
              <FilterBar/>
          </div>
        <SearchBar />
        </div>
        <div className='recipeDisplay'>
        <RecipeDisplay  />
        </div>
      </div>
      
      
    </div>
  );
}
