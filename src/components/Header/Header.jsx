import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import bluelogo from '../../assets/bluelogo.svg'
import Darkmode from '../DarkMood/Darkmode';
import Dark2 from '../DarkMood/Dark2';



export default function Header() {
    return (
        <header className="shadow-lg sticky z-50 top-0  shadow-slate-300 w-full">
            <nav className=" dark:bg-slate-950   border-gray-200 lg:px-6 py-2.5 ">
                <div className="flex flex-wrap justify-between items-center mx-auto ">
                    <Link to="/" className="flex items-center">
                        <img
                            src={bluelogo}
                            className="bg-blend-multiply pl-32" 
                            alt="Logo"
                        />
                    </Link>
                   
                    <div className=" justify-between items-end" id="mobile-menu-2">
    <ul className="md:flex-row flex flex-col font-semibold  space-x-8 items-center text-lg ">
        <li>
            <NavLink
                to="/"
                className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-blue-900 underline" : "text-black"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0 dark:text-slate-200`
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/services"
                className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-blue-900 underline" : "text-black"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900  lg:p-0 dark:text-slate-200`
                }
            >
                Services
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/location"
                className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-blue-900 underline" : "text-black"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900  lg:p-0 dark:text-slate-200`
                }
            >
                Location
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/about"
                className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-blue-900 underline" : "text-black"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900  lg:p-0 dark:text-slate-200`
                }
            >
                About Us
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/faqs"
                className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-blue-900 underline" : "text-black"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900  lg:p-0 dark:text-slate-200`
                }
            >
                FAQS
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/contact"
                className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-blue-900 underline" : "text-black"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900  lg:p-0 dark:text-slate-200`
                }
            >
                Contact Us
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/products"
                className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-blue-900 underline" : "text-black"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-900 lg:p-0 dark:text-slate-200`
                }
            >
                Products
            </NavLink>
        </li>
    </ul>
</div>

                         {/* theme changer button */}
                         <div className=" ">
                        <Dark2/>
                    </div>
                  
                     

                    
                </div>
            </nav>
        </header>
    );
}