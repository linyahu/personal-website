import React, { Component } from 'react'

class Home extends Component {
  // render a cool animation with canvas

  componentDidMount(){
    this.drawSomething()
  }

  drawSomething() {
    let canvas = document.querySelector("#canvas")
    let c = canvas.getContext("2d")

    c.fillStyle = ("rgb(255,255,255)")
    c.fillRect(350,350,50,50)
  }

  render() {
    return (
      <div>
        <canvas id="canvas" width="500" height="500"></canvas>

      </div>
    )
  }
}

export default Home
