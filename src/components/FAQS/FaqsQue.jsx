import React from 'react'


import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  
  const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  
const FaqsQue = ({id,handleid,que,ans}) =>(
    <div className="mb-4 border-b border-blue-800 ">
    <Accordion open={open === (id)} animate={CUSTOM_ANIMATION}>
      <AccordionHeader onClick={() => handleOpen({handleid})} className="flex justify-between items-center">
        <span className="flex p-2 dark:text-slate-100" >
        {que}
          <span className={`ml-2 ${open === 1 ? 'transform rotate-180' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" className='justify-end dark:text-slate-100' />
            </svg>
          </span>
        </span>
      </AccordionHeader>
      <AccordionBody className="p-2 text-justify text-[16px] dark:text-blue-300">
       {ans}
      </AccordionBody>
    </Accordion>
  </div>

);
  




// const IntroPart = ({ imgSrc, title, description, description1, buttonText }) => (
//     <div className="herosection sm:h-screen md:h-auto" >
//       <div className="imgContainer relative overflow-hidden">
//         <img src={imgSrc} alt="" className="w-full h-auto sm:h-full filter brightness-75  " />
//         <div className="content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
//           <h1 className="text-white text-4xl sm:text-6xl font-semibold">{title}</h1>
//           <p className="text-white text-lg sm:text-xl font-light pb-4 sm:pb-10">{description}<br />{description1}</p>
//           <button className="herobutton inline-block bg-blue-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg">{buttonText}</button>
//         </div>
//       </div>
//     </div>
//   );




export default FaqsQue
