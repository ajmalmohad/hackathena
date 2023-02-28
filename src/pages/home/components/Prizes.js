import React from 'react'
import './Prizes.css'

function Prizes() {
  return (
    <div className='Prizes'>
      <h1>Prizes and Rewards</h1>
      <div className='allprizes'>
        <div className='prize'>
          <h3 className='position'>1st</h3>
          <h2 className='amount'>₹30K</h2>
          <h3 className='rupees'>cash</h3>
        </div>
        <div className='prize'>
          <h3 className='position'>2nd</h3>
          <h2 className='amount'>₹20K</h2>
          <h3 className='rupees'>cash</h3>
        </div>
        <div className='prize'>
          <h3 className='position'>3rd</h3>
          <h2 className='amount'>₹10K</h2>
          <h3 className='rupees'>cash</h3>
        </div>
      </div>
      <h1>Special Prizes</h1>
      <div className='specialprizes'>
        <div className='prize'>
          <h2 className='amount'>₹3K</h2>
          <h4 className='rupees'>cash</h4>
          <h5>Top project on theme No-to drugs</h5>
        </div>
      </div>
    </div>
  )
}

export default Prizes