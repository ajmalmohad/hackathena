import React from 'react'
import './Information.css'
import RulesPoints from './micros/RulesPoints'
import Hack from './../../../assets/hackathena.png'

function Information() {
  return (
    <div className='Information'>
      <div className='rules'>
        <h1>ANNOUNCEMENTS</h1>
        <p>HACKATHENA will be held from 22nd to 24th April. Shortlisted teams for in-person hackathon are as follows</p>
        <div className='allpoints'>
          <RulesPoints className="spoint" color={"black"}  Desc={"RedFox"} />
          <RulesPoints className="spoint" color={"black"} Desc={"Don't Care"} />
          <RulesPoints className="spoint" color={"black"} Desc={"Levantate"} />
          <RulesPoints className="spoint" color={"black"} Desc={"BugsBounty"} />
          <RulesPoints className="spoint" color={"black"} Desc={"The Loop"} />
          <RulesPoints className="spoint" color={"black"} Desc={"MAXQ 1017"} />
          <RulesPoints className="spoint" color={"black"} Desc={"Debuggers"} />
          <RulesPoints className="spoint" color={"black"} Desc={"Tri Tech"} />
          <RulesPoints className="spoint" color={"black"} Desc={"Baymax"} />
          <RulesPoints className="spoint" color={"black"} Desc={"Hello World"} />
        </div>
      </div>
      <div className='image'>
        <img src={Hack} alt="Hack" />
      </div>
    </div>
  )
}

export default Information
