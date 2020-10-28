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
export const UPDATE_TYPE = 'UPDATE_TYPE';

interface sendQuery {
    type: typeof SEND_QUERY
    payload: string
};

interface updateFilter {
    type: typeof UPDATE_TYPE
    payload: string
};

export type FrontendActionTypes = sendQuery|updateFilter;