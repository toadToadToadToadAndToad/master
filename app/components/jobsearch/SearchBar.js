import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';


function SearchBar(props) {
  return (
    <div>
      <form onSubmit={props.onHandleSearch}>
        <TextField
          value={props.keywords}
          onChange={props.onHandleKeyChange}
          onEnterKeyDown={props.onHandleSearch}
          hintText="Keywords"
        />&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
          value={props.location}
          onChange={props.onHandleLocationChange}
          onEnterKeyDown={props.onHandleSearch}
          hintText="Location"
        />
      </form>
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
