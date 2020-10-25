import React from "react";
import { useState } from "react";
import Popup from "./Popup";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import { Rating } from "@material-ui/lab";

interface IRecipeDisplay {
  name: string;
  ingredients: Array<String>;
  servings: number;
  instructions: Array<String>;
  preptime: number;
  tags: Array<String>;
}

const RecipeDisplay: React.FC<IRecipeDisplay> = ({
  name,
  ingredients,
  servings,
  instructions,
  preptime,
  tags,
}) => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div>
      {/* buttons for recipes, click on button and popup with recipe displays */}
      <br />
      <Button
        className="newButton"
        onClick={() => setOpenPopup(true)}
        variant="outlined"
        size="large"
        style={{
          textTransform: "lowercase",
          textAlign: "left",
        }}
        fullWidth
      >
        {name.split('"').join("")}
      </Button>
      {/* Popup */}
      <Popup
        title={name.split('"').join("")}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <Rating name="simple-controlled" />

        <p>
          <b>Number of servings:</b> {servings}
        </p>
        <p>
          <b>Preparation time: </b> {preptime}
        </p>

        <p>
          <b>Tags: </b>
          {tags
            .toString()
            .split(",")
            .map((item) => (
              <>
                {" "}
                <Chip label={item} />{" "}
              </>
            ))}
        </p>
        <br></br>
        {/* flexbox container used to display ingredients and instructions side by side */}
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {/* Ingredients: */}
          <div
            style={{
              flexWrap: "nowrap",
              paddingRight: "2%",
              width: "40%",
              borderRight: "1px solid black",
            }}
          >
            <p>
              <b>Ingredients:</b> <br />
              {ingredients
                .toString()
                .split(",")
                .map((item) => (
                  <>
                    {" "}
                    {item} <br />{" "}
                  </>
                ))}
            </p>
          </div>
          {/* Instuctions:  */}
          <div style={{ paddingLeft: "5%" }}>
            <p>
              <b>Instructions:</b>
              <br />{" "}
              {instructions
                .toString()
                .split(".")
                .map((el) => (
                  <>
                    {" "}
                    {el} <br />
                    <br />{" "}
                  </>
                ))}
            </p>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default RecipeDisplay;
