import React from 'react'

import home from '../../../assets/home icon.svg'
import fleet from '../../../assets/fleet.svg'
import commercial from '../../../assets/commical icon.svg'
import workplace from '../../../assets/Workspace.svg'
import projects from '../../../assets/projects.svg'
import bghome from '../../../assets/bghome.svg'
import bgfleet from '../../../assets/bgfleet.svg'
import bgcommercial from '../../../assets/bgcommercial.svg'
import bgworkplace from '../../../assets/bgprojects.svg'
import bgproject from '../../../assets/bgworkplace.svg'
import { Link } from 'react-router-dom';

import Cards from './Cards'


const ChargingSolution = () => {
  return (
    <div data-aos="fade-up">
        <div className="flex flex-col items-center justify-center py-10 mt-10">
            <div className="text-center space-y-4 lg:mx-0 mx-5">
              <p className="lg:text-[59px] md:text-[42px] text-[32px] font-bold  bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-950 to-yellow-400  text-center ">EV CHARGING SOLUTIONS FOR YOU</p>
              <p className="lg:text-[25px] text-[20px] dark:text-slate-400 ">We provide EV charging solution all the existing and upcoming infrastructure.</p>
              <p className="text-slate-500 text-lg ">Partner with us to make your establishment EV ready and further boost your profits.</p>
            </div>

            <div className="mt-5 grid lg:grid-cols-5 gap-3 md:grid-cols-3 grid-cols-3  ">
              <Cards bgimage={bghome} icon={home} heading="HOME"/>
              <Cards bgimage={bgfleet} icon={fleet} heading="FLEET"/>
              <Cards bgimage={bgcommercial} icon={commercial} heading="COMMERCIAL"/>
              <Cards bgimage={bgworkplace} icon={workplace} heading="WORKPLACE"/>
              <Cards bgimage={bgproject} icon={projects} heading="UNDER CONSTRUCTION PROJECTS"/>
            </div>
        </div>
    </div>
  )
}

export default ChargingSolution