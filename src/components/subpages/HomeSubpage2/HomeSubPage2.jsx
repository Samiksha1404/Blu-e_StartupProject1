import * as React from "react";
import { Link, NavLink } from 'react-router-dom'
function VideoSection() {
  return (
    <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-xl font-semibold text-center text-white max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 self-end px-20 py-16 max-w-full bg-blue-950 w-[600px] max-md:flex-wrap max-md:px-5">
          <div className="flex-auto my-auto italic  transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:text-yellow-400 hover:dark:text-blue-200">Watch Our Video!</div>
          <div
            className="shrink-0 w-px border border-white border-solid aspect-[0.03] stroke-[1px] stroke-white"
          />
          <div className="flex-auto self-start mt-2.5 italic transition-transform duration-300 ease-in-out transform hover:translate-y-1 hover:text-yellow-400 hover:dark:text-blue-200"> <a href="/contact">Talk To An Expert &gt;</a></div>
        </div>
        <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b2cc39ad8ccf069e12886ef71598972c9cd5e06c1abb5471460407413ee582e?apiKey=d7e5bab79af041058fcada747b413e1e& "
      alt="Descriptive alt text for the image" 
      data-aos="" data-aos-duration="1000"
      className="ml-auto w-full aspect-[0.91] max-w-[777px] max-md:max-w-full"
    />
      </div>
    </div>
  );
}

function AboutUsButton() {
  return (
    
    <div className=" items-center justify-center mt-6 mb-6">
                <NavLink to="/about">
                  <button className="relative md:px-6 md:py-3 px-2 md:text-xl  text-sm font-semibold  text-black rounded-lg group">
                  <span class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-blue-900 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-yellow-400 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                   <span class="relative">More About Us</span>
               </button>
             </NavLink>
              </div>
    );
}

function HomeSubpage2() {
  return (
    <div>
      <div className="flex gap-5 max-md:flex-col justify-center items-center max-md:gap-0" data-aos="fade-down" data-aos-duration="2000">
        <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 my-auto text-lg font-medium max-md:mt-10 max-md:max-w-full">
            <h1 className="text-xl tracking-wide leading-8 text-center text-blue-950 max-md:max-w-full dark:text-blue-300">
              Solutions For Establishing Optimised Charging
            </h1>
            <h2 className="mt-10 text-4xl text-black leading-[61px] max-md:max-w-full dark:text-slate-100">
              Find Your Smart & Simple Solution With Best Overall Economy Charge
              Rate!
            </h2>
            <div className="flex gap-5 mt-20 tracking-wide leading-6 text-zinc-600 max-md:flex-wrap max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/862d2b7dc82b113d7834e6f0975b08d7307a6dcfba06387182df74ee42031b7c?apiKey=d7e5bab79af041058fcada747b413e1e&"
                alt=""
                className="shrink-0 self-start aspect-square w-[60px]"
              />
              <p className="flex-auto dark:text-slate-500">
                Our startup is revolutionizing EV charging with Autonomous /
                Autocharge features to tackle the conventional woes of
                complexity and time-consuming processes. Everyone can now
                effortlessly powerup their electric vehicles, making green
                transportation accessible to all.
              </p>
            </div>

            <AboutUsButton />
          </div>
        </div>

        <VideoSection />
      </div>
    </div>
  );
}

export default HomeSubpage2;














     