import React from 'react';
import GEM from '../../assets/GEM.svg';
import MSME from '../../assets/MSME.svg';
import SIH from '../../assets/SIH.svg';
import TBI from '../../assets/TBI.svg';

const Sponsors = () => {
  return (
    <div>
      <div className="flex flex-col text-center space-y-5 mt-10" data-aos="fade-up" data-aos-duration="1000">
        {/* Heading */}
        <div>
          <h1 className="lg:text-[53px] md:text-[48px] sm:text-[40px] text-[38px] font-bold dark:text-white">
            Our Sponsors
          </h1>
        </div>

        <div className="overflow-hidden w-full flex justify-center px-8 pt-6 pb-6 dark:bg-white"> {/* Added padding on both sides */}
          <div className="flex animate-slide space-x-8 items-center">
            {/* First set of images */}
            {[GEM, MSME, SIH, TBI, GEM, MSME, SIH, TBI].map((imgSrc, index) => (
              <div key={index} className="flex-shrink-0">
                <img src={imgSrc} alt={`Sponsor ${index}`} className="w-28 " />
              </div>
            ))}
            {/* Second set of images for the loop */}
            {[GEM, MSME, SIH, TBI, GEM, MSME, SIH, TBI].map((imgSrc, index) => (
              <div key={index + 8} className="flex-shrink-0">
                <img src={imgSrc} alt={`Sponsor ${index + 8}`} className="w-24" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
