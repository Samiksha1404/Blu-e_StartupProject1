import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import bluelogo from '../../assets/bluelogo.svg'
import Darkmode from '../DarkMood/Darkmode';
import Dark2 from '../DarkMood/Dark2';
import { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Button } from '../Header/Button';



export default function Header() {


    const [isNavOpen, setNavOpen] = useState(false)



    return (
        <header className='w-full   font-semibold sticky z-50 top-0  bg-white   dark:bg-slate-950/70 dark:shadow-slate-400  shadow-md '>

            <nav className="w-full px-5 xl:px-8 lg:px-4  md:h-[70px] md:py-1 py-2  flex justify-between items-center  ">

                {/* logo */}
                <div className="   p-1">
                    <Link to="/" className="">
                        <img
                            src={bluelogo}
                            className=" xl:pl-16 lg:pl-2 lg:w-full md:w-[88px] rounded-[4px]  w-[86px]  " 
                            alt="Logo"
                        />
                    </Link>
               </div>
             
             <ul className="flex  md:w-fit w-0 md:text-[17px] lg:text-xl text-[0px] lg:space-x-6">
    <li>
        <NavLink
            to="/"
            className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-blue-900 underline" : "text-black"
                } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0 dark:text-slate-200 text-slate-800`
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
                } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0 dark:text-slate-200 text-slate-800`
            }
        >
            Services
        </NavLink>
    </li>
    <li>
        <NavLink
            to="/products"
            className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-blue-900 underline" : "text-black"
                } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0 dark:text-slate-200 text-slate-800`
            }
        >
            Products
        </NavLink>
    </li>
    <li>
        <NavLink
            to="/location"
            className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-blue-900 underline" : "text-black"
                } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0 dark:text-slate-200 text-slate-800`
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
                } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0 dark:text-slate-200 text-slate-800`
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
                } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0 dark:text-slate-200 text-slate-800`
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
                } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0 dark:text-slate-200 text-slate-800`
            }
        >
            Contact Us
        </NavLink>
    </li>
   
             </ul>
             
             {/* guildline button  */}
              <NavLink
    to="/guidelines"
    className="">
    <div className="relative inline-flex group">
        <div
            className="absolute transition-all duration-1000 md:-inset-[2px] bg-gradient-to-r from-[#9d8500] via-[#fdcd40] to-[#1f00a9] rounded-full md:blur-md md:group-hover:opacity-100 md:group-hover:-inset-2 md:group-hover:duration-200 md:animate-zoom">
        </div>
        <button className="relative inline-flex items-center justify-center md:px-6 md:py-2 md:text-lg text-[0.5px] font-semi-bold md:text-slate-800 dark:text-slate-200 transition-all duration-200 bg-gradient-to-r from-[#cf894c] via-[#d8d227] to-[#dbd766] dark:bg-gradient-to-r dark:from-[#4063c9] dark:via-[#1b1b7a] dark:to-[#211372] font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
            Guidelines
        </button>
    </div>
            </NavLink>




            {/*  <div className="flex gap-2 justify-center items-center">
            <Dark2/>
            <button 
          onClick={()=> setNavOpen(!isNavOpen)}
         className={`md:hidden text-3xl  z-20  ${isNavOpen ? "text-white" : "text-black dark:text-slate-300"}`}>
         {isNavOpen ? <CgClose/> : <GiHamburgerMenu/> }
          </button>    
   
            </div>    */}

                {/* guidelines button */}
              {/*   <NavLink to="/guidelines">
                    <div className="relative inline-flex group">
                        {/* <div className="absolute animate-zoom"></div> */}
                       {/*  <Button
                            containerClassName="relative inline-flex items-center justify-center text-lg font-semi-bold text-white transition-all duration-200  font-pj rounded-xl focus:outline-none "
                            borderRadius="1.0rem" // Adjust the border radius as needed
                            duration={2000} // Customize duration if needed
                        >
                            Guidelines
                        </Button> 
                    </div>
                </NavLink> 
            */}
                 
                <div className="flex gap-2 justify-center items-center">
                    <Dark2 />
                    <button
                        onClick={() => setNavOpen(!isNavOpen)}
                        className={`md:hidden text-3xl z-20 ${isNavOpen ? "text-white" : "text-black dark:text-slate-300"}`}
                    >
                        {isNavOpen ? <CgClose /> : <GiHamburgerMenu />}
                    </button>
                </div>

            </nav>

            <ul

                className={`fixed flex flex-col  pl-10  h-screen  top-0 right-[-40px] w-80 bg-yellow-400 dark:bg-slate-900 text-indigo-900  pt-28 md:hidden z-10 transition-transform duration-300 
            ${isNavOpen ? "translate-x-0" : "translate-x-full"}`} >
                             <li>
                             <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 text-xl hover:scale-110 duration-300 hover:text-indigo-600  ${isActive ?  "text-slate-100 text-3xl" : "text-blue-900 font-semibold dark:text-slate-300"}    dark:text-slate-200`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 text-xl hover:scale-110 duration-300 hover:text-indigo-600 ${isActive ?  "text-slate-100 text-3xl" : "text-blue-900 font-semibold dark:text-slate-300"}    dark:text-slate-200`
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/products"
                                    className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 text-xl hover:scale-110 duration-300 hover:text-indigo-600  ${isActive ?  "text-slate-100 text-3xl" : "text-blue-900 font-semibold dark:text-slate-300"}    dark:text-slate-200`
                                    }
                                >
                                    Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/location"
                                    className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 text-xl hover:scale-110 duration-300 hover:text-indigo-600  ${isActive ?  "text-slate-100 text-3xl" : "text-blue-900 font-semibold dark:text-slate-300"}    dark:text-slate-200`
                                    }
                                >
                                    Location
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 text-xl hover:scale-110 duration-300 hover:text-indigo-600 ${isActive ?  "text-slate-100 text-3xl" : "text-blue-900 font-semibold dark:text-slate-300"}    dark:text-slate-200`
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/faqs"
                                    className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 text-xl hover:scale-110 duration-300 hover:text-indigo-600  ${isActive ?  "text-slate-100 text-3xl" : "text-blue-900 font-semibold dark:text-slate-300"}    dark:text-slate-200`
                                    }
                                >
                                    FAQS
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 text-xl hover:scale-110 duration-300 hover:text-indigo-600   ${isActive ?  "text-slate-100 text-3xl" : "text-blue-900 font-semibold dark:text-slate-300"}    dark:text-slate-200`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>

                            <li className="mt-4">
                                 {/* guildline button  */}
                            <NavLink
                            to="/guidelines">
                                <div class="relative inline-flex  group">
                            <div
                            class="absolute transitiona-all duration-1000 -inset-[2px] bg-gradient-to-r  from-[#9d8500] via-[#fdcd40] to-[#1f00a9] rounded-xl blur-md group-hover:opacity-100 group-hover:-inset-2 group-hover:duration-200  animate-zoom">
                            </div>
                            <button className="relative inline-flex items-center justify-center px-4 py-2 text-lg font-semi-bold text-white transition-all duration-200 bg-gradient-to-r  from-[#151246] via-[#2a1b75] to-[#412e85] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                                Guidelines
                                </button>
                            </div>
                            </NavLink>
                                            </li>
                            
            </ul>


        </header>
    )


}