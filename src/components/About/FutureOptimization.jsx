import React from 'react'
import Card6 from '../subpages/HomeSubpage2/HomeSubpage6/Card6'
import f1 from '../../assets/f1.svg'
import f2 from '../../assets/f2.svg'
import f3 from '../../assets/f3.svg'
import f4 from '../../assets/f4.svg'
import f5 from '../../assets/f5.svg'
import f6 from '../../assets/f6.svg'
import GradientText from '../subpages/GradientText'

const FutureOptimization = () => {
  return (
    <div className=' '> 
         <div className="">
            <GradientText text="Future Optimization"/>
         </div>
         
         <div className="w-full flex flex-col items-center px-2">
         <div className=" lg:w-[1165px] grid grid-cols-3 lg:gap-16 md:gap-8 gap-2  pt-5">
            <Card6 image={f1} title="AI-Powered predictive maintenance"/>
            <Card6 image={f2} title="Interoperability withother CPOs"/>
            <Card6 image={f3} title="Dynamic Pricing Strategy"/>
            <Card6 image={f4} title="Vehicle-to-Grid Integration"/>
            <Card6 image={f5} title="Chargers with screen for advertising"/>
            <Card6 image={f6} title="Memberships and Rewards"/>
        </div>
         </div>
    </div>
  )
}

export default FutureOptimization