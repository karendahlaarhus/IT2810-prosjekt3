import React from 'react'
import { useState } from 'react'
import Popup from "./Popup"

interface IRecipeDisplay {
    name: string,
    ingredients: Array<String>,
    servings: number
    instructions: Array<String>
}



const RecipeDisplay: React.FC<IRecipeDisplay> = ({
    name,
    ingredients,
    servings,
    instructions,
}) => {
    const [openPopup, setOpenPopup] = useState(false)

    return (
        <div>
            <button className="newButton" onClick={() => setOpenPopup(true)}>{name}</button>


            <Popup
                title={name}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}>
                <p>Ingredients: {ingredients}</p>
                <p>Number of servings: {servings}</p>
                <p>Instructions: {instructions}</p>
            </Popup>
        </div >

    )
}

export default RecipeDisplay

