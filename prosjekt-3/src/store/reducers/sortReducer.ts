import { ASC_NAME, DESC_NAME, FrontendActionTypes } from "../types/types";

/* const sortAsc = (array, field) => {
  return array.sort(function (a, b) {
    if (a[field] > b[field]) {
      return 1;
    }
    if (b[field] > a[field]) {
      return -1;
    }
    return 0;
  });
};

const sortDesc = (array, field) => {
  return array.sort(function (a, b) {
    if (a[field] > b[field]) {
      return -1;
    }
    if (b[field] > a[field]) {
      return 1;
    }
    return 0;
  });
};  */

//Creating reducer for sorting
export default function sortReducer(
  state = { sortBy: "id", ascending: true },
  action: FrontendActionTypes
) {
  switch (action.type) {
    case ASC_NAME:
      return { sortBy: "name", ascending: true };
    case DESC_NAME:
      return { sortBy: "name", ascending: false };
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
