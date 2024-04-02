import React, { useState, useEffect } from 'react';
import "./Herosection.css";
import heroSec from '../../../assets/herosectionimg.png'
import img2 from '../../../assets/2.jpg'
import img3 from '../../../assets/3.jpg'
import img4 from '../../../assets/4.jpg'

const Herosection = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => {
        const newCounter = prevCounter >= 4 ? 1 : prevCounter + 1;
        document.getElementById('radio' + newCounter).checked = true;
        return newCounter;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="slider">
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />

          {/* slide image start */}
          <div className="slide first">
            <img src={heroSec} alt="" />
          </div>

          <div className="slide">
            <img src={img2} alt="" />
          </div>
          <div className="slide">
            <img src={img3} alt="" />
          </div>
          <div className="slide">
            <img src={img4} alt="" />
          </div>

          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
        </div>
        <div className="navigation-manual">
          <label htmlFor="radio1" className='manual-btn'></label>
          <label htmlFor="radio2" className='manual-btn'></label>
          <label htmlFor="radio3" className='manual-btn'></label>
          <label htmlFor="radio4" className='manual-btn'></label>
        </div>
      </div>
    </>
  );
}

export default Herosection;



