import React from 'react'
import Green from '../../../assets/Green.svg'
import './image.css';

const ThoughtLeadership = () => {
  return (
    <div>
        <div className="bg-yellow-400 dark:bg-slate-900 flex items-center flex-col">
            <div className="flex flex-col justify-center items-center p-10">
             
             <h1 className=" lg:text-[103px] md:text-[80px] sm:text-[60px] text-[45px] absolute text-white font-bold mt-8  lg:left-[180px] z-10" data-aos="fade-right" data-aos-duration="2000">Thought <br /> Leadership</h1>
             <figure data-aos="fade-up" data-aos-duration="2000">
             <img src={Green} alt="" className="th-image "/>
             </figure>


             <p className="font-bold text-[21px] text-left lg:w-[441px] mt-5 text-white mx-5 ml-6">Integrating Sustainability into Business  and Corporate Net Zero Strategy</p>
            </div>

            <div className="">
                
            </div>

        </div>
    </div>
  )
}

export default ThoughtLeadership