import React from 'react'
import StationLogo from '../../../assets/StationLogo.svg'

const Card = ({image,heading,content,property}) => {
  return (
    <div>
        <div className={`flex flex-col items-start ${property} lg:w-[361px] space-y-3 mt-10`} data-aos="slide-down" data-aos-duration="1000">
            <img src={StationLogo} alt="" className="" />
            <p className="md:text-[24px] text-[19px] font-semibold dark:text-slate-300">{heading}</p>
            <p className="md:text-[16px] text-[12px] dark:text-slate-300">{content}</p>
        </div>
    </div>
  )
}

export default Card