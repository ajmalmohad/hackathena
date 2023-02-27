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


function Home() {
  return (
    <div className='Home'>
      <Hero />
      <Welcome />
      <Description />
      <Information />
      <Timeline />
      <Tracks />
      <Prizes />
      <Sponsors />
      <Judges />
    </div>
  )
}

export default Home