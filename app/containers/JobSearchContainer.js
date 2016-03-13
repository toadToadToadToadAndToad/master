import React, { Component } from 'react';
import { Link } from 'react-router';

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
      </div>
    );
  }
};

export default JobSearchContainer;