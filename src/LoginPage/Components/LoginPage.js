import React, { Component } from 'react';
import LoginPageHeader from './LoginPageHeader';
import LoginPageFooter from './LoginPageFooter';
import LoginFormPage from './LoginFormPage';
import '../css/LoginPage.css';

class LoginPage extends Component {
  render() {
    return (
      <>
        <div className="container">
          <LoginPageHeader />
          <LoginFormPage />
        </div>
        <LoginPageFooter />
      </>
    );
  }
}

export default LoginPage;
