import { connect, useDispatch } from "react-redux";
import React from "react";
import { updateFilter } from "../store/actions/action";
import { Checkbox, FormControlLabel } from "@material-ui/core";

export const FilterBar = () => {
  const dispatch = useDispatch();

  return (

    <div className="filter-tags">

      <FormControlLabel
        id="main"
        value="main"
        control={<Checkbox color="primary" onChange={(e) => dispatch(updateFilter(e.currentTarget.value))}  />}
        label="Main"
        labelPlacement="end"
      />
      <FormControlLabel
        id="vegetarian"
        value="vegetarian"
        control={<Checkbox color="primary" onClick={(e) => dispatch(updateFilter(e.currentTarget.value))}  />}
        label="Vegetarian"
        labelPlacement="end"
      />
      <FormControlLabel
        id="dessert"
        value="dessert"
        control={<Checkbox color="primary"  onClick={(e) => dispatch(updateFilter(e.currentTarget.value))} />}
        label="Dessert"
        labelPlacement="end"
      />
      <FormControlLabel
        id="soup"
        value="soup"
        control={<Checkbox color="primary" onClick={(e) => dispatch(updateFilter(e.currentTarget.value))} />}
        label="Soup"
        labelPlacement="end"
      />
    </div>
    
  );
}

const mapStateToProps = (state: { recipes: { filterChoice: [] } }) => ({
    text: state.recipes.filterChoice,
  });
  
export default connect(mapStateToProps)(FilterBar);
  