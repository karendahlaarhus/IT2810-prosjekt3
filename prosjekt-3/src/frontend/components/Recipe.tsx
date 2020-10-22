import React, { useState, useEffect } from 'react';
import RecipeDisplay from './RecipeDisplay';
import axios from 'axios';

interface RecipeProps { }


const Recipe: React.FC<RecipeProps> = () => {
  const [hasError, setErrors] = useState(false);
  const [recipes, setRecipes] = useState<any[]>([])
  //const [recipes, setRecipes] = useState(null);
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch("http://localhost:4000/recipe");
    const data = await response.json().catch(err => setErrors(err));
    //console.log("Data: ", data)
    setRecipes(data);
    //console.log("Data fetched correctly");

    /*     res
          .json()
          .then(res => setRecipes(res))
          .catch(err => setErrors(err)); */
  };


  return (
    // Display data from API
    // slice(0,9) --> use to only fetch 10 first docs
    <div className="recipes">
      {recipes.map((recipes) => (


        <div className="recipe">
          <RecipeDisplay
            name={JSON.stringify(recipes.name)}
            ingredients={recipes.ingredients}
            servings={recipes.servings}
            instructions={recipes.instructions}
          />
        </div>
      ))}


    </div>

  )
};

export default Recipe;