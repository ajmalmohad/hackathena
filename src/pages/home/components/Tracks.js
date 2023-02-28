import React from 'react'
import './Tracks.css'
import box from './img/box.png';
import medicine from './img/medicine.png';
function Tracks() {
  return (
    <div className='Tracks'>
      <br/>
      <span className='Trackheading'>Tracks</span>
      <br/>
      <div className='trackmaindiv'>
        <div className='trackdiv'>
          <img src={box} />
          <br/>
          <br/>
          <span className='trackdivheading'>Open Innovation</span>
          <br/>
          <br/>
          <span className='trackdivpara'>Participants have the freedom to choose their own problem statement based on their interests and expertise.</span>
          <br/>
          <br/>
          <br/>
         
          <span className='trackpopular'>Popular tags</span>
          <br/>
          <br/>
          <div className='trackdivbuttons'>
          <button className='trackdivbutton'>#SolveComplexProblems</button>
          <button className='trackdivbutton'>#InnovateForImpact</button>
          <button className='trackdivbutton'>#ChooseYourChallenge</button>
          <button className='trackdivbutton'>#FollowYourPassion</button>
          <button className='trackdivbutton'>#CreateChange</button>
          <button className='trackdivbutton'>#InnovationWithoutBoundaries</button>
          <button className='trackdivbutton'>#ThinkBig</button>
          <button className='trackdivbutton'>#MakeADifference</button>
          <button className='trackdivbutton'>#EmpowerInnovation</button>
          <button className='trackdivbutton'>#ChangeTheWorld</button>
          </div>
          <br/>
          <br/>
          <br/>
        </div>
        
        <div className='trackdiv'>
          <img src={medicine} />
          <br/>
          <br/>
          <span className='trackdivheading'>No-To Drugs</span>
          <br/>
          <br/>
          <span className='trackdivpara'>Participants in the Open No to Drugs track will need to be passionate about addressing this critical issue, have a strong understanding of technology and innovation, and be able to work collaboratively with others to develop effective solutions.You'll be challenged to think creatively, work quickly and efficiently. and make a real impact on the world.</span>
          <br/>
          <br/>
          <span className='trackpopular'>Popular tags</span>
          <br/>
          <br/>
          <div className='trackdivbuttons'>
          <button className='trackdivbutton'>drug abuse</button>
          <button className='trackdivbutton'>addiction</button>
          <button className='trackdivbutton'>technology</button>
          <button className='trackdivbutton'>innovation</button>
          <button className='trackdivbutton'>collaboration</button>
          <button className='trackdivbutton'>creative thinking</button>
          <button className='trackdivbutton'>social impact</button>
          <button className='trackdivbutton'>public health</button>
          <button className='trackdivbutton'>community</button>
          <button className='trackdivbutton'>prevention</button>
          <button className='trackdivbutton'>treatment</button>
          <button className='trackdivbutton'>intervention</button>
          <button className='trackdivbutton'>substance abuse</button>
          <button className='trackdivbutton'>mental health</button>
          <button className='trackdivbutton'>harm reduction</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tracks