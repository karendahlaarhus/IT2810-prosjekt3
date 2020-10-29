import React, { useEffect, useState } from "react";
import { connect, ConnectedProps, useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import initialState from "../store/reducers/searchReducer";
import Display from "./Display";
import Pagination from '@material-ui/lab/Pagination';

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
  updateFilter: () => ({type: "UPDATE_TYPE"})
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  text: string;
};


const RecipeDisplay = (props: Props) => {
  const [error, setError] = useState(false);
  const [recipes, setRecipes] = useState<any[]>([]);
  const [page, setPage] = React.useState(1);

  const handleChange = (event: any, value: React.SetStateAction<number>) => {
    setPage(value);
  };

  const searchText = useSelector((state: RootState) => state.recipes.text);
  const filters = useSelector((state: RootState) => state.recipes.filterChoice);

  useEffect(() => {
    async function fetchData() {
      console.log(searchText, filters);
      const response = await fetch(
        `http://localhost:4000/recipe?page=${page}name=${searchText}&tags=${filters}`
      );
      const data = await response.json().catch((err) => setError(err));
      setRecipes(data);
      
    }
    fetchData();
  }, [page, filters, searchText]);

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
        <Pagination count={10} page={page} onChange={handleChange}/>
      </div>
    </div>
  );
};

export default connector(RecipeDisplay);

