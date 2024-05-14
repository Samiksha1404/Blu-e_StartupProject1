import React from 'react'
import work from '../../assets/work.svg'

const HowWeWork  = () => {
  return (
    <div className='bg-gradient-to-r from-yellow-300 to-yellow-100 dark:bg-gradient-to-r dark:from-cyan-900 dark:to-slate-800 py-16 px-12'>
        <div className="flex lg:flex-row  flex-col justify-center items-center lg:w-[1209px] mx-auto  gap-8">

            <div className="">
               <img src={work} alt="" className="lg:w-[880px] shadow-md shadow-slate-700 hover:scale-110   duration-500 cursor-pointer  rounded-md" />
            </div>

            <div className="flex flex-col gap-4">
             <p className="lg:text-[53px] md:text-[42px] text-[32px] font-semibold ">How We Work </p>
             <p className="lg:text-[20px] text-[16px] text-slate-600 dark:text-slate-400 text-justify"><span className='font-bold text-slate-800 dark:text-slate-400'>Shashtav Charging Bharat Private Limited , </span>A company expanding the culture of Electric vehicles through its latest technology and innovation.</p>
             <p className="lg:text-[20px] text-[16px] text-slate-600 dark:text-slate-400 text-justify" >The depiction of the setting up of charging stations across the nation along with providing fast charge and encouraging the use of EVs is a testimony to their commitment towards renewable energy and innovation.</p>
            </div>

        </div>
     </div>
  )
}

export default HowWeWork 