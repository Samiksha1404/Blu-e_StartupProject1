import React from 'react'
import IntroPart from '../subcomponents/IntroPart'
import img1 from "../../assets/Station3.jpg"
import GradientText from '../../components/subpages/GradientText.jsx'
import process from '../../assets/process.svg'

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

      {/* blu-e process */}
       
     <div className="flex flex-col justify-center items-center lg:mx-0 mx-4 gap-4">
     
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