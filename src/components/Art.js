import React, { Component, Fragment } from 'react'

// black and white still life
// import pic1 from '../assets/art/bw1.jpeg'
// import pic2 from '../assets/art/IMG_6947.jpeg'
// import pic3 from '../assets/art/IMG_6950.jpeg'
//
// // vertical watercolor
// import pic4 from '../assets/art/IMG_7206.jpeg'
// import pic5 from '../assets/art/IMG_7207.jpeg'
// import pic6 from '../assets/art/IMG_6957.jpeg'
//
// // horizontal watercolor
// import pic7 from '../assets/art/IMG_6952.jpeg'
// import pic8 from '../assets/art/IMG_6954.jpeg'
// import pic9 from '../assets/art/IMG_6955.jpeg'
//
// // acrylic
// import pic10 from '../assets/art/IMG_6971.jpeg' // van gogh
// import pic11 from '../assets/art/IMG_7202.jpeg'
// import pic12 from '../assets/art/IMG_7203.jpeg'
// import pic13 from '../assets/art/IMG_7204.jpeg'
// import pic14 from '../assets/art/IMG_7205.jpeg'


class Art extends Component {
  state = {
    default: true,
    // art: [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14],
  }

  toggleView = (e) => {
    // console.log(e);
    this.setState(prevState => {
      return { default: !prevState.default}
    })
  }

  renderDefault = () => {
    return(
      <div className="outer-container">
        {
          this.state.art.map( source => {
            return(
              <img src={source} className="thumbnail"/>
            )
          })
        }
      </div>
    )
  }

  renderCarousel = () => {

  }

  render() {
    console.log(this.state.art);
    return(
      <Fragment>
      {
        this.state.default ?
        this.renderDefault()
        :
        this.renderCarousel()
      }
      </Fragment>
    )
  }

}

export default Art

// <img onClick={this.toggleView} className="thumbnail" src={pic1} alt="black and white still life"/>
// <img onClick={this.toggleView} className="thumbnail" src={pic2} alt="black and white still life"/>
// <img onClick={this.toggleView} className="thumbnail" src={pic3} alt="black and white still life"/>
// <br />
// <img onClick={this.toggleView} className="thumbnail" src={pic4} alt="mountain watercolor"/>
// <img onClick={this.toggleView} className="thumbnail" src={pic5} alt="mountain watercolor"/>
// <img onClick={this.toggleView} className="thumbnail" src={pic6} alt="watercolor"/>
// <br />
// <img onClick={this.toggleView} className="thumbnail" src={pic7} alt="watercolor"/>
// <img onClick={this.toggleView} className="thumbnail" src={pic8} alt="watercolor"/>
// <img onClick={this.toggleView} className="thumbnail" src={pic9} alt="watercolor"/>
//
// <img onClick={this.toggleView} className="thumbnail" src={pic10} alt="plain near auvers acrylic"/>
// <img onClick={this.toggleView} className="thumbnail" src={pic11} alt="plain near auvers acrylic"/>
// <img onClick={this.toggleView} className="thumbnail" src={pic12} alt="plain near auvers acrylic"/>
// <img onClick={this.toggleView} className="thumbnail" src={pic13} alt="plain near auvers acrylic"/>
// <img onClick={this.toggleView} className="thumbnail" src={pic14} alt="plain near auvers acrylic"/>
