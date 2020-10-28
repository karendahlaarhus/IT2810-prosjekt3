import {
  SEND_QUERY,
  ASC_NAME,
  DESC_NAME,
  FrontendActionTypes,
} from "../types/types";

interface Recipe {
  text: string;
  sortBy: string;
  ascending: boolean;
}

const initialState: Recipe = {
  text: "",
  sortBy: "",
  ascending: true,
};

export default function searchReducer(
  state = initialState,
  action: FrontendActionTypes
): Recipe {
  switch (action.type) {
    case SEND_QUERY:
      return {
        ...state,
        text: action.payload,
      };
    case ASC_NAME:
      return {
        ...state,
        sortBy: "name",
        ascending: true,
      };
    case DESC_NAME:
      return { ...state, sortBy: "name", ascending: false };
    default:
      return state;
  }
}

//Creating available actions for sorting
export function fireAction(sortBy = "name", ascending = true) {
  const payload = { sortBy, ascending };
  switch (sortBy) {
    case "name":
      return { type: ascending ? ASC_NAME : DESC_NAME, payload };
    default:
      return;
  }
}
