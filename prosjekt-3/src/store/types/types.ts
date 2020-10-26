/* export interface Recipe{
    id: number,
    name: string,
    ingredients:string[],
    servings: number,
    tags: string[]
}

export interface RecipiesState{
    recipes: Recipe[],
    text: string
}

export interface initialState{
     text: string
} */
//export const FETCH_RECIPES = 'FETCH_RECIPES';
// export const UPDATE_SEARCH = 'UPDATE_SEARCH';



export const SEND_QUERY = 'SEND_QUERY';

interface sendQuery {
    type: typeof SEND_QUERY
    payload: string
};

/* interface fetchRecipe {
    type: typeof FETCH_RECIPES
    payload: string
};

interface updateSearch{
    type: typeof UPDATE_SEARCH
    payload: SearchState
} */

export type FrontendActionTypes = sendQuery;