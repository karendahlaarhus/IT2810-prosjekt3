import { Box, Button, Chip, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { connect, ConnectedProps, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import initialState from "../store/reducers/searchReducer";
import Popup from "./Popup";
import Display from "./Display";

const mapState = (state: typeof initialState) => ({
  text: state.name,
  ascending: state.name,
  sortBy: state.name,
});

<<<<<<< HEAD
/* interface IRecipeDisplay {
  name: string;
  ingredients: Array<String>;
  servings: number;
  instructions: Array<String>;
  preptime: number;
  tags: Array<String>;
} */
=======
interface IRecipeDisplay {
  name?: string;
  ingredients?: Array<String>;
  servings?: number;
  instructions?: Array<String>;
  tags?: Array<String>;
}
>>>>>>> dev

const mapDispatch = {
  sendQuery: () => ({ type: "SEND_QUERY" }),
  ascName: () => ({ type: "ASC_NAME" }),
  descName: () => ({ type: "DESC_NAME" }),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  text: string;
  sortBy: string;
  //ascending: boolean; //Hva skrives her?
};

const RecipeDisplay = (props: Props) => {
  //const RecipeDisplay: React.FC<IRecipeDisplay> = ({
  //class RecipeDisplay extends React.Component<any, IRecipeDisplay> ({
  //   name,
  //   ingredients,
  //   servings,
  //   instructions,
  //   tags,
  // }) => {
  //const [openPopup, setOpenPopup] = useState(false);
  //const [value, setValue] = React.useState<number | null>(3); //rating value
  const [error, setError] = useState(false);
  const [recipes, setRecipes] = useState<any[]>([]);
  //const [searchWord, setSearchWord] = useState<string[]>([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [value, setValue] = React.useState<number | null>(3); //rating value

  // Functionality for searching among the recipe titles
  const searchText = useSelector((state: RootState) => state.recipes.text);

  //const recipes: Recipe[] = useSelector((state: RecipiesState) => state.recipes);

  // Functionality for sorting the recipes alphabetically
  const sortInfo = useSelector((state: RootState) => state.recipes.sortBy);
  const ascending = useSelector((state: RootState) => state.recipes.ascending);

  useEffect(() => {
    async function fetchData() {
      console.log(searchText);
      const response = await fetch(
        `http://localhost:4000/recipe?name=${searchText}&sortBy=${sortInfo}&sortOrder=${ascending}`
      );
      const data = await response.json().catch((error) => setError(error));
      //console.log("Data: ", data)
      setRecipes(data);
    }
    fetchData();
  }, [searchText, sortInfo, ascending]);

  console.log("An error occured: ", { error });

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
