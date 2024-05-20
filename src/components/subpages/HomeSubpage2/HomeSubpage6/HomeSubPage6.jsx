import React from 'react'
import Card6 from './Card6'
import c1 from "../../../../assets/c6_1.svg"
import c2 from "../../../../assets/c6_2.svg"
import c3 from "../../../../assets/c6_3.svg"
import c4 from "../../../../assets/c6_4.svg"

const HomeSubPage6 = () => {
  return (
    <div className='bg-yellow-400 dark:bg-slate-800  flex flex-col justify-center items-center gap-10 ' data-aos="slide-up" data-aos-duration="4000">
        <div className="">
          <p className="lg:text-[38px] md:text-[28px] text-[25px]  text-center font-bold pt-5 dark:text-slate-100 ">Key differentiators of <br />
BLU-E</p>
        </div>

        {/* // cards */}

        <div className=" lg:flex items-center justify-center  flex-wrap mx-4 mb-5 grid grid-cols-2" style={{ gap: '1.5rem' }}>
          <Card6 image={c1} title="Fast charging" content="All charging stations will have fast chargers for customer convenience."/>
          <Card6 image={c2} title="BLU-E Charge App" content="Cashless charging stations will operate through the BLU-E Charge App."/>
          <Card6 image={c3} title="Fluid payment options" content="All modes of payment - Net banking, Credit card, Debit card, UPI or Wallet are accepted."/>
          <Card6 image={c4} title="Take a break" content="The charging stations will include the Wild Bean Café for a quick personal recharge."/>
        </div>
    </div>
  )
}

export default HomeSubPage6