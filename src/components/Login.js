import React, { Component } from 'react';


class Login extends Component {

  render() {
    return (
      <div data-test= "login-container">
      <form data-test="login-form">
      Username: <input type="text" data-test="username-input" />
      Password: <input type="text" data-test="password-input" />
      <input type="submit" value="Submit" data-test='login-button' />
      </ form>
      <div data-test="register-div">
      Need a login? Register <a href="/register">here.</a>
      </div>
      </div>

    );
  }
}

export default Login;
