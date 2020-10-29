import SearchBar from "./SearchBar";
import React from "react";
import RecipeDisplay from "./RecipeDisplay";
import SortBar from "./SortBar";

export default function RecipeContainer() {
  return (
    <div>
      <SortBar />
      <SearchBar />
      <RecipeDisplay />
    </div>
  );
}
