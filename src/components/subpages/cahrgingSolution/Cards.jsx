import React from 'react'


import { Link } from 'react-router-dom';

const Cards = ({bgimage,icon,heading}) => {
  return (
    <div className=''>
        <div className="lg:h-[375px] lg:w-[230px] flex flex-col justify-end shadow-black  shadow-lg dark:shadow-slate-500" style={{ backgroundImage: `url(${bgimage})` }}>

<div className="bg-slate-200 dark:bg-orange-400 lg:w-[206px] lg:h-[131px]  flex flex-col items-center justify-center p-5 mx-auto ">
  <img src={icon} alt="" className="bg-white p-5 rounded-full  absolute mb-40" />
  <h1 className="lg:text-[22px] text-[14px] font-semibold">{heading}</h1>
  <Link>
    <button className='italic text-blue-950'>EXPLORE MORE</button>
  </Link>
</div>

</div>

    </div>
  )
}

export default Cards