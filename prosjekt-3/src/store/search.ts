//Actions

const UPDATE_SEARCH = 'UPDATE_SEARCH';

//Reducer

export default function searchReducer(state = '', action: { type: any; payload: any; }) {
    switch (action.type) {
      case UPDATE_SEARCH:
        const newState = action.payload;
        return newState;
      default:
        return state;
    }
  }
  

  //action creator

  export function updateSearch(search = '') {
    return {
      type: UPDATE_SEARCH,
      payload: search
    };
  }
  