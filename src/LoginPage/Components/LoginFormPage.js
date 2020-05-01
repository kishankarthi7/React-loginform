import React, { Component } from 'react';

class LoginFormPage extends Component {
  render() {
    return (
      <div class="wrap">
        <form class="login-form" action="">
          <div class="form-header">
            <h3>Login Form</h3>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-input"
              placeholder="email@example.com"
            />
          </div>

          <div class="form-group">
            <input type="password" class="form-input" placeholder="password" />
          </div>

          <div class="form-group">
            <button class="form-button" type="submit">
              Login
            </button>
          </div>
          <div class="form-footer">
            Don't have an account? <a href="#/">Sign Up</a>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginFormPage;
