import React, { useEffect } from "react";
import { useState } from "react";
import Popup from "./Popup";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import { Rating } from "@material-ui/lab";
import { Box, Typography } from "@material-ui/core";

const axios = require("axios").default;

interface IRecipeDisplay {
  _id: number;
  name: string;
  ingredients: Array<String>;
  servings: number;
  instructions: Array<String>;
  preptime: number;
  rating: Array<number>;
  tags: Array<String>;
}

const RecipeDisplay: React.FC<IRecipeDisplay> = ({
  _id,
  name,
  ingredients,
  servings,
  instructions,
  preptime,
  tags,
}) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [rating, setRating] = useState<any>(); //rating value


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:4000/recipe/:id");
      console.log(result);
      setRating(result.rating);
    };
    fetchData();
  }, []);


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
        {name}
      </Button>

      {/* Popup */}
      <Popup
        title={name.split('"').join("")}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Rating</Typography>
          <Rating
            name="simple-controlled"
            value={rating}
            defaultValue={preptime}
            onChange={(event, newRating) => {
              setRating(newRating);
              const obj = {
                _id: _id,
                rating: newRating,
                preptime: newRating, //finnes i databasen
              };

              console.log("skrives fra frontend: ", obj); //preptime oppdateres, men endres ikke i databasen
              axios
                .put("http://localhost:4000/recipe/update/:id", obj)
                .then((res: { obj: any }) => console.log(res.obj));
            }}
          />
        </Box>

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
                    {''}
                    {item} <br />{''}
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
