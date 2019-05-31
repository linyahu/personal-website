import React, { Component } from 'react'

import { NavLink } from 'react-router-dom';

class Portfolio extends Component {
  renderNavBar() {
    return (
      <div className="sub-navbar">
        <NavLink className="sub-navlink" to="/portfolio/art">artwork</NavLink>
        <br />
        <NavLink className="sub-navlink" to="/portfolio/code">technical projects</NavLink>
      </div>
    )
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {
          // this.renderNavBar()
        }
        <h1>this is the portfolio page</h1>
      </div>
    )
  }
}

export default Portfolio
