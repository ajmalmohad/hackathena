import React from 'react'
import './Footer.css'
import Jyothi from './../assets/jyothi.png'
import Insta from './../assets/Vector.png'

function Footer() {
  return (
    <div className='Footer'>
      <main>
      <div className='left'>
      <img src={Jyothi} alt="Jyothi" />
      <p>Jyothi Engineering College</p>
      </div>
      <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.090335508201!2d76.28777251452807!3d10.727515692354697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7dcdc5d78c9a1%3A0x37f9c68d4eb72174!2sJyothi%20Engineering%20College%2C%20Cheruthuruthy%2C%20Thrissur!5e0!3m2!1sen!2sin!4v1676615950134!5m2!1sen!2sin" width="340" height="150" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </main>
      <div className='links'>
        <img src={Insta} alt="Instagram" />
        </div>
        <div className='others'>
              <a href="/#">Discord</a>
              <a href="/#">University</a>
        </div>
    </div>
  )
}

export default Footer