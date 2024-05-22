import React from 'react'
import GEM from '../../assets/GEM.svg'
import MSME from '../../assets/MSME.svg'
import SIH from '../../assets/SIH.svg'
import TBI from '../../assets/TBI.svg'

const Sponsors = () => {
  return (
    <div >
        <div className="flex flex-col text-center space-y-5 mt-5" data-aos="fade-up" data-aos-duration="1000">
            {/* heading */}
            <div className="">
              <h1 className="lg:text-[53px] md:text-[48px] sm:text-[40px]  text-[38px] font-bold dark:text-slate-400 ">Our Sponsors </h1>
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-2 items-center ml-16 space-y-3">
                <img src={MSME} alt="" className="rounded-xl " />
                <img src={SIH} alt="" className="" />
                <img src={GEM} alt="" className="" />
                <img src={TBI} alt="" className="rounded-xl" />
            </div>
        </div>
    </div>
  )
}

export default Sponsors