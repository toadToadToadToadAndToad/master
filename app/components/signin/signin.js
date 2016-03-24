
import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import '../../styles/main.css';

function SignIn() {
  return (
    <div className="sign-in">
      <a href="/auth/google">
        <RaisedButton
          label="Sign In with Google"
          primary
        />
      </a>
    </div>
  );
}

export default SignIn