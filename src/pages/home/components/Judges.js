import React from 'react'
import bergin from './img/bergin.jpg'
import jovis from './img/jovis.jpg'
import sreekanth from './img/sreekanth.jpg'
import './Judges.css'

function Judges() {

  return (
    <div className="judges-page">
      <h2>Judges</h2>
      <br />
      <br />
      <div className="judges-list">
            <div  className="judge-card">
              <div className="judge-name">Bergin S Russel</div>
              <br/>
              <div className="judge-title">Assistant Manager,KSUM</div>
              <img src={bergin} alt="Box" />
            </div>
            <div  className="judge-card">
              <div className="judge-name">Sreekanth Madhavan</div>
              <br/>
              <div className="judge-title">CEO, Kabani Tech</div>
              <img src={jovis} alt="Box" />
            </div>
            <div  className="judge-card">
              <div className="judge-name">Jovis Aloor</div>
              <br/>
              <div className="judge-title">Co-Founder ,Corner</div>
              <img src={sreekanth} alt="Box" />
            </div>
        </div>
      </div>
  );
}

export default Judges;