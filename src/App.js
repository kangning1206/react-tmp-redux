import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ProductionList from './components/productionList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo-wrap">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          {
          // <a
          //   className="App-link"
          //   href="https://reactjs.org"
          //   target="_blank"
          //   rel="noopener noreferrer"
          // >
          //   Learn React
          // </a>
          }
        </header>
        <main>
          <section>
            <ProductionList />
          </section>
        </main>
        <footer className="footer">footer</footer>
      </div>
    );
  }
}

export default App;
