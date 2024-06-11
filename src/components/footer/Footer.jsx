import React from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';
import Grid from './Grid';
import Grid1 from './Grid1';
import footerLogo from '../../assets/blueSymb.png'


export default function Footer() {
    return (
        <footer className=" border-y dark:bg-slate-950 bottom-0 mt-16 mx-4 " data-aos="fade-down" data-aos-duration="1000">

            <div className="flex flex-col ">
                <div className="   py-6 lg:py-8 text-black dark:text-slate-200">
                    <div className="grid md:grid-cols-2 grid-cols-1 lg:ml-16 lg:mr-16">
                        <div className="flex flex-col pb-[15px] md:max-w-[80%]  text-justify ">
                            <img src={footerLogo} alt="" className='lg:w-24 md:w-12 w-12  ' />
                            <p className="md:text-[20px] pb-4 pt-2 text-[14px]">
                                <span className='font-bold md:text-[18px] text-[14px]'>Shashtav Charging Bharat Private Limited</span>
                            </p>
                            <h1 claclassNamess=" text-[12px]  lg:text-[16px]">CIN: U27900MH2023PTC401951</h1>
                        </div>

                          <div>
                        <div className="grid grid-cols-3   ">

                            <Grid heading="Company" list1="Home" list2="Service" list3="About Us " list4="Location" list5="FAQs" />
                            <Grid1 heading="products" list1="7.5 kW AC Charger" list2="15 kW AC Charger " list3="40-230 kW DC Charger " list4="ChargeMaster Pro" list5="Blu-E SplitJet" />

                            <div className="flex flex-col ">
                            <h2 className="mb-1 text-[14px] md:text-[18px] font-semibold pb-1 text-blue-950 uppercase dark:text-yellow-400">contact</h2>
                                <div className=" absolute md:mt-10 mt-8 ">
                                    <div className="flex md:gap-3 gap-1 mb-5 mr-2">
                                        <FaPhone className=' w-6 h-6 text-white dark:text-black dark:bg-slate-200 bg-blue-900 p-1 rounded-lg hover:scale-125 duration-300 ' />
                                        <p className=" text-[12px]  lg:text-[16px] hover:text-blue-900">+917620087268</p>
                                    </div>
                                    <div className="flex md:gap-3  gap-1 mb-5">
                                        <FaEnvelope className=' w-6 h-6  text-white dark:text-black dark:bg-slate-200 bg-blue-900 p-1 rounded-lg hover:scale-125 duration-300 ' />
                                        <a className='text-[12px]  lg:text-[16px] hover:text-blue-900' href='mailto:shashtavbharat.official@gmail.com' >shashtavbharat.<br/>official@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                {/* horizontal line */}
                <div className="w-full h-[2px] bg-black dark:bg-slate-300"></div>


                <div className="md:flex-row flex flex-col justify-between  md:items-end  items-center mt-4 md:gap-0 gap-4 text-slate-800 dark:text-slate-200 mb-6 md:mx-16 ">
                    <div className="">
                        <p className="font-bold">Privacy Policy | Terms & Conditions</p>
                        <p className="text-sm mt-2">© 2023 Shashtav Charging Bharat Pvt. Ltd.</p>
                    </div>
                    <div className='flex gap-6'>
                        <a href="https://www.instagram.com/blu_e_shashtav_bharat/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='md:w-9 md:h-9 w-7 h-7 text-white dark:text-black dark:bg-slate-200 bg-blue-900 p-1 rounded-lg hover:scale-125 duration-300 hover:bg-pink-600' />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61559934486362" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className='md:w-9 md:h-9 w-7 h-7  text-white bg-blue-900 p-1 rounded-lg dark:text-black dark:bg-slate-200 hover:scale-125 duration-300 hover:bg-blue-700' />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className='md:w-9 md:h-9 w-7 h-7 text-white bg-blue-900 p-1 rounded-lg dark:text-black dark:bg-slate-200 hover:scale-125 duration-300 hover:bg-blue-700' />
                        </a>
                        <a href="https://www.linkedin.com/company/shashtav-charging-bharat-private-limited/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='md:w-9 md:h-9 w-7 h-7 text-white bg-blue-900 p-1 rounded-lg dark:text-black dark:bg-slate-200 hover:scale-125 duration-300 hover:bg-blue-800' />
                        </a>
                        <a href="http://www.youtube.com/@Blu-E-ShashtavBharat" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className='md:w-9 md:h-9 w-7 h-7 text-white bg-blue-900 p-1 rounded-lg dark:text-black dark:bg-slate-200  hover:scale-125 duration-300 hover:bg-red-600' />
                        </a>
                    </div>

                </div>

            </div>


        </footer>
    );
}