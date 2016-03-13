import React, { Component } from 'react';
import { Link } from 'react-router';

class SigninContainer extends Component { 
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>Signin Container</div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    );
  }
};

export default SigninContainer;