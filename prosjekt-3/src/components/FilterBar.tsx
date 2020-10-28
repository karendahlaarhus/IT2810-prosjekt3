import React, { constructor } from "react";
import { updateFilter } from "../store/actions/action";
import { connect, useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';

export const SearchBar = () => {

  return (
    <div className="filter-tags">
        <Button
            variant="contained"
            disabled
            color="secondary"
            className={classes.button}
            startIcon={<KeyboardVoiceIcon />}
        >
            Talk
      </Button>

    </div>
    
  );
}

const mapStateToProps = (state: { recipes: { filterChoice: any } }) => ({
    text: state.recipes.filterChoice,
  });
  
export default connect(mapStateToProps)(FilterBar);
  
{/* <div>
        <div className='filterTag' data-name='Main' onClick={(e) => dispatch(updateFilter(e))}>
            <h6>Main</h6>
        </div>
        <div className='filterTag' data-name='Snack' onClick={(e) => dispatch(updateFilter(e.currentTarget.value))}>
            <h6>Snack</h6>
        </div>
        <div className='filterTag' data-name='Vegetarian' onClick={(e) => dispatch(updateFilter(e.currentTarget.value))}>
            <h6>Vegetarian</h6>
        </div>
        <div className='filterTag' data-name='Dessert' onClick={(e) => dispatch(updateFilter(e.currentTarget.value))}>
            <h6>Dessert</h6>
        </div> 
    </div> */}