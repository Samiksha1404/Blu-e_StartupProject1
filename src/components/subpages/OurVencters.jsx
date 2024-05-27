import React from 'react';
import ev1 from '../../assets/ev1.svg';
import ev2 from '../../assets/MG.png';
import ev3 from '../../assets/WCL.png';
import ev4 from '../../assets/ev4 (2).png';
import ev5 from '../../assets/ev5 (2).png';
import ev6 from '../../assets/ev6.png';
import ev7 from '../../assets/ev7.png';

const OurVentures = () => {
  return (
    <div>
      <div className="flex flex-col text-center space-y-5 mt-8 mb-8 " data-aos="fade-up" data-aos-duration="1000">
        {/* Heading */}
        <div>
          <h1 className="lg:text-[53px] md:text-[48px] sm:text-[40px] text-[38px] font-bold dark:text-slate-400">
            We serve top ventures
          </h1>
        </div>

        <div className="overflow-hidden w-full flex justify-center items-center px-8 pt-6 pb-6 dark:bg-white">
          <div className="flex animate-slide space-x-8 items-center">
            {/* First set of images */}
            {[ev1, ev2, ev3, ev4, ev5, ev7, ev6].map((imgSrc, index) => (
              <div key={index} className="flex-shrink-0">
                <img src={imgSrc} alt={`Sponsor ${index}`} className="w-28" />
              </div>
            ))}
            {/* Duplicate set of images for the loop */}
            {[ev1, ev2, ev3, ev4, ev5, ev7, ev6].map((imgSrc, index) => (
              <div key={index + 8} className="flex-shrink-0">
                <img src={imgSrc} alt={`Sponsor ${index + 8}`} className="w-28" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVentures;


