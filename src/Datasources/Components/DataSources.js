import React, { Component } from 'react';
import '../css/DataSources.css';
import CardImage from '../images/architecture-auto-automobiles-bridge-210182.jpg';
import CityAboveDark from '../images/CITY-ABOVE-DRK.jpg';
import ChicagoImage from '../images/chicago-690364_1920.jpg';

class DataSources extends Component {
  render() {
    return (
      <div className="Datasource-page">
        <header>
          <h1>Data Sources</h1>
        </header>
        <section className="card-container">
          <section className="columns">
            <div className="card">
              <div className="card-image">
                <img src={CardImage} alt="card header"></img>
              </div>
              <div className="card-body">
                <div className="card-logo">
                  <h2>LOGO</h2>
                </div>
                <h3 className="card-title">AGD 343</h3>
                <p className="card-description">
                  Volumne, speed, classification , occupancy
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={CardImage} alt="card header"></img>
              </div>
              <div className="card-body">
                <div className="card-logo">
                  <h2>LOGO</h2>
                </div>
                <h3 className="card-title">DeepBlue Sensor</h3>
                <p className="card-description">Description</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={CardImage} alt="card header"></img>
              </div>
              <div className="card-body">
                <div className="card-logo">
                  <h2>LOGO</h2>
                </div>
                <h3 className="card-title">Network Cameras</h3>
                <p className="card-description">Description</p>
              </div>
            </div>
          </section>
          <section className="columns">
            <div className="card">
              <div className="card-image">
                <img src={CityAboveDark} alt="card header"></img>
              </div>
              <div className="card-body">
                <div className="card-logo">
                  <h2>LOGO</h2>
                </div>
                <h3 className="card-title">TrafiCam</h3>
                <p className="card-description">Description</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={CityAboveDark} alt="card header"></img>
              </div>
              <div className="card-body">
                <div className="card-logo">
                  <h2>LOGO</h2>
                </div>
                <h3 className="card-title">RTMS</h3>
                <p className="card-description">Description</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={CityAboveDark} alt="card header"></img>
              </div>
              <div className="card-body">
                <div className="card-logo">
                  <h2>LOGO</h2>
                </div>
                <h3 className="card-title">Smart Sensor</h3>
                <p className="card-description">Description</p>
              </div>
            </div>
          </section>
          <section className="columns">
            <div className="card">
              <div className="card-image">
                <img src={ChicagoImage} alt="card header"></img>
              </div>
              <div className="card-body">
                <div className="card-logo">
                  <h2>LOGO</h2>
                </div>
                <h3 className="card-title">AutoScope</h3>
                <p className="card-description">Description</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={ChicagoImage} alt="card header"></img>
              </div>
              <div className="card-body">
                <div className="card-logo">
                  <h2>LOGO</h2>
                </div>
                <h3 className="card-title">FCD</h3>
                <p className="card-description">Description</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={ChicagoImage} alt="card header"></img>
              </div>
              <div className="card-body">
                <div className="card-logo">
                  <h2>LOGO</h2>
                </div>
                <h3 className="card-title">FCD</h3>
                <p className="card-description">Description</p>
              </div>
            </div>
          </section>
          <section className="columns">
            <div className="card">
              <div className="card-image">
                <img src={CardImage} alt="card header"></img>
              </div>
              <div className="card-body">
                <div className="card-logo">
                  <h2>LOGO</h2>
                </div>
                <h3 className="card-title">FCD</h3>
                <p className="card-description">Description</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={CardImage} alt="card header"></img>
              </div>
              <div className="card-body">
                <div className="card-logo">
                  <h2>LOGO</h2>
                </div>
                <h3 className="card-title">Inductive Loops</h3>
                <p className="card-description">Description</p>
              </div>
            </div>
            <div className="card">
              <div className="card-image">
                <img src={CardImage} alt="card header"></img>
              </div>
              <div className="card-body">
                <div className="card-logo">
                  <h2>LOGO</h2>
                </div>
                <h3 className="card-title">Radar</h3>
                <p className="card-description">Description</p>
              </div>
            </div>
          </section>
          <section className="columns">
            <div className="card">
              <div className="card-image">
                <img src={CardImage} alt="card header"></img>
              </div>
              <div className="card-body">
                <div className="card-logo">
                  <h2>LOGO</h2>
                </div>
                <h3 className="card-title">ANPR</h3>
                <p className="card-description">Description</p>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default DataSources;
