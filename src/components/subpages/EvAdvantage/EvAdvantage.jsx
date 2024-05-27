import React from 'react'
import Card from './Card'

import pumpimage from '../../../assets/carcharger.png'

const EvAdvantage = () => {
  return (
    <div data-aos="slide-up" data-aos-duration="2000">
      <div className="flex flex-col lg:space-y-20 items-center my-10">
        {/* heading */}
        <div className="">
          <p className="md:text-[48px] text-[32px] font-bold dark:text-slate-200  text-center mb-5 ">What advantages will you get using 
EV Charger?</p>
        </div>

        <div className="grid grid-cols-3 mx-4">

          {/* left */}
          <div className="">
          <Card property="items-start" heading="High Reliability" content="High reliability and low failure rate withlow operation and maintenance costs. Always available, easy to use andprofitable."/>
          <Card  heading="High Efficiency" content="Efficient and power saving. Low heat loss and heat dissipation. Low overall power consumption and operating costs."/>
          <Card  heading="High Safety " content="Dual protection. Active protective function. No fire or electric shock risk. Safety of network and supply."/>
          </div>

          {/* center image */}

          <div className="">
            <img src={pumpimage} alt="" className="rounded-lg  " />
          </div>
          
          {/* right */}
          <div className="">
           <Card property="items-end text-right" heading="Environment friendly" content="Low noise and easy to use. Environment friendly"/>
           <Card property="items-end text-right" heading="Fast charging" content="Constant power output at different voltage and temperatures.
Fast charging capability in all scenarios. Dispatching power according to different demand."/>
           <Card property="items-end text-right" heading="Intelligent" content="Intelligently connect multiple operating devices with information-based remote operation management."/>
          </div>


        </div>

      </div>
    </div>
  )
}

export default EvAdvantage