import React, { Component } from 'react';
import logo from '../assets/logo4.png';
import '../assets/App.css';

import { Route, NavLink, Switch } from 'react-router-dom';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import Home from './Home'
import Experience from './Experience'
import Contact from './Contact'
import Art from './Art'
import Projects from './Projects'

class App extends Component {
  renderNavBar() {
    return (
      <div>
        <div className="navbar">
          <NavLink className="navlink" to="/">HOME</NavLink>
          <NavLink className="navlink" to="/experience">EXPERIENCE</NavLink>
          <NavLink className="navlink" to="/contact">CONTACT</NavLink>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        { this.renderNavBar() }

        <Switch>
          <Route exact path="/" component={props => <Home {...props} />} />
          <Route exact path="/experience" component={props => <Experience {...props} />} />
          <Route exact path="/projects" component={props => <Projects {...props} page="main"/>} />
          <Route exact path="/art" component={props => <Art {...props} page="art"/>} />
          <Route exact path="/contact" component={props => <Contact {...props} />} />

        </Switch>

      </div>
    );
  }
}

export default App;

// <img id="logo" src={logo} width="50" height="50" />
