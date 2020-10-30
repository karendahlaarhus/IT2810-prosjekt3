export const SEND_QUERY = "SEND_QUERY";
export const ASC_NAME = "ASC_NAME";
export const DESC_NAME = "DESC_NAME";
export const DESC_SERVINGS = "DESC_SERVINGS";
export const ASC_SERVINGS = "ASC_SERVINGS";
export const UPDATE_TYPE = 'UPDATE_TYPE';

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

interface ascServings {
  type: typeof ASC_SERVINGS;
  payload: string;
}

interface descServings {
  type: typeof DESC_SERVINGS;
  payload: string;
}

interface updateFilter {
    type: typeof UPDATE_TYPE
    payload: string
};


export type FrontendActionTypes =
  | sendQuery
  | ascName
  | descName
  | descServings
  | ascServings
  | updateFilter;