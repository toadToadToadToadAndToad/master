import React from 'react';

function SearchBarComponent(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search"
          // value={this.props.filterText}
          // ref='filterTextInput'
          // onChange={this.props.handleChange} />
        />
      </form>
    </div>
  );
}

export default SearchBarComponent;
