import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import SearchBarComponent from '../components/jobsearch/searchBarComponent';
import SiteSelectionComponent from '../components/jobsearch/siteSelectComponent';
import ResultsViewComponent from '../components/jobsearch/resultsViewComponent';

class JobSearchContainer extends Component { 
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>Job Search Container</div>
        <Link to="/dashboard">Back to Dashboard</Link>
        <SearchBarComponent />
        <SiteSelectionComponent />
        <ResultsViewComponent />
      </div>
    );
  }

  getJobs(apiInfo){
    axios.get(apiInfo).then(function(response){
      return response;
    })
  }

  getAllJobs(){
    axios.all([getJobs(api1), getJobs(api2)]).then(function(data){
      this.setState({ data: data });
    });
  }
};

export default JobSearchContainer;