import React from 'react'
import downloadbutton from '../../assets/downloadbutton.png'
const Card = ({number,description}) => {
  return (
    <div>
        <div className="lg:w-[308px]  bg-blue-900 text-white flex flex-col justify-center px-12 py-8 mt-16 space-y-4 rounded-md relative group mx-5">
            <p className="h-12 w-12 bg-red-400 rounded-full text-center items-center font-bold flex flex-col justify-center absolute mb-[200px] ml-16 text-xl">{number}</p>
            <a href="" className="underline text-xl font-semibold  ">{description}</a>

           <a href="" className="">
            <img src={downloadbutton} alt="" className="h-12 w-12 animate-zoom hover:scale-125 duration-500" />
           </a>
        </div>
    </div>
  )
}

export default Card