import React, { Component } from 'react';
import TextField from 'material-ui/lib/text-field';

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
          <TextField
            value={this.state.keywords}
            onChange={this.handleKeyChange}
            onEnterKeyDown={this.handleSearch}
            hintText="Keywords"
          />&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            value={this.state.location}
            onChange={this.handleLocationChange}
            onEnterKeyDown={this.handleSearch}
            hintText="Location"
          />
        </form>
      </div>
    );
  }
}

SearchBarComponent.propTypes = { onHandleSearch: React.PropTypes.func };
export default SearchBarComponent;
