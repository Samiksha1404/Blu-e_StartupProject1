import React from 'react'
import elipse from "../../assets/elipse.svg"
const Applications = () => {
  return (
    <>
         
         <div className="flex flex-col lg:space-y-20 items-center ">
          <p className="md:text-[48px] text-[32px] font-bold text-blue-950  text-center dark:text-slate-100">Applications</p>
        </div>
        <div className="flex flex-col lg:space-y-20 items-center ">
        <p className="md:text-[28px] text-[22px] font-bold dark:text-blue-300 text-center text-yellow-300" >Simple Installations</p>
        </div>
      
     <div className="flex justify-center text-justify flex-wrap">
  <div className="mx-2 md:mx-0 mb-4 md:mb-0">
    <div class="md:space-y-5 space-y-2 mt-8 md:mx-1 mx-auto px-6 text-left">
      <ul class="space-y-2 md:text-xl text-slate-800 dark:text-slate-500">
        <li class="flex space-x-3"><img src={elipse} alt="" class="w-5 mt-1" /><p><span className='font-bold text-blue-950 dark:text-blue-300' >Highway Fuel Outlets/</span> service station</p></li>
        <li class="flex space-x-3"><img src={elipse} alt="" class="w-5 mt-1" /><p> <span className='font-bold text-blue-950 dark:text-blue-300' >Parking garage/</span> back office</p></li>
        <li class="flex space-x-3"><img src={elipse} alt="" class="w-5 mt-1" /><p> <span className='font-bold text-blue-950 dark:text-blue-300'>Mall, shopping</span>  complex, university</p></li>
      </ul>
    </div>
  </div>
  <div className="mx-2 md:mx-0">
    <div class="md:space-y-5 space-y-2 mt-8 md:mx-1 mx-auto px-6 text-left">
      <ul class="space-y-2 md:text-xl text-slate-800 dark:text-slate-500">
        <li class="flex space-x-3"><img src={elipse} alt="" class="w-5 mt-1" /><p><span className='font-bold text-blue-950 dark:text-blue-300' >Commercial </span>fleet operators</p></li>
        <li class="flex space-x-3"><img src={elipse} alt="" class="w-5 mt-1" /><p> <span className='font-bold text-blue-950 dark:text-blue-300' >EV infrastructure</span> operator/service providers</p></li>
        <li class="flex space-x-3"><img src={elipse} alt="" class="w-5 mt-1" /><p> <span className='font-bold text-blue-950 dark:text-blue-300' >EV dealer</span> workshop</p></li>
      </ul>
    </div>
  </div>
</div>


    </>
  )
}

export default Applications
