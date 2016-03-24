import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import SearchBarComponent from '../components/jobsearch/SearchBar';
// import SiteSelectionComponent from '../components/jobsearch/SiteSelect';
import ResultsViewComponent from '../components/jobsearch/ResultsView';
import RaisedButton from 'material-ui/lib/raised-button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import { addJob } from '../config/actions';

class JobSearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
  }

  componentDidMount() {
    // The state keeps on getting reset on load. Need to see how to persist a search result.
    console.log('Mounted data:', this.state.data);
  }

  strip(html) {
    html = html.replace('\n\n', ' ');
    html = html.replace('\n', ' ');
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
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
        <RaisedButton
          containerElement={<Link to="/dashboard" />}
          label="Dashboard"
        />
        <br /><br />
        <PageHeader>Job Search</PageHeader>
        <SearchBarComponent onHandleSearch={this.handleSearchSubmit} />
        <p>Click on a result to add it to your jobs</p>
        <ResultsViewComponent
          data={this.state.data}
          onRowClick={this.handleRowClick}
        />
      </div>
    );
  }
}

JobSearchContainer.propTypes = { dispatch: React.PropTypes.func };
export default connect()(JobSearchContainer);
