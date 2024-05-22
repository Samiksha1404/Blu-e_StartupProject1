import React from 'react'

import GradientText from '../subpages/GradientText'
import FutureIsNow from './FutureIsNow'
import Card6 from '../subpages/HomeSubpage2/HomeSubpage6/Card6'
import im1 from "../../assets/im1.svg"
import im2 from "../../assets/im2.svg"
import im3 from "../../assets/im3.svg"
import im4 from "../../assets/im4.svg"
import FutureOptimization from './FutureOptimization'
import v1 from "../../assets/aboutvideo.mp4"
import HowWeWork from './HowWeWork '
import Founders from './Founders'
import AboutIntropart from './AboutIntropart'

function About() {
  return (
    <>

  {/* <div className="herosection sm:h-screen md:h-auto" >
    <div className="imgContainer relative overflow-hidden">
       <video src={v1} className="w-full h-auto sm:h-full filter brightness-75  " ></video> 
      <div className="content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h1 className="text-white text-4xl sm:text-6xl font-semibold">About Us</h1>
        <p className="text-white text-lg sm:text-xl font-light pb-4 sm:pb-10">We’re Revolutionising<br />EV charging experience in India</p>
        <button className="herobutton inline-block bg-blue-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg">SERVICES ></button>
      </div>
    </div>
  </div> */}

  <div className="App">
      <AboutIntropart
        videoSrc={v1}
        title="About Us"
        description="We’re Revolutionising"
        description1="EV charging experience in India"
      />
    </div>


       {/* who we are section */}
       
      <div className="whoWeAreSection">
  <div className="container flex flex-col justify-center items-center gap-4 lg:w-[1195px] md:mx-auto mx-4 pt-4">
    <GradientText text="Who We Are" />

    <div className="aboutInfo pt-5 md:mx-5 text-slate-800 dark:text-slate-400 md:text-lg text-[15px] text-justify item-center gap-2">
      <span className="font-bold ">Shashtav Charging Bharat Private Limited </span>
      <span className="mt-2 text-justify">
        is a MSME registered and Startup India recognized startup by two young Indian entrepreneurs with a brand name as BLU-E. India is extensively transforming into E-mobilities and a new shift to a BEV (Battery Electric Vehicles) is imminent for a next-generation development.
      </span>

      <p className="mt-4 text-justify">
        Blu-E is a smart independent charging platform working as a CPO (Charge Point Operator). Our aim is to develop smart charging stations across the nation with minimum charges and 24/7 operation. We provide hybrid chargers at sites which will lessen user’s time and energy. We mainly focus on creating connected networks in various commercial public places i.e., (restaurants, malls, institutes, offices (private/govt.), apartments, complexes, multiplexes, parks, fleets, hospitals, and highways). Development of large EV infrastructure with easy and sustainable operation will give a boost for further growth in EV adoption in India. In coming times under a standard norm, and R&D we will initiate towards more sustainable technologies by adopting solar-powered charging points for complete power independency.
      </p>
      <p className="mt-4 text-justify">
        We aim to develop charging stations across smaller cities and remote areas which are neglected by many well-known organizations which will further boost the EV penetration across India. Setting up the EV charging station is a challenging and quite high investment activity. To set up the EV charging infrastructure some requirements need to be fulfilled like (proper location, land, right vendor, grid power, stability, remittance of power, variety of charger types, cables, and other auxiliaries.)
      </p>
      <p className="mt-4 text-justify">
        Therefore, we are here with a unique solution to set up the chargers with standard testing and technical safety of the control system. The existing chargers which are present in India amongst them 28% are nonfunctional due to improper maintenance and other software updates, we at BLU-E will strive to eliminate this problem. A strong technical background support system by BLU-E will channelize regularly at periodic intervals of time to maintain the chargers to prevent the downtime so that it can operate day and night under any weather. With this initiative, we hope to lower the range anxiety which many EV owners face while traveling.
      </p>
    </div>
  </div>
</div>


     <FutureIsNow/>

     
     {/* Delivering Products That Embody... */}
     <div className="">

      {/* heading */}
      <div className="max-w-[600px] mx-auto text-center">
        <GradientText text="Delivering Products  That Embody..."/>
      </div>
      
      {/* cards */}
      <div className="lg:flex grid grid-cols-2  mt-5 justify-evenly  items-center mx-3 bg-slate-200 dark:bg-slate-800 py-6">
        <Card6 image={im1}  title="Responsiveness" content="We strive for 100% transparency in every interaction with stakeholders." />

        <Card6 image={im2}  title="User Experience" content="Our app embraces user-centric design, making it the gold standard in usability." />

        <Card6 image={im3}  title="Quick Charge" content="All charging stations will have fast chargers for customer convenience." />

        <Card6 image={im4}  title="Features" content="We're constantly updating our systems, and application with the latest and greatest." />
      </div>
     </div>
      

      {/* founders */}

      <Founders/>

     {/* Future Optimization */}
      <FutureOptimization/>
     
     <HowWeWork/>


    </>
  )
}

export default About