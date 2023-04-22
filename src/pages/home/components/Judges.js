import React, { useEffect, useLayoutEffect, useState , useRef} from 'react'
import JudgCard from './JudgCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';



function Judges() {

  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(4);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const swiperRef = useRef();

  React.useEffect(() => {
    

    function handleResize() {
      if(window.innerWidth < 720){
        setLength(1)
      }
      else if(window.innerWidth < 1125){
        setLength(2)
      }
      else if(window.innerWidth < 1490){
        setLength(3)
      }
      else{
        setLength(4)
      }

}

  handleResize()

    window.addEventListener('resize', handleResize)
  },[])


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