import React from 'react'

interface IRecipeDetail {
    name: string,
    ingredients: Array<String>,
    servings: number
}

const RecipeDetail: React.FC<IRecipeDetail> = ({
    name,
    ingredients,
    servings
}) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Ingredients: {ingredients}</p>
            <p>Number of servings: {servings}</p>
            <p>.....</p>
        </div>
    )
}

export default RecipeDetail