
import React from 'react';
import { Link } from 'react-router-dom';

// const IntroPart = ({ imgSrc, title, description, description1, buttonText }) => (
//     <div className="herosection" style={{ width: "100%", height: "630px", paddingtop: "65" }}>
//   <div className="imgContainer" style={{ width: "100%", height: "630px", overflow: " hidden", position: "relative", display: "block" }}>
//     <img src={imgSrc} alt="" style={{ width: "100%", height: "630px", filter: "brightness(0.2)" }} />
//     <div className="content" style={{ alignContent: "center", position: "absolute", top: "60%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", zIndex: "1" }}>
//       <h1 style={{ padding: "2px 2px", textAlign: "center", color: 'white', fontSize: 84, fontFamily: 'Rubik', fontWeight: '600', wordWrap: 'break-word' }}>{title}</h1>
//       <p style={{ paddingBottom: "50px ", textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Rubik', fontWeight: '200', wordWrap: 'break-word' }}>{description}<br />{description1}</p>
//       <button className="herobutton" style={{ width: 170, height: 50, textAlign: 'center', color: 'white', display: "block", margin: "auto", fontSize: 16, fontFamily: 'Rubik', fontWeight: '100', wordWrap: 'break-word', background: '#091F5B' }}>{buttonText}</button>
//     </div>
//   </div>
//   </div>
// );


const IntroPart = ({ imgSrc, title, description, description1, buttonText, buttonLink }) => (
  <div className="herosection relative">
    <div className="imgContainer relative overflow-hidden md:h-[700px] bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${imgSrc})` }}>
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0.1, 0.9), rgba(0, 0.2, 0, 0))' }}></div>
      <div className="content absolute inset-0 flex flex-col justify-center items-center text-center z-10">
        <h1 className="text-white text-34xl md:text-6xl lg:text-7xl font-bold text-center">{title}</h1>
        <p className="text-white text-3xl text-center md:text-lg lg:text-xl font-light pb-4 md:pb-6 lg:pb-8">
          {description}
          <br />
          {description1}
        </p>
        <Link to={buttonLink}>
          <button className="herobutton bg-blue-800 text-white px-4 md:px-6 py-2 md:py-3 lg:py-4 rounded-lg text-base md:text-lg lg:text-xl hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-100">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  </div>
);


export default IntroPart;

