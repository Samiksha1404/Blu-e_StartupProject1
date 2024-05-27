import React from 'react'
import { Link } from 'react-router-dom'

function Grid1({heading, list1, list2,list3,list4,list5}) {
  return (
    <div>
    <h2 className="mb-1 text-[14px] md:text-[18px] font-semibold text-blue-950  pb-2  uppercase">{heading}</h2>
    <ul className="space-y-1 text-[12px]  lg:text-[16px]">
        <li className="pb-1 hover:text-blue-900">
            <Link to="/products">{list1}</Link>
        </li>
        <li className="pb-1 hover:text-blue-900">
        <Link to="/products">{list2}</Link>
        </li>
        <li className="pb-1 hover:text-blue-900">
        <Link to="/products">{list3}</Link>
        </li>
        <li className="pb-1 hover:text-blue-900">
        <Link to="/products">{list4}</Link>
        </li>
        <li className="pb-1 hover:text-blue-900">
        <Link to="/products">{list5}</Link>
        </li>
    </ul>
</div>
  )
}

export default Grid1