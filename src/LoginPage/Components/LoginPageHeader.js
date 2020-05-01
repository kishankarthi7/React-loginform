import React, { Component } from 'react';
import ham from '../images/iconmonstr-menu-6.svg';
import exit from '../images/exit.svg';

class LoginPageHeader extends Component {
  render() {
    return (
      <header className="loginpage-header">
        <h2 className="Logo">
          <span style={{ color: 'red' }}>Traffic</span>
          <span style={{ color: 'green' }}>now</span>
        </h2>

        <nav>
          <a href="/#" className="hide-desktop">
            <img src={ham} alt="toggle menu" className="menu" id="menu" />
          </a>

          <ul className="show-desktop hide-mobile" id="nav">
            <li id="exit" className="exit-btn hide-desktop">
              <img src={exit} alt="exit menu" />
            </li>
            <li>
              <a href="/#">PRODUCTS</a>
            </li>
            <li>
              <a href="/#">DATA-SOURCES</a>
            </li>
            <li>
              <a href="/#">CONTACT</a>
            </li>
            <li>
              <a href="/#">PRICING</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default LoginPageHeader;
