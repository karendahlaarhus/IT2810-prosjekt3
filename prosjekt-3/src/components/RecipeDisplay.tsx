import React, { useEffect, useState } from "react";
import { connect, ConnectedProps, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import { initialState } from "../store/reducers/searchReducer";
import Display from "./Display";
import Pagination from "@material-ui/lab/Pagination";

const mapState = (state: typeof initialState) => ({
  text: state.text,
  ascending: state.ascending, 
  sortBy: state.sortBy,
  filterChoice: state.filterChoice,
});

const mapDispatch = {
  sendQuery: () => ({ type: "SEND_QUERY" }),
  ascName: () => ({ type: "ASC_NAME" }),
  descName: () => ({ type: "DESC_NAME" }),
  ascServings: () => ({ type: "ASC_SERVINGs" }),
  descServings: () => ({ type: "DESC_SERVINGS" }),
  updateFilter: () => ({ type: "UPDATE_TYPE" }),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const RecipeDisplay = (props: PropsFromRedux) => {
  const [error, setError] = useState(false);
  const [recipes, setRecipes] = useState<any[]>([]);
  const [page, setPage] = React.useState(1);

  //Handles change in pagenumber
  const handleChange = (event: any, value: React.SetStateAction<number>) => {
    setPage(value);
  };

  // Functionality for searching among the recipe titles
  const searchText = useSelector((state: RootState) => state.recipes.text);

  // Functionality for filtering among the recipes tags
  const filters = useSelector((state: RootState) => state.recipes.filterChoice);

  // Functionality for sorting the recipes by alphabet and no. of servings
  const sortInfo = useSelector((state: RootState) => state.recipes.sortBy);
  const ascending = useSelector((state: RootState) => state.recipes.ascending);

  function sortOrderToString(sortOrder: boolean) {
    let order = "";
    if (sortOrder) {
      order = "asc";
    } else {
      order = "desc";
    }
    return order;
  }

  useEffect(() => {
    async function fetchData() {
      let sortOrder = sortOrderToString(ascending);
      console.log(searchText);
      const response = await fetch(
        `http://localhost:4000/recipe?page=${page}&name=${searchText}&tags=${filters}&sortBy=${sortInfo}&sortOrder=${sortOrder}`
      );
      const data = await response.json().catch((error) => setError(error));
      setRecipes(data);
    }
    fetchData();
  }, [page, searchText, filters, sortInfo, ascending]);

  return (
    <div className="recipes">
      {recipes.map((recipes) => (
        <div className="recipe">
          <Display
            _id={recipes.id}
            name={JSON.stringify(recipes.name)}
            ingredients={recipes.ingredients}
            servings={recipes.servings}
            instructions={recipes.instructions}
            preptime={recipes.preptime}
            rating={recipes.rating}
            tags={recipes.tags}
          />
        </div>
      ))}
      <div>
        <Pagination count={5} page={page} onChange={handleChange} />
      </div>
    </div>
  );
};

export default connector(RecipeDisplay);
