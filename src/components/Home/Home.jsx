import React from 'react'
import { Link } from 'react-router-dom';
import Herosection from '../Home/herosection/Herosection';
import HomeSubPage3 from '../subpages/HomeSubPage3';
import HomeSubPage6 from '../subpages/HomeSubpage2/HomeSubpage6/HomeSubPage6';
import HomeSubPage2 from '../subpages/HomeSubpage2/HomeSubPage2';
import HomeSubpage9 from '../subpages/HomeSubpage9';
import Sponsors from '../subpages/Sponsors';
import ThoughtLeadership from '../subpages/ThoughtLeadership/ThoughtLeadership';
import HomeSubPage7 from '../subpages/HomeSubPage7';
import ChargingSolution from '../subpages/cahrgingSolution/ChargingSolution';
import EvAdvantage from '../subpages/EvAdvantage/EvAdvantage';
import HomeService from '../subpages/HomeService/HomeService';





export default function Home() {
    return (
        <div className=" w-screen ">
        <Herosection/>
        <HomeSubPage2/>
        <HomeSubPage3/>
        <ChargingSolution/>
        <HomeService/>
        <HomeSubPage6/>
        <EvAdvantage/>
        <HomeSubpage9/>
        <HomeSubPage7/>
        <ThoughtLeadership/>
        <Sponsors/>
       
        </div>
    );
}