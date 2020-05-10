import React, { Component } from 'react';
// import LoginPageHeader from './LoginPage/Components/LoginPageHeader';
// import LoginFormPage from './LoginPage/Components/LoginFormPage';
// import LoginPageFooter from './LoginPage/Components/LoginPageFooter';
// import LoginPage from './LoginPage/Components/LoginPage';
// import PricePage from './Price/Components/PricePage';
import DataSources from './Datasources/Components/DataSources';

class App extends Component {
  render() {
    return (
      <div className="app">
        <DataSources />
      </div>
    );
  }
}

export default App;
