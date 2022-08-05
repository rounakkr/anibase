import React from "react"
import './Header.css';

function Header() {
  return (
    <div>
      <div className="header">
        <h1>anibase</h1>
      </div>
      <div className="description">
        <h2>Hello! I am Rounak Kumar Rana</h2>
        <p>
          I have made this webapp solely for my study purpose. I was learning <strong>ReactJS</strong> through this project.
          In this I have used <strong>JIKAN API</strong> to fetch details of anime and manga. You can search for your required anime, manga or character using above searchbox.
        </p>
        <h3>Thank You</h3>
      </div>
    </div>
  )
}

export default Header