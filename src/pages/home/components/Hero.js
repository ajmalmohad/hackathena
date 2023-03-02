import React from 'react'
import './Hero.css'
import Logo from './../../../assets/logo.png'
import Devfolio from './../../../assets/devfolio.png'

function Hero() {
  return (
    <div className='Hero'>
      <main>
        <div className='thelogo'>
          <img src={Logo} alt="Logo" />
          <div className='content'>
            <h1>Hack<span>A</span>thena</h1>
            <p>Hack the difference</p>
          </div>
        </div>
        <div className='buttons'>
          <button className='devfolio'> <img src={Devfolio} alt="Devfolio" /> Apply with Devfolio</button>
          <button ><a href='https://drive.google.com/file/d/1EWB8HaqMsf7pwwxRKP0u-8XR2d7iXPps/view?usp=share_link'> Brochure </a></button>
          <button><a href='https://discord.gg/PWa22qKb6r'>Join Discord</a> </button>
        </div>
      </main>
    </div>
  )
}

export default Hero