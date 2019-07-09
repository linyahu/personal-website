import React, { Component } from 'react'



class Home extends Component {
  // render a cool animation with canvas
  state = {
    //    gunmetal, melon, pale pink, columbia blue, wild blue yonder
    // colors: ["#2D3A42", "#F0B3B3", "#F6D5D5", "#C1D1DC", "#9FB7C9"],
    colors: ["#C5C9CB", "#F5CECE", "#FAE8E8", "#D7E1E8", "#C1D1DC", "#2D3A42", "#F0B3B3", "#F6D5D5", "#C1D1DC", "#9FB7C9"],
    // x: Math.floor(Math.random() * Math.floor(1600)),
    // y: Math.floor(Math.random() * Math.floor(900)),
    // z: Math.floor(Math.random() * Math.floor(5)),
  }

  componentDidMount(){
    // setInterval(this.renderTest, 100)
  }

  renderTest = () => {
    // console.log("is this doing anything?");
    const canvas = document.querySelector("#canvas")
    let c = canvas.getContext("2d")

    this.renderAnimation(c)
  }



  renderAnimation = (c) => {
    // c.clearRect(Math.floor(Math.random() * Math.floor(1600)),Math.floor(Math.random() * Math.floor(900)),200,200)
    c.clearRect(0,0,1600,900)




    for (var i = 0; i < 200; i++) {
      this.draw(c)
    }
  }

  draw = (c) => {
    let x = Math.floor(Math.random() * Math.floor(1600))
    let y = Math.floor(Math.random() * Math.floor(900))
    let z = Math.floor(Math.random() * Math.floor(10))

    c.beginPath();
    c.arc(x, y, 5, 0, 2 * Math.PI, false);
    c.fillStyle = this.state.colors[z];
    c.fill();
  }

  render() {


    return (
      <div>
        <canvas id="canvas" width="1600" height="900"></canvas>
      </div>
    )
  }
}

export default Home
