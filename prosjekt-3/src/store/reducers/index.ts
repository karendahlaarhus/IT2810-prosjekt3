import { combineReducers } from "redux";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  recipes: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
