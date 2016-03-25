import React, { Component } from 'react';

class SearchBarComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keywords: '',
      location: '',
    };
    this.handleKeyChange = this.handleKeyChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleKeyChange(e) {
    this.setState({ keywords: e.target.value });
  }
  handleLocationChange(e) {
    this.setState({ location: e.target.value });
  }
  handleSearch(event) {
    event.preventDefault();
    this.props.onHandleSearch(this.state.keywords, this.state.location);
    this.setState({ keywords: '', location: '' });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <input
            required
            type="text"
            placeholder="Job Description"
            value={this.state.keywords}
            onChange={this.handleKeyChange}
          />
          <input
            type="text"
            placeholder="Location"
            value={this.state.location}
            onChange={this.handleLocationChange}
          />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
}

SearchBarComponent.propTypes = { onHandleSearch: React.PropTypes.func };
export default SearchBarComponent;
