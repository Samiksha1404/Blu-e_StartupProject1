import React from 'react'
import IntroPart from '../subcomponents/IntroPart'
import img1 from "../../assets/Station4.jpg"
function Products() {
  return (
    <>
      <IntroPart
      imgSrc={img1}
      title="Product "
      description="We’re Revolutionising"
      description1="EV charging experience in India"
      buttonText="SERVICES > "
      />
    </>
  )
}

export default Products