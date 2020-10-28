import {
  FrontendActionTypes,
  SEND_QUERY,
  ASC_NAME,
  DESC_NAME,
} from "../types/types";

export function sendQuery(searchQuery: string): FrontendActionTypes {
  return {
    type: SEND_QUERY,
    payload: searchQuery,
  };
}

export function sortAscName(sortingKey: string): FrontendActionTypes {
  return {
    type: ASC_NAME,
    payload: sortingKey,
  };
}

export function sortDescName(sortingKey: string): FrontendActionTypes {
  return {
    type: DESC_NAME,
    payload: sortingKey,
  };
}
