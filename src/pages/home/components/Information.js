import React from 'react'
import './Information.css'
import RulesPoints from './micros/RulesPoints'
import Hack from './../../../assets/hackathena.png'

function Information() {
  return (
    <div className='Information'>
      <div className='rules'>
        <h1>INFORMATION</h1>
        <p>Participants will be given 48 hours to solve a real-world industry problem and create something wonderful out of it! Join us for a Day full of Adventure and Learnings!</p>
        <div className='allpoints'>
          <RulesPoints className="spoint" color={"black"} Desc={"Each team would comprise of 1 to 4 members"} />
          <RulesPoints className="spoint" color={"#BA0403"} Desc={"Team members could be from different institutions as well"} />
          <RulesPoints className="spoint" color={"white"} textcol={"black"} Desc={"The registration begins on 2nd March,2023 and ends on 14th March,2023"} />
          <RulesPoints className="spoint" color={"black"} Desc={"After registration, you have to submit your idea via devfolio before 18th March 2023"} />
          <RulesPoints className="spoint" color={"#BA0403"} Desc={"Submissions will undergo screening and the best of 10 Team them will be selected and the team will get to participate in the in-person hackathon at Jyothi Engineering College."} />
        </div>
      </div>
      <div className='image'>
        <img src={Hack} alt="Hack" />
      </div>
    </div>
  )
}

export default Information
