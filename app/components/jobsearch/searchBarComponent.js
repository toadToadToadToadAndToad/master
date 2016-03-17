import React, { Component } from 'react';

class SearchBarComponent extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search"
            ref="filterTextInput"
            />
        </form>
      </div>
    );
  }
}

export default SearchBarComponent;
