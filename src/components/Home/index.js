import React, { Component } from 'react'
import './style.css'


class Home extends Component {

  render() {
    return (
      <div className="about">
        <div className="title">
          <div className="title-box">
          <h1>Mario Kennedy</h1>
          <h5>WEB DEVELOPER</h5>
          </div>
        </div>
        <div className="description">
          <br/>
          <h5>ABOUT ME</h5>
          <p>My name is Mario, and I am a web developer. I
            started in this industry to make cool applications people can use
            everyday. I've worked a number of odd jobs before making the move
            to tech, which means I have an extensive collection of nametags
            and hairnets. Web Development is the perfect fit me for because it,
            like my life, is always changing. I strive to make kick ass web
            apps with like minded people that have a vision of changing the
            world.
          </p>
        </div>
      </div>
    )
  }
}

export default Home;
