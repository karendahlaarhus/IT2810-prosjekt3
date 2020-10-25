import { combineReducers } from 'redux';
import searchReducer from '../search';
import sortReducer from '../sort';

const rootReducer = combineReducers({
    search: searchReducer,
    sortInfo: sortReducer
  });
  
  export default rootReducer;
  