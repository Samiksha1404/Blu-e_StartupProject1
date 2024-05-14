import React from 'react'
import GradientText from '../../components/subpages/GradientText.jsx'
import Card6 from '../subpages/HomeSubpage2/HomeSubpage6/Card6'
import s1 from '../../assets/s1.svg'
import s2 from '../../assets/s2.svg'
import s3 from '../../assets/s3.png'
import s4 from '../../assets/s4.svg'
import s5 from '../../assets/s5.svg'
import s6 from '../../assets/s6.svg'
import s7 from '../../assets/s7.svg'
const ServiceSolution = () => {
  return (
    <>
<div className=' '> 
         <div className="">
            <GradientText text="Service Solution"/>
         </div>
         
         <div className="w-full flex flex-col items-center px-2">
         <div className=" lg:w-[1165px] grid grid-cols-3 lg:gap-16 md:gap-8 gap-2  pt-5">
            <Card6 image={s1} title="Revolutionizing EV Charging with Autonomous Convenience"/>
            <Card6 image={s2} title="Easy payment with UPI"/>
            <Card6 image={s7} title="Make money by building network with us"/>
            <Card6 image={s4} title="Real-Time Monitoring Status"/>
            <Card6 image={s5} title="Provides a quality service with minimum down time"/>
            <Card6 image={s6} title="Operative in all seasons"/>
            
        </div>
         </div>
    </div>

    </>
  )
}

export default ServiceSolution
