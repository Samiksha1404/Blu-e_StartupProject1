import React from 'react'
import aboutImg from '../../assets/aboutImg.svg'

const FutureIsNow = () => {
  return (
    <div >

      <div className="flex flex-col gap-16 mt-10">

        {/* first */}
        <div className={`  flex flex-col lg:flex-row bg-gradient-to-r from-yellow-400 to-amber-100 dark:bg-gradient-to-r dark:from-indigo-900 dark:to-indigo-400 pt-9 items-center w-fit mx-auto`}>

          <div className="lg:w-[726px]">
            <img src={aboutImg} alt="" className="w-full" />
          </div>

          <div className="bg-white dark:bg-slate-800  md:p-10 p-4 lg:w-[656px] md:text-[20px] lg:h-[499px] flex flex-col justify-center gap-2 ">
            {/* heading */}
            <h1 className="lg:text-[30px] md:text-[25px] text-[18px] dark:text-indigo-200">VISION</h1>
            <h1 className="lg:text-[53px] md:text-[42px] text-[24px] font-semibold dark:text-indigo-400">The Future IS Now</h1>
            <p className="dark:text-slate-300 text-justify">To become a leader in developing a sustainable and renewable technologies such as future alternate fuels and to actively participate and strive for the common goal of achieving complete carbon neutrality for the betterment of society. To excel in our commitment and known universally for the quality, services and innovations in our areas of operations.</p>
          </div>
        </div>

        {/* second */}

        <div className={`flex flex-col lg:flex-row-reverse bg-gradient-to-l from-yellow-400 to-amber-100 dark:bg-gradient-to-l dark:from-indigo-900 dark:to-indigo-400 pt-9 items-center w-fit mx-auto `}>

          <div className="lg:w-[726px]">
            <img src={aboutImg} alt="" className="w-full" />
          </div>

          <div className="bg-white dark:bg-slate-800  md:p-10 p-4 lg:w-[656px] md:text-[20px] lg:h-[499px] flex flex-col justify-center gap-2">
            {/* heading */}
            <h1 className="lg:text-[30px] md:text-[25px] text-[18px] dark:text-indigo-200">MISION</h1>
            <h1 className="lg:text-[53px] md:text-[42px] text-[24px] font-semibold dark:text-indigo-400">The Future IS Now</h1>
            <p className="dark:text-slate-300 md:ml-0 ml-4">
              <ul className='list-disc text-justify '>
                <li>To build competitive products & services from emerging greentechnologies in the automotive sector.</li>
                <li>To develop 24/7 operational charging stations accessible to all EVowners with utmost convenience across thenation.</li>
                <li>To make the term “Range Anxiety” obsolete in the minds ofconsumers.
                </li>
                <li>
                  To further research the feasibility of Green Hydrogen as an alternatefuel for the future automobiles.</li>
              </ul>
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default FutureIsNow