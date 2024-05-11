
// import React from 'react';
// import IntroPart from '../subcomponents/IntroPart';
// import img1 from '../../assets/Station2.jpg';
// import GradientText from '../../components/subpages/GradientText.jsx';
// import {
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";

// const CUSTOM_ANIMATION = {
//   mount: { scale: 1 },
//   unmount: { scale: 0.9 },
// };

// function Faqs() {
//   const [open, setOpen] = React.useState(0);

//   const handleOpen = (value) => setOpen(open === value ? 0 : value);

//   return (
//     <>
//       <IntroPart
//         imgSrc={img1}
//         title="FAQs"
//         description="We’re Revolutionising"
//         description1="EV charging experience in India"
//         buttonText="SERVICES >"
//       />
//       <div className="bg-gray-100 py-8 lg:px-24 px-4">
//         <div className="text-center mb-8">
//           <GradientText text="GOT QUESTIONS ON EV?" />
//         </div>
//         <div className="w-full">
//           <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
//             <AccordionHeader onClick={() => handleOpen(1)}>
//               <span className="flex justify-between items-center">
//                 What is an EV Charger?
//                 <span className={`ml-2 ${open === 1 ? 'transform rotate-180' : ''}`}>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </span>
//               </span>
//             </AccordionHeader>
//             <AccordionBody>
//               An EV charger is a tool to charge the battery full for both electric vehicles and plug-in hybrid electric vehicles. It pulls an electrical current from either a 240v outlet or the grid it's hardwired to and delivers that electricity to the vehicle, just like any other appliance or device you charge by plugging into the wall.
//             </AccordionBody>
//           </Accordion>

//           <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
//             <AccordionHeader onClick={() => handleOpen(2)}>
//               <span className="flex justify-between items-center">
//                 What are the types of EV Charger?
//                 <span className={`ml-2 ${open === 2 ? 'transform rotate-180' : ''}`}>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </span>
//               </span>
//             </AccordionHeader>
//             <AccordionBody>
//               There are 3 types of EV chargers which are described below
//               • Level 1 chargers are AC chargers and are the slowest, most common type. They can be connected to a wall socket at home and deliver up to 3.3 kWh, or around 9 to 10 km of range per hour.
// • Level 2 chargers are also AC chargers which provide higher speeds but require professional installation. They are the most common type found in residential, commercial, and municipal settings. Most level 2 chargers can deliver at least 7.4 kWh or 11 kWh, with some capable of up to 22 kWh. Charging on those power outputs adds about 40 km, 60 km, and 120 km per hour respectively.
// • Level 3 chargers, also called DC or fast chargers, can deliver the most power and highest charging speed. They require bulky transformers and are not cost-effective for residential and most municipal uses. The highest-rated level 3 chargers can deliver up to 350 kWh, although lower outputs such as 50 kWh, 125 kWh, and 150 kWh are more common. At those rates, most EVs can charge up to 80% in less than an hour, sometimes even as little as a few minutes
//             </AccordionBody>
//           </Accordion>

//           <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
//             <AccordionHeader onClick={() => handleOpen(3)}>
//               <span className="flex justify-between items-center">
//               Why some chargers use Alternating Current (AC) while some use Direct Current (DC)?
//                 <span className={`ml-2 ${open === 2 ? 'transform rotate-180' : ''}`}>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </span>
//               </span>
//             </AccordionHeader>
//             <AccordionBody>
//             All batteries, including those in EVs, store DC power, so the AC current coming from the grid must be converted. It's not a question of if, but rather where this conversion happens that highlights the key difference between AC and DC chargers. AC chargers are the most common (and generally slower) type. This is because the conversion happens inside your vehicle and is limited to the power it can process. In most cases, AC charging can reach up to 22 kWh.
// // For example a car with inbuilt 7.4KW AC to DC converter can be charged at the rate of 7.4KW/H only even if the charger used is of higher capacity due to the limitation of inbuilt converter.
// // With DC charging, the electricity is converted from AC to DC by the charging station before it reaches your car. This allows it to bypass the car’s slower onboard converter and achieve much higher power outputs, up to 350 kWh as it feeds power ‘directly’ to the battery. As a result, charging an EV with a DC charger takes mere minutes rather than hours
//             </AccordionBody>
//           </Accordion>

//           <Accordion open={open === 4} animate={CUSTOM_ANIMATION}>
//             <AccordionHeader onClick={() => handleOpen(4)}>
//               <span className="flex justify-between items-center">
//               What does it cost to charge an electric car?
//                 <span className={`ml-2 ${open === 2 ? 'transform rotate-180' : ''}`}>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </span>
//               </span>
//             </AccordionHeader>
//             <AccordionBody>
//             As with charging times, costs vary greatly depending on your location, utility company, and tariff, to name a few. However, two key determinants of charging costs are the kWh price of electricity and the size of your vehicle’s battery.
//             </AccordionBody>
//           </Accordion>

