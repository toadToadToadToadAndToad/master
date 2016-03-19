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
    axios.get('/api/jobs/javascript')
      .then((response) => this.setState({ data: response.data.data }))
      .catch((response) => console.log('error', response));
  }
  handleSearchSubmit(keyword) {
    axios.get('/api/jobs/' + keyword)
      .then((response) => this.setState({ data: response.data.data }))
      .catch((response) => console.log('error', response));
  }
  handleRowClick(event, dispatch) {
    console.log(this.state.data[event]);
    dispatch(addJob(this.state.data[event]));
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
        <ResultsViewComponent
          data={this.state.data}
          onRowClick={this.handleRowClick}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleRowClick: (event) => {
      handleRowClick(event, dispatch);
    }
  };
};

JobSearchContainer = connect(mapDispatchToProps)(JobSearchContainer);
export default JobSearchContainer;
