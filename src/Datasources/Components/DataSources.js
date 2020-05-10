import React, { Component } from 'react';
import '../css/DataSources.css';

class DataSources extends Component {
  render() {
    return (
      <div className="Datasource-page">
        <header>HEADER IMAGE</header>
        <section className="card-container">
          <section className="column-one">
            <div className="card">
              <div className="card-image">IMAGE 1</div>
              <div className="card-body">column-one</div>
            </div>
            <div className="card">
              <div className="card-image">IMAGE 2</div>
              <div className="card-body">column-one</div>
            </div>
            <div className="card">
              <div className="card-image">IMAGE 3</div>
              <div className="card-body">column-one</div>
            </div>
            <div className="card">
              <div className="card-image">IMAGE 4</div>
              <div className="card-body">column-one</div>
            </div>
          </section>
          <section className="column-two">
            <div className="card">
              <div className="card-image">IMAGE 1</div>
              <div className="card-body">column-two</div>
            </div>
            <div className="card">
              <div className="card-image">IMAGE 2</div>
              <div className="card-body">column-two</div>
            </div>
            <div className="card">
              <div className="card-image">IMAGE 3</div>
              <div className="card-body">column-two</div>
            </div>
            <div className="card">
              <div className="card-image">IMAGE 4</div>
              <div className="card-body">column-two</div>
            </div>
          </section>
          <section className="column-three">
            <div className="card">
              <div className="card-image">IMAGE 1</div>
              <div className="card-body">column-three</div>
            </div>
            <div className="card">
              <div className="card-image">IMAGE 2</div>
              <div className="card-body">column-three</div>
            </div>
            <div className="card">
              <div className="card-image">IMAGE 3</div>
              <div className="card-body">column-three</div>
            </div>
            <div className="card">
              <div className="card-image">IMAGE 4</div>
              <div className="card-body">column-three</div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default DataSources;
