import React from 'react'
import IntroPart from '../subcomponents/IntroPart'
import img1 from "../../assets/Station2.jpg"

function About() {
  return (
    <>

      <IntroPart
        imgSrc={img1}
        title="About Us"
        description="We’re Revolutionising"
        description1="EV charging experience in India"
        buttonText="SERVICES > "
      />


      <div className="whoWeAreSection w-full h-full pt-20 pb-20 px-40 py-40 flex flex-col justify-end items-start gap-4">
        <div className="container">
          <h1 className="text-center bg-gradient-to-r from-blue-500 to-yellow-300 text-transparent bg-clip-text font-bold text-4xl md:text-5xl xl:text-6xl leading-tight font-serif">Who We Are</h1>

          <div className="aboutInfo pt-5 ">
            <span className="font-bold ">Shashtav Charging Bharat Private Limited</span>
            <span className=" mt-2 text-justify">
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
      
      


    </>
  )
}

export default About