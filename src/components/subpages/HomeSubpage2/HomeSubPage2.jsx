import React from 'react'
import p1 from "../../../assets/thirdvector3.svg"
import p2 from "../../../assets/evway-e-1 1.png"
import p3 from "../../../assets/third2.png"
import p4 from "../../../assets/thirdvector2.png"
import p5 from "../../../assets/thirdvector.svg"
import "../HomeSubpage2/HomeSubPage2.css"
import { Link } from 'react-router-dom';

const HomeSubPage2 = () => {
  return (
    <>
    
    <div className="thirdmain">
    <div className="thirdnew">
        <div className="vectorParent2">
            <img src={p1} alt="" className="groupChild27" />
            <div className="box">
            <Link to ="/about">
            <i className="moreAboutUs">{`MORE ABOUT US  >`}</i>
            </Link>
            </div>
        </div>

        <div className="findYourSmart">
            {`Find Your Smart & Simple Solution With Best Overall Economy Charge Rate!`}
        </div>
        <div className="thirdnewChild"/>
            <img src={p2} alt="" className="evwayE11Icon" />
            <img src={p3} alt="" className="evway3510x5951Icon" />
           
            <div className="solutionsForEstablishing">
                    Solutions For Establishing Optimised Charging
                   </div>
                  <div className="ourStartupIs">
                    Our startup is revolutionizing EV charging with Autonomous /
                    Autocharge features to tackle the conventional woes of complexity and
                    time-consuming processes. Everyone can now effortlessly powerup their
                    electric vehicles, making green transportation accessible to all.
                  </div>
                   
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
</div>




    </>
  )
}

export default HomeSubPage2
