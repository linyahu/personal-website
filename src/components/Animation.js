import React, { Component } from 'react'

class Animation extends Component {
  state = {
    x: Math.floor(Math.random() * Math.floor(1600)),
    y: Math.floor(Math.random() * Math.floor(900)),
    z: Math.floor(Math.random() * Math.floor(5)),
  }

  componentDidMount(){

  }

  draw = () => {
    c.beginPath();
    c.arc(x, y, 5, 0, 2 * Math.PI, false);
    c.fillStyle = this.state.colors[z];
    c.fill();
  }

  render(){
    return(
      <div>
      </div>
    )
  }

}

export default Animation
