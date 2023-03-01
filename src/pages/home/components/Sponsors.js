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
      <span className='sponsersheading'>Sponsers</span>
      <div className='sponsertier'>
        <div className='diamondtier'>
          <br/>
          <span clasName='tierheading1'>DIAMOND TIER</span>
          <br/>
          <button className='sponserbutton'>
            <img src={maqlink} />
          </button>
        </div>
        <div className='goldtier'>
          <span clasName='tierheading2'>GOLD TIER</span>
          <br/>
          <button className='sponserbutton1'>
            <img src={xtruder} />
          </button>
          <button className='sponserbutton1'>
            <img src={nintriva} />
          </button>
          <button className='sponserbutton1'>
            <img src={polygon} />
          </button>
          <button className='sponserbutton1'>
            <img src={devfolio} />
          </button>
        </div>
        <div className='silvertier'>
          <span clasName='tierheading3'>SILVER TIER</span>
          <br/>
          <button className='sponserbutton'>
            <img src={filecoin} />
          </button>
          <button className='sponserbutton'>
            <img src={solana} />
          </button>
          <button className='sponserbutton'>
            <img src={ozalya} />
          </button>
          <button className='sponserbutton'>
            <img src={replit} />
          </button>
        </div>
      </div>
      <div className='organisers'>
          <span clasName='organised'>Organised by</span>
          <button className='sponserbutton'>
            <img src={cesa} />
          </button> <button className='sponserbutton'>
            <img src={iedc} />
          </button>
          <button className='sponserbutton'>
            <img src={csi} />
          </button>
        </div>
    </div>
  )
}

export default Sponsors