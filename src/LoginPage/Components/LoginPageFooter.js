import React, { Component } from 'react';

class LoginPageFooter extends Component {
  render() {
    return (
      <footer>
        <div className="footer-conatiner">
          <div className="container">
            <h2>Logo</h2>
            <p className="footer-adddress">
              Barcelona, 08001
              <br />
              Spain
            </p>
            <ul className="footer-links">
              <li>
                <a href="#/">Terms of Service</a>
              </li>
              <li>
                <a href="#/">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default LoginPageFooter;
