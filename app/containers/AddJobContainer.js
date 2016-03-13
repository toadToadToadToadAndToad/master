import React, { Component } from 'react';
import { Link } from 'react-router';

class AddJobContainer extends Component { 
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>Add Job Container</div>
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
    );
  }
};

export default AddJobContainer;