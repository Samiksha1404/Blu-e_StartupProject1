import React from 'react'
import elipse from '../../assets/elipse.svg'
import evCharge from '../../assets/evCharge.svg'
import evMap from '../../assets/evMap.svg'

const HomeSubpage9 = () => {
  return (
    <div >
         
        <div className="flex flex-col  items-center text-center mt-5">
            {/* heading */}
            <div className="" data-aos="flip-left" data-aos-duration="2000">
             <h1 className="lg:text-[53px] md:text-[42px] sm:text-[32px] text-[28px] font-semibold bg-gradient-to-r from-blue-900 via-indigo-800 to-yellow-400 dark:bg-gradient-to-r dark:from-blue-700 dark:via-indigo-500 dark:to-yellow-300 inline-block text-transparent bg-clip-text">Charging In All Parts Of The Country</h1>
            </div>


             {/* world map */}
            <div className="flex flex-col items-center mt-6">
                <img src={evMap} alt="word-MAp" className='absolute lg:w-[764px] w-0 z-10'  data-aos="flip-up" data-aos-duration="2000"/>
            </div>


        <div className="flex flex-col md:flex-row w-full  justify-around items-center md:mt-9 mt-[-20px] md:space-y-0 space-y-6 ">
            {/* left */}
            <div className="md:mr-0 mr-[95px]"  data-aos="fade-left" data-aos-duration="2000">
              
            <div class="md:space-y-5  space-y-2 mt-8 md:mx-1 mx-auto px-6  text-left">
            <h1 class="text-indigo-950 dark:text-indigo-400/50 md:text-[42px] text-2xl font-semibold ">EV Charging</h1>
            <h2 class="text-yellow-700 font-semibold md:text-2xl text-xl md:pb-7">In 3 Simple Steps</h2>
            <ul class="space-y-2 md:text-xl  text-slate-800 dark:text-slate-500">
              <li class="flex space-x-3 "><img src={elipse} alt="" class="w-5 mt-1"/><p><span className=' font-bold'>Discover</span> Charging Stations</p></li>
              <li class="flex space-x-3 "><img src={elipse} alt="" class="w-5 mt-1"/><p> <span className=' font-bold'>Charge</span> seamlessly</p></li>
              <li class="flex space-x-3 "><img src={elipse} alt="" class="w-5 mt-1"/><p> <span className=' font-bold'>Pay</span>  conveniently</p></li>
            </ul>
          </div>

            </div>
            
            {/* right */}
            <div className="" data-aos="fade-right" data-aos-duration="2000">
              <img src={evCharge} alt="" className='lg:w-[682px] lg:h-[472px] ' />
            </div>

        </div>

        </div>
    </div>
  )
}

export default HomeSubpage9