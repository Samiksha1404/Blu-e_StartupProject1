import React from 'react'

const Card6 = ({title,content,image}) => {
  return (
    <div className="">
        <div className='flex flex-col justify-center items-center text-center gap-5 bg-slate-50 lg:w-[280px] rounded-lg  px-4 dark:bg-slate-900 lg:h-[404px] h-[304px]'>
        <div className="">
         <img src={image} alt="" className="" />
        </div>
        <div className="dark:text-slate-500 ">
         <p className="text-blue-900 dark:text-blue-300 font-bold">{title}</p>
         <p className="mt-3">{content}</p>
        </div>
    </div>
    </div>
  )
}

export default Card6