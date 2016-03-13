import React, { Component } from 'react';
import { Link } from 'react-router';

class DashboardContainer extends Component { 
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>Dashboard Container</div>
        <Link to="/jobsearch">Job Search</Link> <br />
        <Link to="/addjob">Add Job</Link> <br />
        <Link to="/jobview">Job View</Link>
      </div>
    );
  }
};

export default DashboardContainer;