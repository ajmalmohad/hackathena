import React from 'react'
import './Hero.css'
import Logo from './../../../assets/logo.png'
// import Date from './../../../assets/date.png'
import Devfolio from './../../../assets/devfolio.png'

function Hero() {
  return (
    <div className='Hero'>
      <main>
        <div className='thelogo'>
          <img src={Logo} alt="Logo" />
          <div className='content'>
            <h1>Hack<span>A</span>thena</h1>
            <p>Hack the Difference</p>
          </div>
        </div>
        <div className='date'>
        {/* <img src={Date} alt="Logo" /> */}
        <p>APRIL 22 23 24</p>
          <br/>
        </div>
        <div className='buttons'>
          <button className='devfolio'> <img src={Devfolio} alt="Devfolio" /> <a href='https://hackathena.devfolio.co/' target="_blank" rel="noopener noreferrer">Applications Closed</a></button>
          <button ><a href='https://drive.google.com/file/d/1s59byd010X3Ezi0EyxamJVRxbIiK3Yx5/view?usp=share_link' target="_blank" rel="noopener noreferrer"> Brochure </a></button>
          <button><a href='https://discord.gg/PWa22qKb6r' target="_blank" rel="noopener noreferrer">Join Discord</a> </button>
        </div>
      </main>
    </div>
  )
}

export default Hero
