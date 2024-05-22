import React from 'react'
import { Link } from 'react-router-dom'

function Grid({heading, list1, list2,list3}) {
  return (
    <div>
    <h2 className="mb-1 text-[14px] md:text-[18px] font-semibold   uppercase">{heading}</h2>
    <ul className="space-y-1 text-[14px] md:text-[20px]">
        <li className="">
            {list1}
        </li>
        <li>
            {list2}
        </li>
        <li>
            {list3}
        </li>
    </ul>
</div>
  )
}

export default Grid