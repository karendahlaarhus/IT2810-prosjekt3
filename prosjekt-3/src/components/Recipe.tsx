import React, { useState, useEffect } from 'react';
import RecipeDisplay from './RecipeDisplay'

interface RecipeProps {}



const Recipe: React.FC<RecipeProps>= () => {
    // const [hasError, setErrors] = useState(false);
    // const [recipes, setRecipes] = useState<any[]>([])
    
    // useEffect(() => {
    //   getRecipes();
    // }, []);
  
    // const getRecipes = async () => {
    //   const response = await fetch(`http://localhost:4000/recipe/`);
    //   const data = await response.json().catch(err => setErrors(err));
    //   //console.log("Data: ", data)
    //   setRecipes(data);
    // };
 
   
    return( 
      <div>
        {/* {recipes.map((recipes) => (
            <div className="recipe">
            <RecipeDisplay
            name={JSON.stringify(recipes.name)}
            ingredients={recipes.ingredients}
            servings={recipes.servings}
            /> 
          </div>

  
        ))} */}
        </div>
        )};
export default Recipe;