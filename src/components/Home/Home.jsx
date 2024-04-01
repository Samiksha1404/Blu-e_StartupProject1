import React from 'react'
import { Link } from 'react-router-dom';
import Herosection from '../Home/herosection/Herosection';
import HomeSubPage3 from '../subpages/HomeSubPage3';


export default function Home() {
    return (
        <div className=" w-screen ">
        <Herosection/>
        <HomeSubPage3/>
       
        </div>
    );
}