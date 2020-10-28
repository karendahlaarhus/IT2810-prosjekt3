import {SEND_QUERY, UPDATE_TYPE, FrontendActionTypes, } from '../types/types';

interface Recipe {
    text: string;
    filterChoice: string[]
}

const initialState: Recipe = {
    text: '',
    filterChoice: []
}

export default function searchReducer(state = initialState, action: FrontendActionTypes): Recipe{
    switch(action.type){
        case SEND_QUERY:
            return{
                ...state,
                text: action.payload,
            } 
        case UPDATE_TYPE:
            let filterChoice = state.filterChoice.slice();
            
            if (filterChoice.some(choice => choice === action.payload)) {
                filterChoice = filterChoice.filter(choice => choice !== action.payload)
            } 
            else {
                filterChoice.push(action.payload);            
            }      
            return{
                ...state,
                filterChoice
            }
        default:
            return state;
    }
}

