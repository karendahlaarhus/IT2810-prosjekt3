import axios from 'axios';

// Actions
const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS';
const FETCH_RECIPE_FAILURE = 'FETCH_RECIPE_FAILURE';


// Reducer
export default function recipeReducer(state = [], action: { type: any; payload: any[]; }) {
    switch (action.type) {
      case FETCH_RECIPE_SUCCESS:
        const loadMore = action.payload.pop();
        if (loadMore) {
          return [...state, ...action.payload];
        }
        return [...action.payload];
      case FETCH_RECIPE_FAILURE:
        console.log(
          'Recipe loading error, check if backend is connected properly'
        );
        return state;
      default:
        return state;
    }
  }
  
  // Action creators
  export function fetchRecipeSuccess(response: { data: any[]; }) {
    return {
      type: FETCH_RECIPE_SUCCESS,
      payload: response.data
    };
  }
  
  export function fetchRecipeFailure() {
    return {
      type: FETCH_RECIPE_FAILURE
    };
  }
  
  /**
   *
   * @param skip er antall resultater i søket som skal hoppes over
   * @param search er en streng som spesifiserer hva navn til resulterende pokemon skal inneholde
   * @param {*} asc er true for stigende rekkefølge, false for synkende
   * @param {*} loadMore er true hvis fetchPokemon kalles fra <Loadingbutton/>, false ellers
   */
  export function fetchRecipe(
    skip = 0,
    search = '',
    asc = true,
  ) {
    const searchString = search ? `&name=${search}` : '';
    const orderString = asc ? '' : 'DESC';
    return (dispatch: (arg0: any) => any) =>
      axios
        .get(
          `http://localhost:4000/recipe/?skip=${skip +
            searchString +
            orderString}`
        )
        .then((response: any) => dispatch(fetchRecipeSuccess(response)))
        .catch((err: any) => dispatch(fetchRecipeFailure()));
  };
  