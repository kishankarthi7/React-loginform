import React, { Component } from 'react';
import '../css/main.css';
import Switch from 'react-switch';

class PricePage extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
    console.log(this.state.checked);
  }

  render() {
    return (
      <div className="price-page">
        <header className="price-page-header">
          <h1>OUR PRICING</h1>
        </header>
        <section className="price-page-toggle">
          <label htmlFor="material-switch" className="price-page-switch-label">
            <p> MONTHLY </p>
            <Switch
              checked={this.state.checked}
              onChange={this.handleChange}
              onColor="#a3a8f0"
              onHandleColor="#FFF"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={20}
              width={48}
              className="react-switch"
              id="material-switch"
            />
            <p> ANNUALY </p>
          </label>
        </section>
        <section className="price-cards">
          <section className="price-card price-card-left">
            <h2>Standard</h2>
            <p className="price">{this.state.checked ? '$125' : '$25'}</p>
            <p>For small business and solorpreneurs</p>
            <p>
              <a href="/#" className="button gradient-button">
                GET STARTED
              </a>
            </p>
          </section>
          <section className="price-card price-card-center">
            <h2>Pro</h2>
            <p className="price">{this.state.checked ? '$150' : '$50'}</p>
            <p>For small buisness and professional marketers</p>
            <p>
              <a href="/#" className="button white-button">
                GET STARTED
              </a>
            </p>
          </section>
          <section className="price-card price-card-right">
            <h2>Advanced</h2>
            <p className="price">{this.state.checked ? '$175' : '$75'}</p>
            <p>For marketing teams and agencies</p>
            <p>
              <a href="/#" className="button gradient-button">
                GET STARTED
              </a>
            </p>
          </section>
        </section>
      </div>
    );
  }
}

export default PricePage;
