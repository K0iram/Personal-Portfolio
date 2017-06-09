import React, { Component } from 'react'
import profilePic from './four_wheeler.png'
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'

import './style.css'


class Home extends Component {
  
  componentDidMount() {
    configureAnchors({keepLastAnchorHash: false, scrollDuration: 1000})
  }

  render() {
    return (
      <div className="about">
        <div className="title">
          <div className="title-box">
          <h1>Mario Kennedy</h1>
          <h5>WEB DEVELOPER</h5>

          <a href="#description"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <title>chevron-thin-down</title>
          <path d="M17.418 6.109c0.272-0.268 0.709-0.268 0.979 0s0.271 0.701 0 0.969l-7.908 7.83c-0.27 0.268-0.707 0.268-0.979 0l-7.908-7.83c-0.27-0.268-0.27-0.701 0-0.969s0.709-0.268 0.979 0l7.419 7.141 7.418-7.141z"></path>
          </svg></a>

          </div>
        </div>
        <ScrollableAnchor id='description'>
        <div className="description">
          <img src={profilePic} alt='Profile Picture' />
          <br/>
          <h5>ABOUT ME</h5>
          <p>My name is Mario, and I am a web developer. I started in this industry to make cool applications
          people can use every day. I've worked a number of odd jobs before making the move to tech, which
          means I have an extensive collection of nametags and hairnets. Web development is the perfect fit me 
          for because it, like my life, is always changing. I strive to make kick-ass web apps with like-minded 
          people that have a vision of changing the world.
          </p>
          <a href="#social" className="down-arrow"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <title>chevron-thin-down</title>
          <path d="M17.418 6.109c0.272-0.268 0.709-0.268 0.979 0s0.271 0.701 0 0.969l-7.908 7.83c-0.27 0.268-0.707 0.268-0.979 0l-7.908-7.83c-0.27-0.268-0.27-0.701 0-0.969s0.709-0.268 0.979 0l7.419 7.141 7.418-7.141z"></path>
        </svg></a>
        </div>
        </ScrollableAnchor>

        
      </div>
    )
  }
}

export default Home;