//           <Accordion open={open === 5} animate={CUSTOM_ANIMATION}>
//             <AccordionHeader onClick={() => handleOpen(5)}>
//               <span className="flex justify-between items-center">
//               Where can we install AC chargers?
//                 <span className={`ml-2 ${open === 2 ? 'transform rotate-180' : ''}`}>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </span>
//               </span>
//             </AccordionHeader>
//             <AccordionBody>
//             As charging time is slow in AC chargers it can be installed in places where people spend maximum time such as home, residential apartments, workplace, hotels and parking spots where the vehicle will stay parked for more time.
//             </AccordionBody>
//           </Accordion>

//           <Accordion open={open === 6} animate={CUSTOM_ANIMATION}>
//             <AccordionHeader onClick={() => handleOpen(6)}>
//               <span className="flex justify-between items-center">
//               Where can we install DC chargers?
//                 <span className={`ml-2 ${open === 2 ? 'transform rotate-180' : ''}`}>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </span>
//               </span>
//             </AccordionHeader>
//             <AccordionBody>
//             DC chargers are mainly installed where fast charging is needed and where people don’t prefer to stay for long in places such as Public Charging Stations along the highways, restraunts, shopping malls, fuel stations and other similar commercial establishments.
//             </AccordionBody>
//           </Accordion>

//           <Accordion open={open === 7} animate={CUSTOM_ANIMATION}>
//             <AccordionHeader onClick={() => handleOpen(7)}>
//               <span className="flex justify-between items-center">
//               Can one install Level 2 AC charging at home even if one has slow charger which came with the car?
//                 <span className={`ml-2 ${open === 2 ? 'transform rotate-180' : ''}`}>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </span>
//               </span>
//             </AccordionHeader>
//             <AccordionBody>
//             It is recommended to install at least 7.4KW AC charger for the reason mentioned below.

// • Charging is faster than the slow 3.3KW charger.
//  • Lack of proper charging due to frequent power cuts.
// • If there is no Fast charging station nearby.
//  • In case of emergency Evs can be charged faster
//             </AccordionBody>
//           </Accordion>
          




//         </div>
//       </div>
//     </>
//   );
// }

// export default Faqs;



import React from 'react';
import IntroPart from '../subcomponents/IntroPart';
import img1 from '../../assets/Station2.jpg';
import GradientText from '../../components/subpages/GradientText.jsx';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

