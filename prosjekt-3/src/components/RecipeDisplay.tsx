import { Box, Button, Chip, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { connect, ConnectedProps, useDispatch, useSelector } from "react-redux";
import { sendQuery } from "../store/actions/action";
import { RootState } from "../store/reducers";
import initialState from "../store/reducers/searchReducer";
import Popup from "./Popup";

const mapState = (state: typeof initialState) => ({
  text: state.name,
});

interface IRecipeDisplay {
  name: string;
  ingredients: Array<String>;
  servings: number;
  instructions: Array<String>;
  preptime: number;
  tags: Array<String>;
}

const mapDispatch = {
  sendQuery: () => ({ type: "SEND_QUERY" }),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  text: string;
};

const RecipeDisplay = (props: Props) => {
  const [error, setError] = useState(false);
  const [recipes, setRecipes] = useState<any[]>([]);
  const [searchWord, setSearchWord] = useState<string[]>([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [value, setValue] = React.useState<number | null>(3); //rating value

  const searchText = useSelector((state: RootState) => state.recipes.text);
  //const recipes: Recipe[] = useSelector((state: RecipiesState) => state.recipes);

  useEffect(() => {
    async function fetchData() {
      console.log(searchText);
      const response = await fetch(
        `http://localhost:4000/recipe?name=${searchText}`
      );
      const data = await response.json().catch((err) => setError(err));
      setRecipes(data);
    }
    fetchData();
  }, [searchText]);

  return (
    <div>
      {recipes.map((recipe) => (
        <>
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
            {recipe.name.split('"').join("")}
          </Button>
          {/* Popup */}

          <Popup
            title={recipe.name.split('"').join("")}
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
          >
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">Controlled</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>

            <p>
              <b>Number of servings:</b> {recipe.servings}
            </p>
            <p>
              <b>Preparation time: </b> {recipe.preptime}
            </p>

            <p>
              <b>Tags: </b>
              {recipe.tags
                .toString()
                .split(",")
                .map((item: React.ReactNode) => (
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
                  {recipe.ingredients
                    .toString()
                    .split(",")
                    .map((item: any) => (
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
                  {recipe.instructions
                    .toString()
                    .split(".")
                    .map((el: any) => (
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
          <br></br>
        </>
      ))}
    </div>
  );
};

export default connector(RecipeDisplay);
