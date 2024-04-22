import React from 'react'
import Cards from './Cards'
import first from '../../../assets/first.svg'
import second from '../../../assets/second.svg'
import third from '../../../assets/third.svg'
import charger from '../../../assets/charger.svg'
const HomeService = () => {
  return (
    <div className='mb-5'>
        <div className="">
            
        </div>
        
        <img src={charger} alt="" className="absolute  mt-[-200px] " />
        {/* heading */}
        <div className="flex flex-col space-y-2  items-center ">
         <p className="md:text-[20px] text-[15px] text-slate-500">Vision for the change </p>
         <p className="md:text-[48px] text-[25px] font-semibold 
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