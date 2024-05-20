import React from 'react'

const Card6 = ({title,content,image}) => {
  return (
    <div className="" data-aos="fade-up" data-aos-duration="1000">
        <div className='mx-2 my-2 flex flex-col justify-center items-center text-center gap-5 bg-slate-50 lg:w-[280px] rounded-lg  px-4 dark:bg-slate-900 lg:h-[404px] h-[304px] shadow-lg dark:shadow-slate-500 transition-all duration-700 hover:scale-110  cursor-pointer '>
        <div className="">
         <img src={image} alt="" className="lg:w-full w-16" />
        </div>
        <div className="dark:text-slate-500 lg:text-[16px] text-[13px]">
         <p className="text-blue-900 dark:text-blue-300 font-bold lg:text-[18px] text-[15px]">{title}</p>
         <p className="mt-3">{content}</p>
        </div>
    </div>
    </div>
  )
}

export default Card6