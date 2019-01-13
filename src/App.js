import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import ProductionList from './components/productionList';

class App extends Component {
  render() {
    const { footerData } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo-wrap">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </header>
        <main>
          <section>
            <ProductionList />
          </section>
        </main>
        <footer className="footer">
          <div>{footerData.author} · <a href={footerData.github}>GitHub</a></div>
        </footer>
      </div>
    );
  }
}


App.propTypes = {
  footerData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  footerData: state.footerReducer
});

export default connect(mapStateToProps)(App);
