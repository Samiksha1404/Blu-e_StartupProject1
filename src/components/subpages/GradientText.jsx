import React from 'react'

const GradientText = ({text}) => {
  return (
    <div>
        <h1 className="lg:text-[59px] md:text-[42px] text-[32px] font-bold  bg-clip-text text-transparent bg-gradient-to-r from-blue-900  to-yellow-500   w-fit mx-auto mt-5">{text}</h1>
    </div>
  )
}

export default GradientText