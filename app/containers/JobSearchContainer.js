import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import SearchBarComponent from '../components/jobsearch/searchBarComponent';
import SiteSelectionComponent from '../components/jobsearch/siteSelectComponent';
import ResultsViewComponent from '../components/jobsearch/resultsViewComponent';
import RaisedButton from 'material-ui/lib/raised-button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import { addJob } from '../config/actions';

class JobSearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
  }

  componentDidMount() {
    // The state keeps on getting reset on load. Need to see how to persist a search result.
    console.log('Mounted data:',this.state.data);
  }

  handleSearchSubmit(keyword, location) {
    // TODO add loading spinner
    // TODO incorporate variable from SiteSelection
    let searchParams = '/api/jobs/' + keyword.replace(/ /g, '+')
    if (location.length) {
      searchParams+= '/' + location.replace(/ /g, '+');
    }
    axios.get(searchParams)
      .then((response) => this.setState({ data: response.data.data }))
      .catch((response) => console.log('error', response));
  }
  handleRowClick(event) {
    // Adds clicked job to the store.
    this.props.dispatch(addJob(this.state.data[event]));
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
        <SiteSelectionComponent />
        <p>Click on a result to add it to your jobs</p>
        <ResultsViewComponent
          data={this.state.data}
          onRowClick={this.handleRowClick}
        />
      </div>
    );
  }
}

JobSearchContainer = connect()(JobSearchContainer);
export default JobSearchContainer;
