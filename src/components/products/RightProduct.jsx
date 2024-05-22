import React from 'react'

const RightProduct = ({ heading, subheading, li1, li2, li3, li4, imgsrc }) => (
  <>
    <div className='p-4'>
      <div className=" flex flex-col lg:flex-row   dark:bg-white  items-center w-fit mx-auto ">
        {/* heading content*/}
        <div data-aos="fade-down" data-aos-duration="1000" className="bg-white dark:bg-slate-800  md:p-10 p-4 lg:w-[756px] md:text-[20px] lg:h-[499px] flex flex-col justify-center gap-2 ">
         <h1 className="lg:text-[48px] md:text-[42px] text-[24px] font-semibold dark:text-indigo-400 text-black font-['Rubik'] ">{heading}</h1>
          <h1 className="lg:text-[20px] md:text-[25px] text-[18px] text-blue-950 dark:text-blue-300" >{subheading}</h1>
          <p className="dark:text-slate-400 md:ml-0 ml-4 pt-4 text-zinc-600 ">
            <ul className='list-disc text-justify '>
              <li>{li1}</li>
              <li>{li2}</li>
              <li>{li3}</li>
              <li>{li4}</li>
            </ul>
          </p>
        </div>
 {/*image section*/}
        <div data-aos="flip-down" data-aos-duration="1000" className="lg:w-[526px] item-center justify-center">
          <img src={imgsrc} alt="" className="w-[330] h-[500px] lg:ml-32 " />
        </div>
      </div>
    </div>

    <div className=" self-end max-w-[481px] min-h-[30px] bg-gradient-to-r from-yellow-300 via-yellow-400 to-slate-10 flex items-center justify-center mt-6 mb-6 relative right-0"></div>
  </>
);

export default RightProduct;
