import React, { Component } from 'react'

class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    body: ""
  }

  render() {
    return (
      <div className="outer-container">
        <form className="contact-form">
          <span>Name</span>
          <input type="text" />
          <br />
          <span>Email</span>
          <input type="text" />
          <br />
          <span>Subject</span>
          <input type="text" />
          <br />
          <input className="body" type="text" />
          <br />
          <input type="submit" value="Send" />
        </form>
      </div>
    )
  }
}

export default Contact
