import React from 'react';

function SearchBarComponent(props) {
  return (
    <div>
      <form onSubmit={props.handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search"
          ref="filterTextInput"
        />
      </form>
    </div>
  );
}

export default SearchBarComponent;
