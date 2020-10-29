import React, { useEffect, useState } from "react";
import { connect, ConnectedProps, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import initialState from "../store/reducers/searchReducer";
import Display from "./Display";

const mapState = (state: typeof initialState) => ({
  text: state.name,
  filterChoice: state.length
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
  updateFilter: () => ({type: "UPDATE_TYPE"})
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  text: string;
  filterChoice: [];
};

const RecipeDisplay = (props: Props) => {
  const [error, setError] = useState(false);
  const [recipes, setRecipes] = useState<any[]>([]);
/*   const [searchWord, setSearchWord] = useState<string[]>([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [value, setValue] = React.useState<number | null>(3); //rating value */

  const searchText = useSelector((state: RootState) => state.recipes.text);
  const filters = useSelector((state: RootState) => state.recipes.filterChoice);

  useEffect(() => {
    async function fetchData() {
      console.log(searchText, filters);
      const response = await fetch(
        `http://localhost:4000/recipe?name=${searchText}&tags=${filters}`
      );
      const data = await response.json().catch((err) => setError(err));
      setRecipes(data);
    }
    fetchData();
  }, [searchText, filters]);

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
