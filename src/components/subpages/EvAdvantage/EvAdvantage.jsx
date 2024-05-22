import React from 'react'
import Card from './Card'

import chStation from '../../../assets/chStation.svg'

const EvAdvantage = () => {
  return (
    <div data-aos="slide-up" data-aos-duration="4000">
      <div className="flex flex-col lg:space-y-20 items-center my-10">
        {/* heading */}
        <div className="">
          <p className="md:text-[48px] text-[32px] font-bold dark:text-slate-200  text-center mb-5 ">What advantages will you get using 
EV Charger?</p>
        </div>

        <div className="grid grid-cols-3 mx-4">

          {/* left */}
          <div className="">
          <Card property="items-start" heading="High quality" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna"/>
          <Card  heading="Recoverable energy" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna"/>
          <Card  heading="Smart connected " content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna"/>
          </div>

          {/* center image */}

          <div className="">
            <img src={chStation} alt="" className="rounded-lg   " />
          </div>
          
          {/* right */}
          <div className="">
           <Card property="items-end text-right" heading="Quick installation" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna"/>
           <Card property="items-end text-right" heading="Free Support" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna"/>
           <Card property="items-end text-right" heading="Access control" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna"/>
          </div>


        </div>

      </div>
    </div>
  )
}

export default EvAdvantage