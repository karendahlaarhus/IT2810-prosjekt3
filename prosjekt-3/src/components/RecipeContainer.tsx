import SearchBar from './SearchBar'
import FilterBar from './FilterBar'
import React from 'react'
import RecipeDisplay from './RecipeDisplay'
import { Typography } from "@material-ui/core";
import header from "./foods.jpg";
import SortBar from "./SortBar";


export default function RecipeContainer() {
  return (
    <div style={{ padding: "0vw 8vw 0vw 8vw" }}>
      <div style={{ width: "100%", overflow: "hidden", height: "15vw" }}>
        <img
          src={header}
          style={{
            //width: "100%",
            height: "530px",
            backgroundSize: "cover",
            overflow: "hidden",
            zoom: 1,
          }}
        ></img>
      </div>
      <br></br>
      <Typography variant="h3" align="center" style={{ fontFamily: "Futura" }}>
        bon appétit
      </Typography>
      <br></br>
      <Typography variant="subtitle1" align="center">
        What do you want to eat today? Search among hundreds of delicious
        recipes.
      </Typography>
      <br></br>
      <SearchBar />
      <SortBar />
      <FilterBar/>
      <RecipeDisplay />
      
    </div>
  );
}
