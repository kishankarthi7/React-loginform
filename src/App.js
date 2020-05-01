import React, { Component } from 'react';
import LoginPageHeader from './LoginPage/Components/LoginPageHeader';
import LoginFormPage from './LoginPage/Components/LoginFormPage';
import LoginPageFooter from './LoginPage/Components/LoginPageFooter';
import './LoginPage/css/LoginPage.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <LoginPageHeader />
          <LoginFormPage />
        </div>
        <LoginPageFooter />
      </div>
    );
  }
}

export default App;
