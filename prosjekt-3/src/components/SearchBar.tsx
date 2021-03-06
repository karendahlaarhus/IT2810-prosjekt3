import React from "react";
import { sendQuery } from "../store/actions/action";
import { connect, useDispatch } from "react-redux";
import { FormGroup, TextField } from "@material-ui/core";

export const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <FormGroup id="searchBar">
        <TextField
          id="outlined-basic"
          label="Search for recipes"
          type="search"
          name="SearchText"
          variant="outlined"
          onChange={(e) => dispatch(sendQuery(e.currentTarget.value))}
          fullWidth
        ></TextField>
      </FormGroup>
    </div>
  );
};

const mapStateToProps = (state: { recipes: { text: any } }) => ({
  text: state.recipes.text,
});

export default connect(mapStateToProps)(SearchBar);
