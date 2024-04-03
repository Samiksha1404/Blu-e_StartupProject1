import React from 'react'
import IntroPart from '../subcomponents/IntroPart'
import img1 from "../../assets/Station2.jpg"

function About() {
  return (
   <>
     
     <IntroPart
      imgSrc={img1}
      title="About Us"
      description="We’re Revolutionising"
      description1="EV charging experience in India"
      buttonText="SERVICES > "
      />

    </>
  )
}

export default About;