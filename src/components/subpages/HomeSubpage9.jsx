import React from 'react'
import elipse from '../../assets/elipse.svg'
import evCharge from '../../assets/evCharge.svg'
const HomeSubpage9 = () => {
  return (
    <div>
         
        <div className="flex flex-col  items-center text-center">
            {/* heading */}
            <div className="">
             <h1 className="lg:text-[53px] md:text-[42px] sm:text-[32px] text-[28px] font-semibold bg-gradient-to-r from-blue-900 via-indigo-800 to-yellow-400 inline-block text-transparent bg-clip-text">Charging In All Parts Of The Country</h1>
            </div>

        <div className="flex flex-col md:flex-row w-full  justify-around items-center md:mt-9 mt-[-20px]">
            {/* left */}
            <div className="">
              
            <div class="space-y-5 mt-8 md:mx-1 mx-auto px-6  text-left">
            <h1 class="text-indigo-950 dark:text-indigo-400/50 md:text-[42px] text-3xl font-semibold ">EV Charging</h1>
            <h2 class="text-yellow-700 font-semibold md:text-2xl text-xl pb-7">In 3 Simple Steps</h2>
            <ul class="space-y-2 md:text-xl  text-slate-800 dark:text-slate-500">
              <li class="flex space-x-3 "><img src={elipse} alt="" class="w-5 mt-1"/><p><span className=' font-bold'>Discover</span> Charging Stations</p></li>
              <li class="flex space-x-3 "><img src={elipse} alt="" class="w-5 mt-1"/><p> <span className=' font-bold'>Charge</span> seamlessly</p></li>
              <li class="flex space-x-3 "><img src={elipse} alt="" class="w-5 mt-1"/><p> <span className=' font-bold'>Pay</span>  conveniently</p></li>
            </ul>
          </div>

            </div>
            
            {/* right */}
            <div className="">
              <img src={evCharge} alt="" className='lg:w-[682px] lg:h-[472px] '/>
            </div>

        </div>

        </div>
    </div>
  )
}

export default HomeSubpage9