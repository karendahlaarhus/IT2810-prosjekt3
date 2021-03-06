import React from "react";
import { connect, useDispatch } from "react-redux";
import { updateFilter } from "../store/actions/action";
import { Checkbox, FormControlLabel } from "@material-ui/core";

export const FilterBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="filter-tags">
      <FormControlLabel
        id="main"
        control={
          <Checkbox
            value="main"
            color="primary"
            onChange={(e) => dispatch(updateFilter(e.currentTarget.value))}
          />
        }
        label="Main"
        labelPlacement="end"
      />
      <FormControlLabel
        id="vegetarian"
        control={
          <Checkbox
            value="vegetarian"
            color="primary"
            onChange={(e) => {
              console.log(e.currentTarget.value);
              dispatch(updateFilter(e.currentTarget.value));
            }}
          />
        }
        label="Vegetarian"
        labelPlacement="end"
      />
      <FormControlLabel
        id="dessert"
        control={
          <Checkbox
            value="dessert"
            color="primary"
            onChange={(e) => dispatch(updateFilter(e.currentTarget.value))}
          />
        }
        label="Dessert"
        labelPlacement="end"
      />
      <FormControlLabel
        id="soup"
        control={
          <Checkbox
            value="soup"
            color="primary"
            onChange={(e) => dispatch(updateFilter(e.currentTarget.value))}
          />
        }
        label="Soup"
        labelPlacement="end"
      />
      <FormControlLabel
        id="snack"
        control={
          <Checkbox
            value="snack"
            color="primary"
            onChange={(e) => dispatch(updateFilter(e.currentTarget.value))}
          />
        }
        label="Snack"
        labelPlacement="end"
      />
    </div>
  );
};

const mapStateToProps = (state: { recipes: { filterChoice: string[] } }) => ({
  filterChoice: state.recipes.filterChoice,
});

export default connect(mapStateToProps)(FilterBar);
