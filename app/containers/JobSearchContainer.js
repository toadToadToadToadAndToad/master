import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import SearchBar from '../components/jobsearch/SearchBar';
import ResultsViewComponent from '../components/jobsearch/ResultsView';
import RaisedButton from 'material-ui/lib/raised-button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import { addJob } from '../config/actions';

class JobSearchContainer extends Component {
  constructor() {
    super();
    this.handleKeyChange = this.handleKeyChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);

    this.state = {
      data: [],
      keywords: '',
      location: '',
    };
  }

  componentDidMount() {
  }

  strip(html) {
    html = html.replace('\n\n', ' ');
    html = html.replace('\n', ' ');
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  handleKeyChange(e) {
    this.setState({ keywords: e.target.value });
  }
  handleLocationChange(e) {
    this.setState({ location: e.target.value });
  }
  handleSearch(event) {
    event.preventDefault();
    this.handleSearchSubmit(this.state.keywords, this.state.location);
    this.setState({ keywords: '', location: '' });
  }
  handleSearchSubmit(keyword, location) {
    this.setState({ data: [] });
    // TODO add loading spinner
    // TODO incorporate variable from SiteSelection
    let githubParams = '/api/jobs/github/' + keyword.replace(/ /g, '+');
    if (location.length) {
      githubParams += '/' + location.replace(/ /g, '+');
    }
    let usajobsParams = '/api/jobs/usajobs/' + keyword.replace(/ /g, '+');
    if (location.length) {
      usajobsParams += '/' + location.replace(/ /g, '+');
    }
    axios.get(githubParams)
      .then((response) => {
        const nextState = this.state.data.slice();
        response.data.forEach(
          (job) => nextState.push(job)
        );
        this.setState({ data: nextState });
      })
      .catch((response) => console.log('error', response));
    axios.get(usajobsParams)
      .then((response) => {
        const nextState = this.state.data.slice();
        response.data.forEach(
          (job) => nextState.push(job)
        );
        this.setState({ data: nextState });
      })
      .catch((response) => console.log('error', response));
  }
  handleRowClick(event) {
    // Adds clicked job to the store.
    const job = this.state.data[event];
    job.description = this.strip(job.description).slice(0, 500).concat('...');
    this.props.dispatch(addJob(job));
    // TODO Add a way to mark listings as being added to the Store.
    // Something like this.state.data[0].added = true;
  }

  render() {
    return (
      <div>
        <h2>Job Search</h2>
        <SearchBar
          keywords={this.state.keywords}
          location={this.state.location}
          onHandleSearch={this.handleSearch}
          onHandleLocationChange={this.handleLocationChange}
          onHandleKeyChange={this.handleKeyChange}
        />
        <br /><br />
        <ResultsViewComponent
          data={this.state.data}
          onRowClick={this.handleRowClick}
        />
      </div>
    );
  }
}

JobSearchContainer.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(JobSearchContainer);
