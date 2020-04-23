import React, { Component } from 'react';
import ham from '../images/ham.svg';
import exit from '../images/iconmonstr-x-mark-7.svg';

class LoginPageHeader extends Component {
  render() {
    return (
      <header>
        <h2>Trafficnow</h2>

        <nav>
          <a href="/#" className="hide-desktop">
            <img src={ham} alt="toggle menu" className="menu" id="menu" />
          </a>

          <ul className="show-desktop hide-desktop" id="nav">
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
            <li>
              <button>REGISTER</button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default LoginPageHeader;
