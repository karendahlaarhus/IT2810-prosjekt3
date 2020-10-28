import {SEND_QUERY, UPDATE_TYPE, FrontendActionTypes, } from '../types/types';

interface Recipe {
    text: string;
    filterChoice: string
}

const initialState: Recipe = {
    text: '',
    filterChoice: ''
}

export default function searchReducer(state = initialState, action: FrontendActionTypes): Recipe{
    switch(action.type){
        case SEND_QUERY:
            return{
                ...state,
                text: action.payload,
            } 
        case UPDATE_TYPE:
            return{
                ...state,
                filterChoice: action.payload, 
            }
        default:
            return state;
    }
}


/* if (state.includes(action.payload)) {
    const newState = state.filter(value => value !== action.payload);
    return newState;
  }
  const newState = [...state, action.payload];
  return newState; */