import React, { Component } from 'react';
import LoginPageHeader from './LoginPageHeader';
import '../css/LoginPage.css';
import SignInPage from './SignInPage';
import LoginFormPage from './LoginFormPage';

class LoginPage extends Component {
  render() {
    return (
      <>
        <div className="container">
          <LoginPageHeader />
          <SignInPage />
        </div>
      </>
    );
  }
}

export default LoginPage;

// return (
//   <>
//     <div className="container">
//       <LoginPageHeader />
//       <LoginFormPage />
//     </div>
//     <LoginPageFooter />
//   </>
// );
