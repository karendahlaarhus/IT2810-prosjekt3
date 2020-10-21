import React, { useState, useEffect } from 'react';

const Recipe = () => {
    const [hasError, setErrors] = useState(false);
    const [recipes, setRecipes] = useState({});
  
    async function fetchData() {
      const res = await fetch("https://localhost:4000/recipe");
      res
        .json()
        .then(res => setRecipes(res))
        .catch(err => setErrors(err));
    }
  
    useEffect(() => {
      fetchData();
    });
  
    return (
      <div>
        <span>{JSON.stringify(recipes)}</span>
        <hr />
        <span>Has error: {JSON.stringify(hasError)}</span>
      </div>
    );
  };
  export default Recipe;