import React from 'react'
import IntroPart from '../subcomponents/IntroPart'
import img1 from "../../assets/Station3.jpg"
import img2 from "../../assets/service1.png"
import img3 from "../../assets/service2.png"


import GradientText from '../../components/subpages/GradientText.jsx'
import process from '../../assets/process.svg'
import s1 from '../../assets/s1.svg'
import s2 from '../../assets/s2.svg'
import s3 from '../../assets/s3.svg'
import s4 from '../../assets/s4.svg'
import s5 from '../../assets/s5.svg'

import s7 from '../../assets/s7.svg'
import ServiceSolutioncard from './ServiceSolutioncard.jsx'


function Services() {
  return (
    <>

<IntroPart
      imgSrc={img1}
      title="Services"
      description="Delivering top-tier charging "
      description1="solutions for customer delight."
      buttonText="PRODUCT > "
      />
     
      {/* blu-e heading */}
      <div className="flex flex-col justify-center items-center lg:mx-0 mx-4 gap-4">
      <div className=" text-center">
      <GradientText text="EV CHARGING SOLUTIONS FOR YOU"/>
      <div class=" text-center text-stone-500 text-[25px] font-normal font-['Rubik'] tracking-wider">The fast, safe and easy way to charge your electric vehicle.</div>
      </div>
      </div>

      {/* servive slider */}


       
       <div className=" flex px-[169px]   lg:mx-0 mx-4  h-[376px]   mt-10">
       
       <div className=' w-[600px]  flex'>
       <img className=" w-[322px] h-[376px]"   src={img2}  />
       
       <div className="w-[300px] h-[326px]  bg-white mt-[50px] pt-[20px] pl-[20px] ml-[-112px]">
       <img className='w-[300px] h-[306px] ' src={img3} alt="" />
       </div>
       </div>
       <div className=' pl-[90px] '>
       <div class="  text-blue-950 text-[25px] lg:mx-0 font-medium font-['Rubik'] leading-loose tracking-wide">Solutions For Establishing Optimised Charging</div>
       <div class="w-[648px] h-[201px] text-justify lg:mx-0"><span className="text-blue-950 text-xl font-bold font-['Sarabun'] leading-7 tracking-wide">BLU-</span><span className="text-yellow-300 text-xl font-bold font-['Sarabun'] leading-7 tracking-wide">E</span><span className="text-zinc-600 text-xl font-normal font-['Sarabun'] leading-7 tracking-wide"> is provider of charging station services for electric vehicles. As a pioneer in the field, we are committed to facilitating the widespread adoption of electric transportation by offering convenient and reliable charging solutions. Our charging stations are strategically located in key areas to ensure easy access for electric vehicle owners, whether it be at homes, workplaces, commercial establishments, or public spaces.</span></div>
       </div>
       </div>

       

      <div className="">
        
        <GradientText text="Services Solution"/>

      <div className="flex flex-col  md:gap-10 gap-6 mt-6 ">
      <div className="grid md:grid-cols-4 grid-cols-2  md:gap-16  gap-6 mx-auto lg:px-0 px-4">
        <ServiceSolutioncard title="Revolutionizing EV Charging with Autonomous Convenience" image={s1}/>
        <ServiceSolutioncard title="Easy payment 
with UPI" image={s2}/>
        <ServiceSolutioncard title="Subscription model for long route drivers" image={s3}/>
        <ServiceSolutioncard title="Real-Time Monitoring Status" image={s4}/>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 mx-auto md:gap-14 gap-6 lg:px-0 px-4">
      <ServiceSolutioncard title="Provides a quality service with minimum down time" image={s5}/>
      <ServiceSolutioncard title="Operative in all seasons" image={s1}/>
      <ServiceSolutioncard title="Make money by building network with us" image={s7}/>
      </div>
    </div>
      </div>
      

        
    
     

      {/* blu-e process */}
       
     <div className="flex flex-col justify-center items-center lg:mx-0 mx-4 gap-4 mt-6">
     
     <div className=" text-center">
      <GradientText text="Charge with Blu-E Process"/>
     </div>

     <div className="">
        <img src={process} alt="" className="" />
      </div>
     </div>


     {/* about blu-e paragraph */}

    <div className="">
    <div class="mt-8 md:mx-auto mx-4 flex flex-col gap-5 lg:w-[1195px] md:text-xl  text-justify dark:text-slate-400 ">
      
      <p class="">At <span class="text-indigo-900 dark:text-indigo-600  text-xl md:text-xl font-semibold ">BLU-</span ><span class="text-yellow-500 text-xl md:text-2xl font-semibold">E</span> , we understand the importance of efficient charging infrastructure for electric vehicles. Our state-of-the-art charging stations are equipped with advanced technologies, ensuring fast charging times and optimal performance. We prioritize user convenience by offering user-friendly interfaces and payment options, allowing seamless charging experiences.</p>


        <p class="">We pride ourselves on our commitment to sustainability and environmental responsibility. Our charging stations utilize clean energy sources, further reducing carbon emissions and promoting a greener future. With our reliable network of charging stations, electric vehicle owners can confidently embark on their journeys, knowing that they have a dependable charging partner along the way.
          Our dedicated team of professionals ensures the maintenance and operational efficiency of our charging stations, providing 24/7 support and assistance. We strive to deliver exceptional service, constantly monitoring and upgrading our infrastructure to meet the evolving needs of electric vehicle users.
        </p>
         

          <p class="">Choose Us ,as your charging station service provider and join the electric revolution. Experience the convenience, reliability, and environmental benefits of our cutting-edge charging solutions, as we work together towards a sustainable future.</p>

   </div>
    </div>

  
      
    </>
  )
}

export default Services