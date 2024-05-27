import React from 'react'

const Card = ({image,title,content}) => {
  return (
    <div className='py-6 pb-16 '>
    <div class=" mx-[6px] my-2 flex flex-col justify-center items-center text-center gap-10 bg-slate-50 lg:w-[380px]  rounded-lg  px-4 dark:bg-slate-900 lg:h-[404px] h-[350px] shadow-lg dark:shadow-slate-500 transition-all duration-700 hover:scale-110  cursor-pointer">

    <div class="pt-3">
        <img src={image} alt="home" class="h-44 m-auto"/>
    </div>

    <div class="dark:text-slate-500  space-y-2">
      <h2  class="text-blue-900 dark:text-blue-300 font-bold lg:text-[20px] text-[15px]">{title}</h2>
      <p  class="lg:text-lg">{content}</p>
    </div>
     </div>
     </div>
  )
}

export default Card