import React from "react";
import { useDispatch } from "react-redux";
import { fireAction } from "../store/reducers/sortReducer";

/* interface SortState {
    selectedValue: string;
}
 */

export default function SortBar() {
  const dispatch = useDispatch();

  /**
   * Sends the value from the drop down sort menu to Redux
   */
  const handleSortOption = (optionValue: string) => {
    const optionArray = optionValue.split(" ");
    var boolean = optionArray.includes("asc") ? true : false;
    dispatch(fireAction(optionArray[0], boolean));

    console.log("optionArray.includes('asc') ", optionArray.includes("asc"));
  };

  return (
    <div>
      <select id="sortBar" onChange={(e) => handleSortOption(e.target.value)}>
        <option value="" disabled selected>
          Sort by
        </option>
        <option value="name asc">Alphabet - A-Z</option>
        <option value="name desc">Alphabet - Z-A</option>
      </select>
    </div>
  );
}
