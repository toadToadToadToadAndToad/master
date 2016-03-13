import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import SignIn from '../components/signin/signIn'

class SignInContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  goToDashboard() {
    browserHistory.push('/dashboard');
  }

  render() {
    return (
      <div>
        <SignIn goToDashboard={this.goToDashboard} />
      </div>
    );
  }
};

export default SignInContainer;
