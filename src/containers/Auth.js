import React from 'react';
import { auth } from '../firebase';

import SignIn from '../components/auth/SignIn';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
    };
    this.handleUserLogin = this.handleUserLogin.bind(this);
  }

  handleUserLogin(data) {
    console.log('handleUserLogin', data);
    auth.signInWithEmailAndPassword(data.email, data.password)
      .catch((error) => {
      // Handle Errors here.
      //   const { code: errorCode, message: errorMessage } = error.code;
        console.log('[ AUTH ]', error);
        this.setState({
          errorMessage: error.message,
        });
      });
  }

  render() {
    const { state } = this;
    return (
      <SignIn handleUserLogin={ this.handleUserLogin } errorMessage={ state.errorMessage } />
    );
  }
}
export default Auth;
