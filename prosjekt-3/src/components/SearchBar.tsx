import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class SearchBar extends Component {

    render(){
        return (
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        );
    };
}

export default SearchBar;