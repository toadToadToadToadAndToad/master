import React, { Component } from 'react';
import { Link } from 'react-router';

class JobViewContainer extends Component { 
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>Job View Container</div>
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
    );
  }
};

export default JobViewContainer;