import React from 'react'
import p1 from "../../../assets/thirdvector3.svg"
import p2 from "../../../assets/evway-e-1 1.png"
import p3 from "../../../assets/third2.png"
import p4 from "../../../assets/thirdvector2.png"

import "../HomeSubpage2/HomeSubPage2.css"
import { Link, NavLink } from 'react-router-dom'



const HomeSubPage2 = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center mx-4 gap-5 ">
        {/*left side */}
        <div className="left md:p-28 block m-auto md:w-1/2 flex-col " >
          <div className="  text-blue-950 lg:text-xl font-small font-['Rubik'] leading-loose tracking-wide dark:text-blue-300">Solutions For Establishing Optimised  Charging</div>
          <div className="  text-black text-4xl md:text-5xl font-medium font-['Rubik'] leading-10 md:leading-14 dark:text-slate-100">Find Your Smart & Simple Solution With Best Overall Economy Charge Rate!</div>

          <div className='flex items-center mt-6' style={{ display: "flex" }}>
            <img className=" w-20 h-20 md:w-24 md:h-24 mr-4" src={p4} />
            <div className=" w-full text-zinc-600  font-normal font-['Sarabun']  text-justify dark:text-slate-500 ">Our startup is revolutionizing EV charging with Autonomous / Autocharge features to tackle the conventional woes of complexity and time-consuming processes. Everyone can now effortlessly powerup their electric vehicles, making green transportation accessible to all.</div>
          </div>
          <div className=" items-center justify-center mt-6 mb-6">
            <NavLink to="/about">
              <button className="relative md:px-6 md:py-3 px-2 md:text-xl  text-sm font-semibold  text-black rounded-lg group">
                <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-blue-900 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-yellow-400 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                <span class="relative">More About Us</span>
              </button>
            </NavLink>
          </div>
        </div>

         {/*right side */}
        <div className="flex justify-end md:w-1/2 ">
          <div className="right mr-0   md:justify-end">
            <div className='md:absolute m-auto'>
              <img className=" relative md:pt-[194px] md:w-[400px] md:h-[595px] " src={p3} />
            </div>

            <div className="  block " style={{ paddingLeft: "5.5rem" }}>
              <div className=" md:w-[600px]  md:h-[110px] bg-blue-950 flex justify-center">
                <div class="p-12 md:p-12 text-center text-white text-xl font-semibold font-['Rubik'] transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:text-yellow-400 hover:dark:text-blue-200"><a href="/contact">Talk To An Expert</a></div>

                <div className="p-12 md:p-12 text-center text-white text-xl font-semibold font-['Rubik'] transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:text-yellow-400 hover:dark:text-blue-200">Watch Our Video!</div>
              </div>
              <img className=" w-full md:w-[600px] md:h-[587px]" src={p2} />
            </div>
          </div>
        </div>
      </div>

      </>
  )
}

export default HomeSubPage2



















      {/* <div className="thirdmain">
        <div className="thirdnew">
          
          <div className="solutionsForEstablishing ">
            Solutions For Establishing Optimised Charging
          </div>
          <div className="findYourSmart">
            {`Find Your Smart & Simple Solution With Best Overall Economy Charge Rate!`}
          </div>
          <div className="ourStartupIs">
            Our startup is revolutionizing EV charging with Autonomous /
            Autocharge features to tackle the conventional woes of complexity and
            time-consuming processes. Everyone can now effortlessly powerup their
            electric vehicles, making green transportation accessible to all.
          </div>

          <div className="vectorParent2">
            <img src={p1} alt="" className="groupChild27" />
            <div className="box">
              <Link to="/about">
                <i className="moreAboutUs">{`MORE ABOUT US  >`}</i>
              </Link>
            </div>
          </div>
          
          <div className="thirdnewChild" />
          <img src={p2} alt="" className="evwayE11Icon" />
          <img src={p3} alt="" className="evway3510x5951Icon" />

          
          

          <div className="thirdnewItem" />
          <div className="providingSmartChargingContainer">
            <p className="d5KapsRegency">{`Providing smart charging `}</p>
            <p className="d5KapsRegency">
              solution using innovation and sustainable design.
            </p>
          </div>

          <div className="thirdnewInner" />
          <div className="thirdnewChild1" />
          <Link to="/video">
            <i className="watchOurVideo">Watch Our Video!</i>
          </Link>
          <Link to="/contact">
            <i className="talkToAn1">{`Talk To An Expert >`}</i>
          </Link>
          <img
            className="carcharging1Icon6"
            alt=""
            src={p4}
          />
          <img className="vectorIcon10" alt="" src={p5} />
        </div>
        
      </div> */}



   








