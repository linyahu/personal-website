import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/App.css';

import { Route, NavLink, Switch } from 'react-router-dom';

import Resume from './Resume'

class App extends Component {

  renderNavBar() {
    return (
      <div>
        <NavLink className="navlink" to="/">HOME</NavLink>
        <NavLink className="navlink" to="/experience">EXPERIENCE</NavLink>
        <NavLink className="navlink" to="/portfolio">PORTFOLIO</NavLink>
        <NavLink className="navlink" to="/contact">CONTACT</NavLink>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        { this.renderNavBar() }
        <Resume />

      </div>
    );
  }
}

export default App;
