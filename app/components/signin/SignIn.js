import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import '../../styles/main.css';

function SignIn() {
  return (
    <div className="container">
      <p>Number's Game makes the job search organized and systematic by allowing you to compile jobs from different sites, and keep track of jobs in your pipeline. Search for jobs, save them, and keep track of job-related deadlines and interview information.</p>
      <a href="/auth/google">
        <br />
        <RaisedButton
          className="sign-in"
          label="Sign In with Google"
          primary
        />
      </a>
    </div>
  );
}

export default SignIn;
