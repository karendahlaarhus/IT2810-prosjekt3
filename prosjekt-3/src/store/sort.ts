const ASCENDING_NAME = 'ASCENDING_NAME';
const DESCENDING_NAME = 'DESCENDING_NAME';

// Reducer
export default function sortReducer(
    state = { sortBy: 'id', ascending: true },
    action: { type: any; }
  ) {
    switch (action.type) {
      case ASCENDING_NAME:
        return { sortBy: 'name', ascending: true };
      case DESCENDING_NAME:
        return { sortBy: 'name', ascending: false };
      default:
        return state;
    }
  }
  
  // Action creator
  export function fireAction(sortBy = 'id', ascending = true) {
    const payload = { sortBy, ascending };
    switch (sortBy) {
      case 'name':
        return { type: ascending ? ASCENDING_NAME : DESCENDING_NAME, payload };
      default:
        return;
    }
  }
  