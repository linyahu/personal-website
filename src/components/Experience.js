import React, { Component } from 'react'

class Experience extends Component {

  render() {
    // each technical project will have a card that flips when clicked/hover on image
    return (
      <div className="outer-container">
        <div className="resume">
        <div className="resume-block">
          <h4>TECHNICAL PROJECTS</h4>
          <div className="sm-card">
            <p>Stock Overflow | <a href=''>Github</a> | <a href="">Live</a> (UN: demo, PW: 1234) </p>
            <ul>
              <li>Stock Overflow is a portfolio management app inspired by the Bloomberg Terminal; users can create custom watchlists on their dashboard and practice trading in their portfolio.</li>
              <li>Full stack app built with a React.js/Redux frontend with a Rails backend and external API for live stock data</li>
            </ul>
          </div>

          <div className="sm-card">
            <p>Rat City | <a href=''>Github</a> | <a href="">Live</a></p>
            <ul>
              <li>MTA-themed 2D side scroller game with fourteen levels; the objective is to collect pizza points, using beer can weapons to defeat bosses while avoiding rats/pigeon obstacles in the way</li>
              <li>Built front-end of the game using vanilla JavaScript, with the HTML5 Canvas element to facilitate frame by frame animations </li>
            </ul>
          </div>

          <div className="sm-card">
            <p>Cher’s Closet | <a href=''> Github</a> | <a href=''>Demo</a> </p>
            <ul>
              <li>Cher’s Closet, inspired by the movie Clueless, is a drag and drop app for users to create customized outfits from their closet.</li>
              <li>Full-stack application built with React.js frontend with a Rails backend; used ActiveStorage for storing images</li>
            </ul>
          </div>
        </div>


        <br />

        <h4>PROFESSIONAL EXPERIENCE</h4>


        <br />

        <h4>EDUCATION</h4>

        <br />

        </div>

        <a href=""> Click here </a> to download in a PDF format
      </div>
    )
  }
}

export default Experience
