import React from 'react'
import './Home.css'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import Description from './components/Description'
import Information from './components/Information'
import Timeline from './components/Timeline'
import Tracks from './components/Tracks'
import Prizes from './components/Prizes'
import Sponsors from './components/Sponsors'
import Judges from './components/Judges'
import Seperator from './components/Seperator'


function Home() {
  return (
    <div className='Home'>
      <Hero />
      <Seperator />
      <Welcome />
      <Seperator />
      <Description />
      <Seperator />
      <Information />
      <Seperator />
      <Timeline />
      <Seperator />
      <Tracks />
      <Seperator />
      <Prizes />
      <Seperator />
      <Sponsors />
      <Seperator />
      {/* <Judges />
      <Seperator /> */}
    </div>
  )
}

export default Home