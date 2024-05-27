import React from 'react'
import downloadbutton from '../../assets/downloadbutton.png'
const Card = ({number,description,driveLink,downloadButton}) => {
  return (
    <div className='py-6 '>
        <div className="lg:w-[308px] md:h-[310px] h-[300px] text-justify bg-gradient-to-r from-indigo-700 to-blue-900 dark:bg-gradient-to-r dark:from-indigo-900 dark:to-blue-950 text-white flex flex-col justify-center px-6  mt-16 space-y-3 rounded-md relative group mx-5 shadow-lg shadow-slate-900 dark:shadow-slate-500">
            <p className="h-12 w-12 bg-red-400 rounded-full text-center items-center font-extrabold flex flex-col justify-center text-xl absolute top-[-20px] left-[45%] animate-bounce">{number}</p>
            <a 
            href={driveLink}
            target="_blank" 
            rel="noopener noreferrer"  
            className="underline text-xl font-semibold  text-slate-200 ">{description}</a>

           <a 
           href={downloadButton} 
           target="_blank" 
           rel="noopener noreferrer"
           className="bottom-[0px]   absolute">
            <img src={downloadbutton} alt="" className="h-12 w-12 animate-zoom hover:scale-125 duration-500 mt-5 " />
           </a>
        </div>
    </div>
  )
}

export default Card