function Faqs() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <IntroPart
        imgSrc={img1}
        title="FAQs"
        description="We’re Revolutionising"
        description1="EV charging experience in India"
        buttonText="SERVICES >"
      />
      <div className=" py-2 lg:px-32 px-4">
        <div className="text-center mb-8">
          <GradientText text="GOT QUESTIONS ON EV?" />
        </div>
        <div className="w-full">
          <div className="mb-4 border-b border-blue-800 ">
            <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
              <AccordionHeader onClick={() => handleOpen(1)} className="flex justify-between items-center">
                <span className="flex p-2" >
                  1) What is an EV Charger?
                  <span className={`ml-2 ${open === 1 ? 'transform rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" className='justify-end' />
                    </svg>
                  </span>
                </span>
              </AccordionHeader>
              <AccordionBody className="p-2 text-justify text-[16px]">
                An EV charger is a tool to charge the battery full for both electric vehicles and plug-in hybrid electric vehicles. It pulls an electrical current from either a 240v outlet or the grid it's hardwired to and delivers that electricity to the vehicle, just like any other appliance or device you charge by plugging into the wall.
              </AccordionBody>
            </Accordion>
          </div>
          <div className="mb-4 border-b border-blue-800">
            <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
              <AccordionHeader onClick={() => handleOpen(2)} className="flex justify-between items-center">
                <span className="flex  p-2">
                2) What are the types of EV Charger?
                  <span className={`ml-2 ${open === 2 ? 'transform rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </span>
              </AccordionHeader>
              <AccordionBody className="p-4 text-justify text-[16px]" >
              <b>There are 3 types of EV chargers which are described below.</b><br/>

• Level 1 chargers are AC chargers and are the slowest, most common type. They can be connected to a wall socket at home and deliver up to 3.3 kWh, or around 9 to 10 km of range per hour.<br/>
• Level 2 chargers are also AC chargers which provide higher speeds but require professional installation. They are the most common type found in residential, commercial, and municipal settings. Most level 2 chargers can deliver at least 7.4 kWh or 11 kWh, with some capable of up to 22 kWh. Charging on those power outputs adds about 40 km, 60 km, and 120 km per hour respectively.<br/>
• Level 3 chargers, also called DC or fast chargers, can deliver the most power and highest charging speed. They require bulky transformers and are not cost-effective for residential and most municipal uses. The highest-rated level 3 chargers can deliver up to 350 kWh, although lower outputs such as 50 kWh, 125 kWh, and 150 kWh are more common. At those rates, most EVs can charge up to 80% in less than an hour, sometimes even as little as a few minutes..
              </AccordionBody>
            </Accordion>
          </div>
          <div className="mb-4 border-b border-blue-800">
            <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
              <AccordionHeader onClick={() => handleOpen(3)}>
                <span className="flex p-2">
                3) Why some chargers use Alternating Current (AC) while some use Direct Current (DC)?
                  <span className={`ml-2 ${open === 1 ? 'transform rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </span>
              </AccordionHeader>
              <AccordionBody className="p-4 text-justify text-[16px] ">
              All batteries, including those in EVs, store DC power, so the AC current coming from the grid must be converted. It's not a question of if, but rather where this conversion happens that highlights the key difference between AC and DC chargers. AC chargers are the most common (and generally slower) type. This is because the conversion happens inside your vehicle and is limited to the power it can process. In most cases, AC charging can reach up to 22 kWh.
For example a car with inbuilt 7.4KW AC to DC converter can be charged at the rate of 7.4KW/H only even if the charger used is of higher capacity due to the limitation of inbuilt converter.
With DC charging, the electricity is converted from AC to DC by the charging station before it reaches your car. This allows it to bypass the car’s slower onboard converter and achieve much higher power outputs, up to 350 kWh as it feeds power ‘directly’ to the battery. As a result, charging an EV with a DC charger takes mere minutes rather than hours.
              </AccordionBody>
            </Accordion>
          </div>
          <div className="mb-4 border-b border-blue-800">
            <Accordion open={open === 4} animate={CUSTOM_ANIMATION}>
              <AccordionHeader onClick={() => handleOpen(4)}>
                <span className="flex p-2">
                4) What does it cost to charge an electric car?
                  <span className={`ml-2 ${open === 1 ? 'transform rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </span>
              </AccordionHeader>
              <AccordionBody className="p-4 text-justify text-[16px]">
              As with charging times, costs vary greatly depending on your location, utility company, and tariff, to name a few. However, two key determinants of charging costs are the kWh price of electricity and the size of your vehicle’s battery.
              </AccordionBody>
            </Accordion>
          </div>
          <div className="mb-4 border-b border-blue-800">
            <Accordion open={open === 5} animate={CUSTOM_ANIMATION}>
              <AccordionHeader onClick={() => handleOpen(5)}>
                <span className="flex p-2">
                5) Where can we install AC chargers?
                  <span className={`ml-2 ${open === 1 ? 'transform rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </span>
              </AccordionHeader>
              <AccordionBody className="p-4 text-justify text-[16px]">
              As charging time is slow in AC chargers it can be installed in places where people spend maximum time such as home, residential apartments, workplace, hotels and parking spots where the vehicle will stay parked for more time.
              </AccordionBody>
            </Accordion>
          </div>
          <div className="mb-4 border-b border-blue-800">
            <Accordion open={open === 6} animate={CUSTOM_ANIMATION}>
              <AccordionHeader onClick={() => handleOpen(6)}>
                <span className="flex p-2">
                6) Where can we install DC chargers?
                  <span className={`ml-2 ${open === 1 ? 'transform rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </span>
              </AccordionHeader>
              <AccordionBody className="p-4 text-justify text-[16px]">
              DC chargers are mainly installed where fast charging is needed and where people don’t prefer to stay for long in places such as Public Charging Stations along the highways, restraunts, shopping malls, fuel stations and other similar commercial establishments.
              </AccordionBody>
            </Accordion>
          </div>
          <div className="mb-4 border-b border-blue-800">
            <Accordion open={open === 7} animate={CUSTOM_ANIMATION}>
              <AccordionHeader onClick={() => handleOpen(7)}>
                <span className="flex p-2">
                7) Can one install Level 2 AC charging at home even if one has slow charger which came with the car?
                  <span className={`ml-2 ${open === 1 ? 'transform rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </span>
              </AccordionHeader>
              <AccordionBody className="p-4 text-medium text-justify text-[16px]">
             <b> It is recommended to install at least 7.4KW AC charger for the reason mentioned below.</b> <br/>

• Charging is faster than the slow 3.3KW charger.<br/>
• Lack of proper charging due to frequent power cuts.<br/>
• If there is no Fast charging station nearby.<br/>
• In case of emergency Evs can be charged faster.
              </AccordionBody>
            </Accordion>
          </div>
          
        





        </div>
      </div>
    </>
  );
}

export default Faqs;
