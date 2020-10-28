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

export const SEND_QUERY = "SEND_QUERY";
export const ASC_NAME = "ASC_NAME";
export const DESC_NAME = "DESC_NAME";

interface sendQuery {
  type: typeof SEND_QUERY;
  payload: string;
}

interface ascName {
  type: typeof ASC_NAME;
  payload: string;
}

interface descName {
  type: typeof DESC_NAME;
  payload: string;
}

export type FrontendActionTypes = sendQuery | ascName | descName;
