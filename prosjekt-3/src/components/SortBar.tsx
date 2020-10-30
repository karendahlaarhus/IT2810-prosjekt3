import React from "react";
import { useDispatch } from "react-redux";
import { fireAction } from "../store/reducers/searchReducer";

export default function SortBar() {
  const dispatch = useDispatch();

  /**
   * Sends the value from the drop down sort menu to Redux
   */
  const handleSortOption = (optionValue: string) => {
    var optionArray = optionValue.split(" ");
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
        {/* Ascending values are not working for some reason ..  */}
        <option value="name asc">Alphabet - A-Z</option> 
        <option value="name desc">Alphabet - Z-A</option>
        <option value="servings asc">Servings - ascending </option>
        <option value="servings desc">Servings - descending</option>
      </select>
    </div>
  );
}
