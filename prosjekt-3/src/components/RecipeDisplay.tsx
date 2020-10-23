import React from 'react'

interface IRecipeDisplay {
    name: string, 
    ingredients: Array<String>, 
    servings: number
}



const RecipeDisplay: React.FC<IRecipeDisplay> = ({
    name, 
    ingredients, 
    servings
}) => {

    return (
        <div>
            <p>Name: {name}</p>
            <p>Ingredients: {ingredients}</p>
            <p>Number of servings: {servings}</p>
        </div>
    )
}

export default RecipeDisplay

