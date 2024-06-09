import React from 'react'
import CountUp from "react-countup";
import { motion } from 'framer-motion';
import { fadeIn } from '../Counter/variants';
const Counter = () => {
  return (
   <>

{/* counter */}
<motion.div
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 lg:pt-16 pl-4 "
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* CO2 Reduced */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-black/10  after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-2xl sm:text-md font-bold text-blue-950 mb-2 dark:text-white ">
                  <CountUp start={0} end={433247.85} duration={5} /> +
                </div>
                <div className="text-md leading-[1.4] max-w-[100px] dark:text-blue-300">
                  CO2 Reduced
                </div>
              </div>
              {/* Fuel replaced */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-black/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-2xl font-bold text-blue-950 mb-2 dark:text-white ">
                  <CountUp start={0} end={1645245} duration={5} /> + 
                </div>
                <div className="text-md    leading-[1.4] max-w-[200px] dark:text-blue-300">
                Liters Fuel replaced
                </div>
              </div>
              {/* connections */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-2xl font-bold text-blue-950 mb-2  dark:text-white">
                  <CountUp start={0} end={548415.16} duration={5} /> + 
                </div>
                <div className="text-md    leading-[1.4] max-w-[100px] dark:text-blue-300 ">
                  kWh Charged
                </div>
              </div>
            </div>
          </motion.div>

   </>
  )
}

export default Counter
