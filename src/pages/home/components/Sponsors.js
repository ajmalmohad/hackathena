import React from 'react'
import './Sponsors.css'
import cesa from './logos/cesa.png'
import csi from './logos/csi.png'
import devfolio from './logos/devfolio.png'
import filecoin from './logos/filecoin.png'
import iedc from './logos/iedc.png'
import maqlink from './logos/maqlink.png'
import nintriva from './logos/nintriva.png'
import ozalya from './logos/ozalya.png'
import polygon from './logos/polygon.png'
import replit from './logos/replit.png'
import solana from './logos/solana.png'
import xtruder from './logos/xtruder.png'
function Sponsors() {
  return (
    <div className='Sponsors'>
      <br />
      <h1 className='sponsersheading'>Sponsors</h1>
      <div className='sponsertier'>

        <div className='diamondtier'>
          <h1 clasName='tierheading1'>DIAMOND TIER</h1>
          <br />
          <img src={maqlink} alt="Sponser" />
        </div>

        <div className='goldtier'>
          <h1 clasName='tierheading2'>GOLD TIER</h1>
          <br />
          <img src={xtruder} alt="Sponser" />
          <img src={nintriva} alt="Sponser" />
          <img src={polygon} alt="Sponser" />
          <img src={devfolio} alt="Sponser" />
        </div>

        <div className='silvertier'>
          <h1 clasName='tierheading3'>SILVER TIER</h1>
          <br />
            <img src={filecoin} alt="Sponser" />
            <img src={solana} alt="Sponser" />
            <img src={ozalya} alt="Sponser" />
            <img src={replit} alt="Sponser" />
        </div>

        <div className='organisers'>
          <h1 clasName='organised'>Organised by</h1>
            <img src={cesa} alt="Sponser" />
            <img src={iedc} alt="Sponser" />
            <img src={csi} alt="Sponser" />
        </div>
      </div>
    </div>
  )
}

export default Sponsors