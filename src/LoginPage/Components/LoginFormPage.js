import React, { Component } from 'react';
import fbIcon from '../images/fb.png';
import twIcon from '../images/tw.png';
import googleIcon from '../images/gp.png';

class LoginFormPage extends Component {
  render() {
    return (
      <section>
        <div className="loginForm-container">
          <div className="switchButtons-conatiner">
            <div className="switch-buttons"></div>
            <button type="button" className="toggle-button">
              Login
            </button>
            <button type="button" className="toggle-button">
              Register
            </button>
          </div>
          <div className="social-icons">
            <img src={fbIcon} alt="facebook icon" />
            <img src={twIcon} alt="twitter Icon" />
            <img src={googleIcon} alt="google Icon" />
          </div>
        </div>
      </section>
    );
  }
}

export default LoginFormPage;
