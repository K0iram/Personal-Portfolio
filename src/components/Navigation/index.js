import React, { Component } from 'react'
import './style.css'


class Navigation extends Component {

  render() {
    return (
      <div className="nav-container">
        <div className="nav-header">Mario Kennedy</div>
        <div className="resume-link">
          <a href="#">
          <div>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          <title>profile</title>
          <path d="M27 0h-24c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h24c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM26 28h-22v-24h22v24zM8 18h14v2h-14zM8 22h14v2h-14zM10 9c0-1.657 1.343-3 3-3s3 1.343 3 3c0 1.657-1.343 3-3 3s-3-1.343-3-3zM15 12h-4c-1.65 0-3 0.9-3 2v2h10v-2c0-1.1-1.35-2-3-2z"></path>
          </svg>
          </div>
          My Resume</a>
        </div>
      </div>
    )
  }
}



export default Navigation;
