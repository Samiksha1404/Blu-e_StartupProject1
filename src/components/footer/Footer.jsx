import React from 'react'
import { Link } from 'react-router-dom';
import Grid from './Grid';
import footerLogo from '../../assets/footerLogo.svg'

export default function Footer() {
    return (
        <footer className="border-y dark:bg-slate-900 bottom-0 mt-16">
            <div className="mx-auto w-full  p-4 py-6 lg:py-8 text-black dark:text-slate-200">
                <div className="md:flex md:justify-between mx-5">
                    
                <div className="footer-left space-y-5">
                <img src={footerLogo} alt="" />
          <h1 className="mt-3 text-lg">About Blu-E</h1>
          <p className="footer-company-about ">
              
            <b className="">Shashtav Charging Bharat Private Limited</b> is a MSME registered and Startup India recognized startup by two young Indian entrepreneurs with a brand name as BLU-E. 
           </p>
           <h1 claclassNamess="mt-2 font-normal">CIN: U27900MH2023PTC401951</h1>
          
          
                </div>

                    <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-4  ml-8">
                        
                        <Grid heading="Services" list1="Pet Caretaking" list2="Grooming" list3="Veterinary Services"/>
                        <Grid heading="Our Trust" list1="Reliability" list2="Professionalism" list3="Commitment to excellence"/>
                         
                    </div>
                </div>

              
            </div>
        </footer>
    );
}