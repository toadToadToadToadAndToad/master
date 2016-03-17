import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import SearchBarComponent from '../components/jobsearch/searchBarComponent';
import SiteSelectionComponent from '../components/jobsearch/siteSelectComponent';
import ResultsViewComponent from '../components/jobsearch/resultsViewComponent';
import RaisedButton from 'material-ui/lib/raised-button';
import PageHeader from 'react-bootstrap/lib/PageHeader';

class JobSearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentWillMount() {
    axios.get('/api/jobs/javascript')
      .then((response) => this.setState({ data: response.data.data }))
      .catch((response) => console.log('error', response));
  }
  handleSearch(keywords) {
    axios.get('/api/jobs/' + keywords)
      .then((response) => this.setState({ data: response.data.data }))
      .catch((response) => console.log('error', response));
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

        <SearchBarComponent
          handleSearch= {this.handleSearch}
        />
        <SiteSelectionComponent />
        <ResultsViewComponent data={this.state.data} />
      </div>
    );
  }
}

export default JobSearchContainer;
