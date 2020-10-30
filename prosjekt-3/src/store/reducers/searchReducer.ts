import {
  SEND_QUERY,
  ASC_NAME,
  DESC_NAME,
  DESC_SERVINGS,
  ASC_SERVINGS,
  UPDATE_TYPE,
  FrontendActionTypes,
} from "../types/types";



interface Recipe {
  text: string;
  filterChoice: string[];
  sortBy: string;
  ascending: boolean;
 
}

export const initialState: Recipe = {
  text: "",
  filterChoice: [],
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
    }
    
    case UPDATE_TYPE:
      let filterChoice = state.filterChoice.slice();

      if (filterChoice.some((choice) => choice === action.payload)) {
        filterChoice = filterChoice.filter(
          (choice) => choice !== action.payload
        );
      } else {
        filterChoice.push(action.payload);
      }
      return {
        ...state,
        filterChoice,
     }
    
    case ASC_NAME:
      return {
        ...state,
        sortBy: "name",
        ascending: true,
        }

    case DESC_NAME:
      return { 
          ...state, 
          sortBy: "name", 
          ascending: false 
        }
    case ASC_SERVINGS:
      return { 
          ...state, 
          sortBy: "servings", 
          ascending: true 
        }
    case DESC_SERVINGS:
      return { 
          ...state, 
          sortBy: "servings", 
          ascending: false 
        }
    default:
      return state;
  }
}

//Creating available actions for sorting
export function fireAction(sortBy = "name", ascending = false) {
  const payload = { sortBy, ascending };
  switch (sortBy) {
    case "name":
      return { type: ascending ? ASC_NAME : DESC_NAME, payload };
    case "servings":
      return { type: ascending ? ASC_SERVINGS : DESC_SERVINGS, payload };
    default:
      return;
  }
}
