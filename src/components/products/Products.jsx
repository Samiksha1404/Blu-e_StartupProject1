import React from 'react'
import IntroPart from '../subcomponents/IntroPart'
import img1 from "../../assets/producthead.jpg"
import GradientText from '../../components/subpages/GradientText.jsx'
import LeftProduct from './LeftProduct.jsx'
import RightProduct from './RightProduct.jsx'
import LeftProduct2 from './LeftProduct2.jsx'
import RightProduct2 from './RightProduct2.jsx'
import p1 from "../../assets/product1.png"
import p2 from "../../assets/product2.png"
import p3 from "../../assets/product3.png"
import p4 from "../../assets/product4.png"
import p5 from "../../assets/product5.png"
import Applications from './Applications.jsx'
import DownloadSection from '../Service/DownloadSection.jsx'

function Products() {
  return (
    <>
      <IntroPart
      imgSrc={img1}
      title="Product "
      description="Our commitment is to provide world-class products "
      description1="and offerings for ultimate customer satisfaction."
      buttonLink="/services"
      buttonText="SERVICES > "
      />
    
    {/* product sub heading */}
    <div className="flex flex-col justify-center items-center lg:mx-0 mx-4 gap-4">
        <div className=" text-center lg:pl-12 lg:pr-12">
          <GradientText text="EXPLORE OUR WIDE RANGE OF EV CHARGING PRODUCTS & SOLUTIONS!" />
          <div class=" text-center text-stone-500 text-[25px] font-normal font-['Rubik'] tracking-wider dark:text-slate-100">Your beast needs a beast for a perfect charging solution.</div>
        </div>
      </div>

    {/*Products */}

    <LeftProduct
   imgsrc={p1}
   heading="7.5 kW AC Home Charger"
   subheading="Home Charging Solution"
   li1="The 7.5 kW AC Home Charger is designed for residential use, providing convenient and efficient charging for electric vehicles (EVs) at home."
   li2="This charger is capable of delivering up to 7.5 kilowatts of power, making it suitable for overnight charging or replenishing the battery during the day."
   li3="It comes with standard safety features such as overcurrent protection, overvoltage protection, and temperature monitoring to ensure safe and reliable charging."
   li4="The compact and sleek design makes it easy to install in a residential garage or parking space, offering EV owners a hassle-free charging solution at home."
   />

   <RightProduct
   heading="15 kW AC Commercial Charger"
   subheading="Commercial Charging Solution"
   li1="The 15 kW AC Commercial Charger is ideal for businesses, parking facilities, and public charging stations, offering faster charging speeds compared to home chargers."
   li2="With a power output of 15 kilowatts, it can accommodate multiple EVs simultaneously, making it suitable for high-traffic areas."
   li3="This charger is equipped with advanced features such as RFID authentication, remote monitoring, and billing integration, enabling seamless management and operation for charging service providers."
   li4="Its robust construction and weatherproof design ensure durability and reliability in outdoor environments, making it a versatile solution for commercial EV charging infrastructure."
   imgsrc={p2}
   />

<LeftProduct
   imgsrc={p3}
   heading="40-230 kW DC Fast Charger"
   subheading="Fast Charging Solution"
   li1="The 50 kW DC Fast Charger is designed for quick charging sessions, catering to the needs of EV drivers on the go who require rapid replenishment of their vehicle's battery."
   li2="With a power output of 50 kilowatts, it can significantly reduce charging times compared to AC chargers, making it suitable for highway rest stops, gas stations, and other high-demand locations."
   li3="This charger supports DC fast charging standards such as CHAdeMO and CCS, ensuring compatibility with a wide range of EV models."
   li4="It features user-friendly interfaces, including touchscreen displays and intuitive payment systems, to provide a seamless charging experience for EV drivers."
   />

<RightProduct2
   heading="ChargeMaster Pro"
   subheading="Commercial Charging Solution"
   para="Introducing the 2GUNS DC EV Charging Advertising Station, equipped with a remarkable 43-inch advertising screen for effortless control and convenience. Designed to provide seamless charging experiences for electric vehicle (EV) owners, this innovative station combines advanced technology with user-friendly features to ensure efficient and reliable charging sessions."
   li2="Promotional Opportunities: The advertising screen offers businesses a unique way to reach EV owners during charging sessions, allowing for effective promotion of products, services, and brand messages."
   li3="43-Inch Advertising Screen: Featuring a large, high-resolution 43-inch screen, the station provides ample space for interactive displays, promotional content, and user instructions, enhancing engagement and interaction.."
   li4="Comprehensive Solution: The 2GUNS DC EV Charging Advertising Station combines cutting-edge technology with user-friendly features, including app control, Ethernet/4G connectivity, and versatile advertising capabilities, revolutionizing EV charging and promotional opportunities for businesses."
   imgsrc={p4}
   />

<LeftProduct2
imgsrc={p5}
heading="Blu-E SplitJet"
subheading="Fast Charging Solution"/>

<Applications/>
<DownloadSection/>








    </>
  )
}

export default Products