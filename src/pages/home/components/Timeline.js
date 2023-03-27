import React from 'react'
import './Timeline.css'
import { Chrono } from 'react-chrono'

function Timeline() {
  return (
    <div className='Timeline'>
        <h3 >Timeline</h3>
        <Chrono 
          items={[
          { 
            title: "14/03/2023",
            cardTitle: "Registration Deadline",
            cardDetailedText: "HACKATHENA registration open, students can showcase their skills and bring ideas to life."
          },
          {
            title: "14/03/2023",
            cardTitle: `Round 1 Submission`,
            url:'https://docs.google.com/presentation/d/17adQbnaHA5qKjAgMvXtVxYT4QfY4UFKS/edit?usp=sharing&ouid=110435758198613008152&rtpof=true&sd=true',
            cardDetailedText: `Round 1 is the first stage of competition where participants present their ideas in a pdf format to give an overview of the solution (Whether its in text or ppt submit it as pdf).`
          },
          { 
            title: "20/03/2023",
            cardTitle: `Round 1 Results`,
            cardDetailedText: `The results of the idea submission will be released on or before 20/03/2023, and the selected students will move forward to participate in an upcoming offline coding round, where they will have the opportunity to bring their ideas to life .`
          },
          {
            title: "28/04/2023",
            cardTitle: `Round 2 Hackathon Begins`,
            cardDetailedText: `Hackathon starts, showcasing students coding skills and ideas.`
          },
          {
            title: "30/04/2023",
            cardTitle: `Final Showdown`,
            cardDetailedText: `The final showdown round of the hackathon is here, where the top hacks will be presented and a winner will be chosen.`
          }]}
          mode="VERTICAL_ALTERNATING"
          hideControls
          cardHeight="10"
          theme={{primary: "black", secondary: "white",card:"black",cardBgColor: 'black',cardForeColor: 'white',titleColor: 'white',titleColorActive: 'black'}}
          flipLayout
          classNames={{
            card: 'cards',
            cardSubTitle: 'my-card-subtitle',
            cardText: 'my-card-text',
            cardTitle: 'my-card-title',
            title: 'my-title',
          }}
        />
    </div>



    
  )
}

export default Timeline
