import React, { Component } from 'react';
import SignInPage from './SignInPage';

class LoginFormPage extends Component {
  render() {
    return (
      <section className="login-form-page">
        <section className="loginForm-quote">
          <p>
            You can have data without information, but you cannot have
            information without data
          </p>
        </section>
        <SignInPage className="signin-page" />
      </section>
    );
  }
}

export default LoginFormPage;
