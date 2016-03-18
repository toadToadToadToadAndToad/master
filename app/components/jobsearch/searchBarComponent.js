import React, { Component } from 'react';

class SearchBarComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keywords: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleChange(e) {
    this.setState({ keywords: e.target.value });
  }

  handleSearch(event) {
    event.preventDefault();
    this.props.onHandleSearch(this.state.keywords);
    this.setState({ keywords: '' });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <input
            type="text"
            placeholder="Search Jobs"
            value={this.state.keywords}
            onChange={this.handleChange}
          />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
}

SearchBarComponent.propTypes = { onHandleSearch: React.PropTypes.func };
export default SearchBarComponent;
