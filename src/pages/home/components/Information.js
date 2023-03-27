import React from 'react'
import './Information.css'
import RulesPoints from './micros/RulesPoints'
import Hack from './../../../assets/hackathena.png'

function Information() {
  return (
    <div className='Information'>
      <div className='rules'>
        <h1>INFORMATION</h1>
        <p>HACKATHENA will be held from 28th April to 30th April</p>
        <div className='allpoints'>
          <RulesPoints className="spoint" color={"black"} Desc={"Each team should comprise of 3 to 4 members"} />
          <RulesPoints className="spoint" color={"#BA0403"} Desc={"Team members could be from different institutions as well"} />
          <RulesPoints className="spoint" color={"white"} textcol={"black"} Desc={"The registration is now closed"} />
          <RulesPoints className="spoint" color={"black"} Desc={"Shortlisted teams will be announced soon!"} />
          <RulesPoints className="spoint" color={"#BA0403"} Desc={"Submissions will undergo screening and the best 10 Teams selected will get to participate in the in-person hackathon at Jyothi Engineering College."} />
        </div>
      </div>
      <div className='image'>
        <img src={Hack} alt="Hack" />
      </div>
    </div>
  )
}

export default Information
