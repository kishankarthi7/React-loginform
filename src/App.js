import React, { Component } from 'react';
import './App.css';
import LoginPageHeader from './LoginPage/Components/LoginPageHeader';
import LoginFormPage from './LoginPage/Components/LoginFormPage';
import './LoginPage/css/LoginPage.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <LoginPageHeader />
        <LoginFormPage />
      </div>
    );
  }
}

export default App;
