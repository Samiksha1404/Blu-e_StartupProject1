import React from 'react'
import Cards from './Cards'
import first from '../../../assets/first.svg'
import second from '../../../assets/second.svg'
import third from '../../../assets/third.svg'
import charger from '../../../assets/charger.svg'
import callLogo from '../../../assets/callLogo.svg'
import { Link, NavLink } from 'react-router-dom'

const HomeService = () => {
  return (
    <div className='mb-5' data-aos="fade-up">
        <div className="flex justify-around items-center flex-wrap">
        <div className="mt-10 flex items-center justify-center gap-5">
            <img src={callLogo} alt="callLogo" className="" />
            <p className="dark:text-slate-500 underline">Have any questions?</p>
            <p className="text-slate-400">Talk to an expert now!</p>
        </div>

        <div className="flex gap-4 items-center justify-center mb-6">
          <NavLink to="/services">
            <button className="relative md:px-6 md:py-3 px-2 md:text-xl  text-sm font-semibold  text-black rounded-lg group">
            <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-blue-900 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-yellow-400 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
<span class="relative">All Services</span>
            </button>
          </NavLink>
          <NavLink to="/products">
          <button className="relative md:px-6 md:py-3 px-2 md:text-xl  text-sm font-semibold text-black rounded-lg group">
            <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-blue-900 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
<span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-yellow-400 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
<span class="relative">All Products</span>
            </button>
          </NavLink>
        </div>

        </div>
        
        {/* <img src={charger} alt="" className="absolute  md:mt-[-200px] md:w-fit w-20" /> */}

        {/* heading */}
        <div className="flex flex-col space-y-2  items-center ">
         <p className="md:text-[20px] text-[15px] text-slate-500">Vision for the change </p>
         <p className="md:text-[48px] text-[25px] font-semibold dark:text-slate-400
           ">The services we provide</p>
        </div>
        
        {/* wrapped cards */}
        <div className="flex  justify-around items-center mt-4">
            <Cards bgImage={first} service="Energy as a service" />
            <Cards bgImage={second} service="Battery as a service" />
            <Cards bgImage={third} service="Sample Card Title" />
        </div>
    </div>
  )
}

export default HomeService