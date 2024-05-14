import React from 'react'

const ServiceSolutioncard = ({image,title}) => {
  return (
    <div className='lg:w-[202px] flex flex-col justify-center items-center gap-3 '> 
        <div className="lg:w-[163px] lg:h-[190px] md:w-[140px] md:h-[170px] w-[90px] h-[110px] bg-yellow-400/50 items-center justify-center flex  rounded-full shadow-black shadow-lg">
          <img src={image} alt="" className="m-auto lg:size-24 md:size-16 size-12 " />
        </div>

        <div className="">
            <h1 className="text-center lg:text-[25px] font-bold text-indigo-900 md:text-[20px] text-[17px]">{title}</h1>
        </div>
    </div>
  )
}

export default ServiceSolutioncard