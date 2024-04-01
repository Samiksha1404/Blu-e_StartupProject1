import React from 'react'
import { Link } from 'react-router-dom';
import Herosection from '../Home/herosection/Herosection';
import HomeSubPage3 from '../subpages/HomeSubPage3';
import HomeSubPage6 from '../subpages/HomeSubPage6';


export default function Home() {
    return (
        <div className=" w-screen ">
        <Herosection/>
        <HomeSubPage3/>
        <HomeSubPage6/>
       
        </div>
    );
}