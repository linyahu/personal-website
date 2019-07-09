import React, { Component, Fragment } from 'react'

import stockoverflow from '../assets/stockoverflow.png'
import ratcity from '../assets/ratcity.png'
import cherscloset from '../assets/cherscloset.png'

class Experience extends Component {

  render() {
    return (
      <Fragment>



      <div className="secondary-nav">
        <div className="navline">
        </div>
        <br />
        <a className="secondary-navlink" href="#technical-projects">TECHNICAL PROJECTS </a>
        <a className="secondary-navlink" href="#professional-experience">PROFESSIONAL EXPERIENCE </a>
        <a className="secondary-navlink" href="#education">EDUCATION</a>
        <a className="secondary-navlink" href="#skills">SKILLS & INTERESTS</a>

      </div>

      <div className="outer-container">
        <div className="second-container">

          <div className="resume-block" id="technical-projects">
            <h3>TECHNICAL PROJECTS</h3>

              <div className="sm-card">
                <p>STOCK OVERFLOW </p>
                <img src={stockoverflow} className="thumbnail"/>
                <p>
                  <a href='https://github.com/lh62594/final-project-frontend' target="_blank">Github</a> |
                  <a href='http://stockoverflow-app.herokuapp.com/home' target="_blank">Live</a> |
                  <a href='https://www.youtube.com/watch?v=IaRqunF6-Y0&t=100s' target="_blank">Demo</a>
                </p>
                <ul>
                  <li>Stock Overflow is a portfolio management app inspired by the Bloomberg Terminal; users can create custom watchlists on their dashboard and practice trading in their portfolio.</li>
                  <li>Full stack app built with a React.js/Redux frontend with a Rails backend and external API for live stock data</li>
                  <li>Login with username: demo, password: 1234</li>
                </ul>
              </div>

              <div className="sm-card">
                <p>RAT CITY GAME</p>
                <img src={ratcity} className="thumbnail"/>

                <p>
                  <a href='https://github.com/lh62594/rat-city-game' target="_blank">Github</a> |
                  <a href='http://ratcity.herokuapp.com/' target="_blank">Live</a> |
                  <a href='https://www.youtube.com/watch?v=DkYIG-Hdb0Q&t=17s' target="_blank">Demo</a></p>
                <ul>
                  <li>Rat City is an MTA-themed 2D side scroller game with 14 levels; the objective is to collect pizza points, using beer can weapons to defeat bosses while avoiding rats/pigeon obstacles in the way</li>
                  <li>Built front-end of the game using vanilla JavaScript, with the HTML5 Canvas element to facilitate frame by frame animations </li>
                </ul>
              </div>

              <div className="sm-card">
                <p>CHER'S CLOSET</p>
                <img src={cherscloset} className="thumbnail"/>
                <p>
                  <a href='https://github.com/lh62594/chers-closet-frontend' target="_blank"> Github</a> |
                  <a href='https://www.youtube.com/watch?v=Pihid6NnCWE&t=29s' target="_blank">Demo</a>
                </p>
                <ul>
                  <li>Cher’s Closet, inspired by the movie Clueless, is a drag and drop app for users to create customized outfits from clothes in their closet.</li>
                  <li>Full-stack application built with React.js frontend with a Rails backend; used ActiveStorage for storing images</li>
                </ul>
              </div>
          </div>


          <div className="resume-block" id="professional-experience">
            <h3>PROFESSIONAL EXPERIENCE</h3>
            <br />
            <h5>Société Générale | Strategic Transactions Group | Jan 2018 - Oct 2018 </h5>
            <div className="experience-block">
              <ul>
                <li>Internally recruited to an elite team of 4 to structure bespoke complex derivatives solutions that generated P&L from $25k to $2mm per trade</li>
                <li>Worked hand-in-hand with leadership to negotiate largest margin loan in bank history ($400mm); personally pitched tailored solutions & drove creation of pitch materials & strategies </li>
                <li>Designed and built client-facing tools for visualizing margin loan impact on clients’ IRR and collateral liquidation strategies for margin loans on convertible bonds</li>
                <li>Solved internal application issues by building dynamic programs with VBA: </li>
                  <ul>
                    <li>automated valuation report generator for products with compounding interest</li>
                    <li>trade database that tracks cumulative and daily P&L changes</li>
                    <li>margin loan monitor that calculates daily cash flow and tracks interest rate resets</li>
                  </ul>
              </ul>
            </div>
            <br />
            <h5>Société Générale | Equity Derivatives Flow | Jul 2016 - Jan 2018 </h5>
            <div className="experience-block">
              <ul>
                <li>Covered >12 hedge fund clients w. products ranging from vanilla options to exotic derivatives; & insurance clients trading complex index option strategies: calendar spreads, call ratios, rainbows, cliquets & hybrids </li>
                <li>Single-handedly trained three replacement analysts and created a thorough training manual (~90 pages) that has continued to be used by the team after departure; training manual covered holistic product lines and client trading strategies </li>
                <li>Attended client meetings to procure new business </li>
                <li>Selected to spearhead the creation of a new pricing and booking tool that would grow the insurance business to over $16mm a year from $8mm a year</li>
              </ul>
            </div>

          </div>


          <div className="resume-block" id="education">
            <h3>EDUCATION</h3>
            <div className="experience-block">
              <div className="education-heading">
                <h5> Flatiron School
                <br /> New York, NY
                <br /> Spring 2019 </h5>
              </div>

              <div className="education-body">
                <ul>
                  <li>Immersive full-stack software engineering program with technical focus on JavaScript and Ruby frameworks</li>
                  <li>Created 4 fully functioning applications using Ruby on Rails, vanilla JavaScript, React, and Redux</li>
                </ul>
              </div>
            </div>
            <br />

            <div className="experience-block">

              <div className="education-block">
              <div className="education-heading">
                <h5> New York University
                <br />
                New York, NY
                <br />
                B.S. Winter 2016 </h5>
              </div>

              <div className="education-body">
              <ul>
                <li>Leonard N. Stern School of Business B.S., Finance & Management, GPA: 3.7 </li>
                <li>Awards: Irving H. Isaac Scholarship; Joan & Dan Holmes Scholarship; Suh Family Scholarship </li>
                <li>Teacher’s Assistant by invitation, International Financial Management, Fall 2015 </li>
                <li>Activities: </li>
                  <ul>
                    <li>Director of Marketing & Secretary, Politics Society at NYU, Fall 2014 - Winter 2016</li>
                    <li>Director of Marketing, Luxury and Retail Association, Fall 2015</li>
                  </ul>
              </ul>
              </div>
              </div>

            </div>
          </div>

          <div className="resume-block" id="skills">
            <div className="experience-block">
              <h3>SKILLS & INTERESTS</h3>
              <ul>
                <li>Spoken Languages: Fluent Mandarin Chinese; Conversational French </li>
                <li>Technical Skills: VBA, HTML/CSS, Ruby/Ruby on Rails, SQL, JavaScript, React, Redux, Python </li>
                <li>Other Skills: Proficient in Excel modeling; advanced knowledge of Bloomberg terminal; proficient in PowerPoint template building & deck design; public speaking & pitching</li>
                <li>Interests: passionate artist, focusing on acrylic painting & drawing; dabbling in fashion design & couture gown making; cooking & baking comfort food; avid globe trotter</li>
              </ul>
            </div>
          </div>


        </div>

        <a href="">Click here</a> to download in a PDF format
      </div>
      </Fragment>
    )
  }
}

export default Experience
