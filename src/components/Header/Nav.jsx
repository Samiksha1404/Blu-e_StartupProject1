import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import bluelogo from '../../assets/bluelogo.svg'
import Darkmode from '../DarkMood/Darkmode';
import Dark2 from '../DarkMood/Dark2';
import { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';



export default function Header() {
    
    const [isNavOpen, setNavOpen] = useState(false)

    return (
        <header className='w-full text-black '>

          <nav className="w-full px-5 md:px-10  h-[70px] flex justify-between items-center  ">

             {/* logo */}
             <div className="">
                   <Link to="/" className="flex items-center">
                        <img
                            src={bluelogo}
                            className=" md:pl-16" 
                            alt="Logo"
                        />
                    </Link>
             </div>
             
             <ul className="flex font-semibold md:w-fit w-0 md:text-xl text-[1px] space-x-6">
    <li>
        <NavLink
            to="/"
            className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-blue-900 underline" : "text-black"
                } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0 dark:text-slate-200`
            }
        >
            Home
        </NavLink>
    </li>
    <li>
        <NavLink
            to="/services"
            className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-blue-900 underline" : "text-black"
                } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0 dark:text-slate-200`
            }
        >
            Services
        </NavLink>
    </li>
    <li>
        <NavLink
            to="/location"
            className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-blue-900 underline" : "text-black"
                } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0 dark:text-slate-200`
            }
        >
            Location
        </NavLink>
    </li>
    <li>
        <NavLink
            to="/about"
            className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-blue-900 underline" : "text-black"
                } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0 dark:text-slate-200`
            }
        >
            About Us
        </NavLink>
    </li>
    <li>
        <NavLink
            to="/faqs"
            className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-blue-900 underline" : "text-black"
                } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0 dark:text-slate-200`
            }
        >
            FAQS
        </NavLink>
    </li>
    <li>
        <NavLink
            to="/contact"
            className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-blue-900 underline" : "text-black"
                } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0 dark:text-slate-200`
            }
        >
            Contact Us
        </NavLink>
    </li>
    <li>
        <NavLink
            to="/products"
            className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-blue-900 underline" : "text-black"
                } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0 dark:text-slate-200`
            }
        >
            Products
        </NavLink>
    </li>
</ul>


            <div className="flex gap-2 justify-center items-center">
            <Dark2/>
            <button 
onClick={()=> setNavOpen(!isNavOpen)}
className={`md:hidden text-4xl  z-20  ${isNavOpen ? "text-white" : "text-black dark:text-slate-300"}`}>
{isNavOpen ? <CgClose/> : <GiHamburgerMenu/> }
          </button>    
   
        </div>   


          </nav>

          <ul className= {`flex flex-col  pl-10  h-screen absolute top-0 right-0 w-80 bg-yellow-400 dark:bg-slate-900 text-indigo-900  pt-28 md:hidden z-10 transition-all duration-300 
            ${isNavOpen ? "translate-x-0" : "translate-x-full"}`} >
                             <li>
                             <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 text-xl  ${isActive ?  "text-slate-100 text-3xl" : "text-blue-900 font-semibold dark:text-slate-300"}    dark:text-slate-200`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 text-xl  ${isActive ?  "text-slate-100 text-3xl" : "text-blue-900 font-semibold dark:text-slate-300"}    dark:text-slate-200`
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/location"
                                    className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 text-xl  ${isActive ?  "text-slate-100 text-3xl" : "text-blue-900 font-semibold dark:text-slate-300"}    dark:text-slate-200`
                                    }
                                >
                                    Location
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 text-xl  ${isActive ?  "text-slate-100 text-3xl" : "text-blue-900 font-semibold dark:text-slate-300"}    dark:text-slate-200`
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/faqs"
                                    className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 text-xl  ${isActive ?  "text-slate-100 text-3xl" : "text-blue-900 font-semibold dark:text-slate-300"}    dark:text-slate-200`
                                    }
                                >
                                    FAQS
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 text-xl  ${isActive ?  "text-slate-100 text-3xl" : "text-blue-900 font-semibold dark:text-slate-300"}    dark:text-slate-200`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/products"
                                    className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 text-xl  ${isActive ?  "text-slate-100 text-3xl" : "text-blue-900 font-semibold dark:text-slate-300"}    dark:text-slate-200`
                                    }
                                >
                                    Products
                                </NavLink>
                            </li>
            </ul>


        </header>
    )


}