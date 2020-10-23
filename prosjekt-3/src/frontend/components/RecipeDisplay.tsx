import React from "react";
import { useState } from "react";
import Popup from "./Popup";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";

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
      {/* <button className="newButton" onClick={() => setOpenPopup(true)}>{name}</button> */}
      <Button
        className="newButton"
        onClick={() => setOpenPopup(true)}
        variant="outlined"
      >
        {name.split('"').join("")}
      </Button>

      <Popup
        title={name.split('"').join("")}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
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
        <div style={{ display: "flex", justifyContent: "space-around" }}>
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
