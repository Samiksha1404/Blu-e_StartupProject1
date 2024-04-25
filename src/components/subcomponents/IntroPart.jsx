import React from 'react';

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


const IntroPart = ({ imgSrc, title, description, description1, buttonText }) => (
  <div className="herosection sm:h-screen md:h-auto" >
    <div className="imgContainer relative overflow-hidden">
      <img src={imgSrc} alt="" className="w-full h-auto sm:h-full filter brightness-75  " />
      <div className="content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h1 className="text-white text-4xl sm:text-6xl font-semibold">{title}</h1>
        <p className="text-white text-lg sm:text-xl font-light pb-4 sm:pb-10">{description}<br />{description1}</p>
        <button className="herobutton inline-block bg-blue-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg">{buttonText}</button>
      </div>
    </div>
  </div>
);




export default IntroPart;
