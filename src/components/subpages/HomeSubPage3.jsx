import React from 'react'
import Home3 from "../../assets/homeSub3.svg"
const HomeSubPage3 = () => {
  return (
    <div className='mt-8' data-aos="fade-up" data-aos-duration="1000">
      <div className="flex flex-col justify-center items-center mx-4 gap-5">
       <p className="lg:text-[59px] md:text-[42px] text-[32px] font-bold  bg-clip-text text-transparent bg-slate-900 dark:bg-gradient-to-r from-yellow-300 to-slate-400  text-center ">The Future of EV Charging</p>
       <p className="text-center md:text-[20px] text-[16px] text-slate-600 dark:text-slate-400 lg:w-[681px] ">We are a company dedicated to providing Reliable, Efficient and Affordable 
charging solutions for the growing electric vehicle market in India.</p>
      </div>
      <div className="mt-5">
        <img src={Home3} alt="" className="" />
      </div>
    </div>
  )
}

export default HomeSubPage3