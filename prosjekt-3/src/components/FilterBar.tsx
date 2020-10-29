import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../store/actions/action";
import Button from '@material-ui/core/Button';
import { RootState } from "../store/reducers";

export const FilterBar = () => {
  const dispatch = useDispatch();

  const filters = useSelector((state: RootState) => state.recipes.filterChoice);

  return (

    <div className="filter-tags">
        <Button
            variant="contained"
            color="default"
            className='filterButton'
            value='main'
            onClick={(e) => dispatch(updateFilter(e.currentTarget.value))}
          > Main
      </Button>
      <Button
            variant="contained"
            color="default"
            className='filterButton'
            value='dessert'
            onClick={(e) => dispatch(updateFilter(e.currentTarget.value))}>
        Dessert
      </Button>
      <Button
            variant="contained"
            color="default"
            className='filterButton'
            value='snack'
            onClick={(e) => dispatch(updateFilter(e.currentTarget.value))}>  
        Snack
      </Button>
      <Button
            variant="contained"
            color="default"
            className='filterButton'
            value='vegetarian'
            onClick={(e) => dispatch(updateFilter(e.currentTarget.value))}>
        Vegetarian
      </Button>
      <Button
            variant="contained"
            color="default"
            className='filterButton'
            value='soup'
            onClick={(e) => dispatch(updateFilter(e.currentTarget.value))}>
        Soup
      </Button>

    </div>
    
  );
}

const mapStateToProps = (state: { recipes: { filterChoice: any } }) => ({
    text: state.recipes.filterChoice,
  });
  
export default connect(mapStateToProps)(FilterBar);
  