import React from 'react'
import { Link } from 'react-router-dom'

function Grid({heading, list1, list2,list3,list4,list5}) {
  return (
    <div>
    <h2 className="mb-1 text-[14px] md:text-[18px] font-semibold pb-1 hover:text-blue-900 uppercase">{heading}</h2>
    <ul className="space-y-1  text-[14px] md:text-[16px]">
        <li className="pb-1 hover:text-blue-900">
            <Link to="/">{list1}</Link>
        </li>
        <li className="pb-1 hover:text-blue-900">
        <Link to="/services">{list2}</Link>
        </li>
        <li className="pb-1 hover:text-blue-900">
        <Link to="/about">{list3}</Link>
        </li>
        <li className="pb-1 hover:text-blue-900">
        <Link to="/location">{list4}</Link>
        </li>
        <li className="pb-1 hover:text-blue-900">
        <Link to="/faqs">{list5}</Link>
        </li>
    </ul>
</div>
  )
}

export default Grid