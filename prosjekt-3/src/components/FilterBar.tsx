import { connect, useDispatch } from "react-redux";
import React from "react";
import { updateFilter } from "../store/actions/action";
import Button from '@material-ui/core/Button';


export const FilterBar = () => {
  const dispatch = useDispatch();

  return (

    <div className="filter-tags">
        <Button
            variant="contained"
            color="default"
            className='filterButton'
            id='main'
            value='main'
            onClick={(e) => dispatch(updateFilter(e.currentTarget.value))}
          > Main
      </Button>
      <Button
            variant="contained"
            color="default"
            className='filterButton'
            id='dessert'
            value='dessert'
            onClick={(e) => dispatch(updateFilter(e.currentTarget.value))}>
        Dessert
      </Button>
      <Button
            variant="contained"
            color="default"
            className='filterButton'
            id='snack'
            value='snack'
            onClick={(e) => dispatch(updateFilter(e.currentTarget.value))}>  
        Snack
      </Button>
      <Button
            variant="contained"
            color="default"
            className='filterButton'
            id='vegetarian'
            value='vegetarian'
            onClick={(e) => dispatch(updateFilter(e.currentTarget.value))}>
        Vegetarian
      </Button>
      <Button
            variant="contained"
            color="default"
            className='filterButton'
            id='soup'
            value='soup'
            onClick={(e) => dispatch(updateFilter(e.currentTarget.value))}>
        Soup
      </Button>

    </div>
    
  );
}

const mapStateToProps = (state: { recipes: { filterChoice: [] } }) => ({
    text: state.recipes.filterChoice,
  });
  
export default connect(mapStateToProps)(FilterBar);
  