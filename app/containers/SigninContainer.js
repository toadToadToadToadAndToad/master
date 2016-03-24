import React, { Component } from 'react';

import SignIn from '../components/signin/signIn';

class SignInContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

<<<<<<< a3521e7148447f3f6fb40bbfed9365c5e75b8e26
=======
  signin() {
    // browserHistory.push('/dashboard');
    axios.get('/auth/google').then(function(result){
      console.log("RE",result)
    }).then(function(res){
      axios.get('/auth/google/callback').then(function(total){
        console.log('HERE',total)
      })
    })
  }

>>>>>>> (in progress) google auth
  render() {
    return (
      <div>
        <SignIn />
      </div>
    );
  }
}

export default SignInContainer;