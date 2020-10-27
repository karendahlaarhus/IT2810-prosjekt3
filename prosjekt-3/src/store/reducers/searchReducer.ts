import {SEND_QUERY, FrontendActionTypes, } from '../types/types';

interface Recipe {
    text: string;
}

const initialState: Recipe = {
    text: ''
}

export default function searchReducer(state = initialState, action: FrontendActionTypes): Recipe{
    switch(action.type){
        case SEND_QUERY:
            return{
                ...state,
                text: action.payload,
            } 
        default:
            return state;
    }
}