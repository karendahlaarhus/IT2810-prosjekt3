import SearchBar from './SearchBar'
import FilterBar from './FilterBar'
import React from 'react'
import RecipeDisplay from './RecipeDisplay'

export default function RecipeContainer() {
  
  return (
    <div>

      <SearchBar />
      <FilterBar/>
      <RecipeDisplay />
      
    </div>
  )
}
