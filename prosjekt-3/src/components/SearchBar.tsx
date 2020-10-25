import React from 'react';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { updateSearch } from '../store/search';

export default function Searchbar() {
    const dispatch = useDispatch();
    const delayedQuery = _.debounce(q => dispatch(updateSearch(q)), 500);
    return (
        <div className='searchbarContentContainer'>
          <div className='searchbar'>
            <input
              className='searchbarInput'
              placeholder='Search for recipe . . .'
              onChange={e => delayedQuery(e.target.value)}
            />
            <div className='pokemonDropdownContainer'>
            </div>
          </div>
        </div>
      );
    }
    