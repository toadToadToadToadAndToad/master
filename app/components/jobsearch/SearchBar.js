import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

function SearchBar(props) {
  return (
    <div>
      <TextField
        value={props.keywords}
        onChange={props.onHandleKeyChange}
        hintText="Keywords"
      />&nbsp;&nbsp;&nbsp;&nbsp;
      <TextField
        value={props.location}
        onChange={props.onHandleLocationChange}
        hintText="Location"
      />
      <RaisedButton
        label="Search"
        primary
        onMouseDown={props.onHandleSearch}
      />
    </div>
  );
}

SearchBar.propTypes = {
  keywords: PropTypes.string,
  location: PropTypes.string,
  isWorking: PropTypes.bool,
  onHandleSearch: PropTypes.func,
  onHandleLocationChange: PropTypes.func,
  onHandleKeyChange: PropTypes.func,
};

export default SearchBar;
