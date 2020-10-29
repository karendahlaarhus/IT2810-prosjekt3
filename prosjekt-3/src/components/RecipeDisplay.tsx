import { Box, Button, Chip, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { connect, ConnectedProps, useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import initialState from "../store/reducers/searchReducer";
import Display from "./Display";

const mapState = (state: typeof initialState) => ({
  text: state.name,
});

interface IRecipeDisplay {
  name?: string;
  ingredients?: Array<String>;
  servings?: number;
  instructions?: Array<String>;
  tags?: Array<String>;
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
    <div className="recipes">
      {recipes.map((recipes) => (
        <div className="recipe">
          <Display
            name={JSON.stringify(recipes.name)}
            ingredients={recipes.ingredients}
            servings={recipes.servings}
            instructions={recipes.instructions}
            preptime={recipes.preptime}
            tags={recipes.tags}
          />
        </div>
      ))}
    </div>
  );
};

export default connector(RecipeDisplay);
