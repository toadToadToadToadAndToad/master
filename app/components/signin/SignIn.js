import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import '../../styles/main.css';

function SignIn() {
  return (
    <div className="container">
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
