import React from 'react';

const IntroPart = ({ imgSrc, title, description, description1, buttonText }) => (
    <div className="herosection" style={{ width: "100%", height: "630px", paddingtop: "65" }}>
  <div className="imgContainer" style={{ width: "100%", height: "630px", overflow: " hidden", position: "relative", display: "block" }}>
    <img src={imgSrc} alt="" style={{ width: "100%", height: "630px", filter: "brightness(0.2)" }} />
    <div className="content" style={{ alignContent: "center", position: "absolute", top: "60%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", zIndex: "1" }}>
      <h1 style={{ padding: "2px 2px", textAlign: "center", color: 'white', fontSize: 84, fontFamily: 'Rubik', fontWeight: '600', wordWrap: 'break-word' }}>{title}</h1>
      <p style={{ paddingBottom: "50px ", textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Rubik', fontWeight: '200', wordWrap: 'break-word' }}>{description}<br />{description1}</p>
      <button className="herobutton" style={{ width: 170, height: 50, textAlign: 'center', color: 'white', display: "block", margin: "auto", fontSize: 16, fontFamily: 'Rubik', fontWeight: '100', wordWrap: 'break-word', background: '#091F5B' }}>{buttonText}</button>
    </div>
  </div>
  </div>
);

export default IntroPart;
