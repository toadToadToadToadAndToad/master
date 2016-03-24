
import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import '../../styles/main.css';

function SignIn() {
  return (
<<<<<<< a3521e7148447f3f6fb40bbfed9365c5e75b8e26
    <div className="sign-in">
      <a href="/auth/google">
        <RaisedButton
          label="Sign In with Google"
          primary
        />
      </a>
    </div>
=======
    // <div className="sign-in">
    //   <TextField className="textfield" hintText="User name" /><br />
    //   <TextField className="textfield" hintText="Password Field"
    //     floatingLabelText="Password"
    //     type="password" /><br />
      // <RaisedButton
      //   onClick={props.signin}
      //   label="Sign In"
      //   primary={true}
      //   style={style} />
    //   <RaisedButton label="Sign Up" secondary={true} style={style} />
    //button with signin function
    <a href="/auth/google">Sign In with Google</a>
    // </div>
>>>>>>> (in progress) google auth
  );
}

export default SignIn