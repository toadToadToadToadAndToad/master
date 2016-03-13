import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import '../../styles/main.css';


const style = {
  marginRight: 20,
  marginTop: 25
};

function SignIn(props){
  return (
    <div className="sign-in">
      <TextField className="textfield" hintText="User name" /><br />
      <TextField className="textfield" hintText="Password Field"
        floatingLabelText="Password"
        type="password" /><br />
      <RaisedButton
        onClick={props.goToDashboard}
        label="Sign In"
        primary={true}
        style={style} />
      <RaisedButton label="Sign Up" secondary={true} style={style} />
    </div>
  );
};

SignIn.propTypes = {
  goToDashboard: PropTypes.func.isRequired
}

export default SignIn;
