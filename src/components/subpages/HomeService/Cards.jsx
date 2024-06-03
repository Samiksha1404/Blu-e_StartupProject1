import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Cards = ({service,bgImage}) => {
  return (
    <div>
        <div className=" items-end lg:h-[492px] lg:w-[360px] h-48 bg-cover mx-1 bg-no-repeat flex " style={{ backgroundImage: `url(${bgImage})` }}>
            
            
            <p className="pl-3 text-white font-bold lg:text-[20px] text-[16px] mb-4">{service}</p>
            
        </div>
        <NavLink to="/services">
            <p className="bg-yellow-400 mx-3 italic lg:w-[360px] text-center text-white py-3 font-semibold hover:text-blue-950" >Know More </p>
        </NavLink>
    </div>
  )
}

export default Cards