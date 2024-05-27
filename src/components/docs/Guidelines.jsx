import React from 'react';
import Card from './Card.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" data-aos-duration="2000">
          <h1 data-aos="fade-down" data-aos-duration="1000" className="text-center font-[surban] text-base md:text-lg lg:text-xl text-indigo-900 my-4 dark:text-blue-300">Ensuring Compliance and Safety Standards</h1>
          <h1 data-aos="fade-down" data-aos-duration="1000" className="text-center font-[surban] text-2xl lg:text-3xl xl:text-4xl  md:text-xl lg:text-2xl text-black mb-6 dark:text-slate-100">Guidelines for Establishing  <br /> Electric Vehicle Charging Stations.</h1>

          <div data-aos="fade-up" data-aos-duration="1000" className="aboutInfo pt-5 pb-5 text-slate-800 dark:text-slate-400 md:text-lg text-[15px] text-justify item-center gap-5 lg:w-[1380px] lg:mx-[60px] mx-5 flex flex-col justify-center items-center ">

            <span data-aos="fade-down" data-aos-duration="1000" className="mt-2 text-justify">
              Setting up an Electric Vehicle (EV) charging station entails adhering to various guidelines outlined by governmental authorities, which are often available in different PDF documents. These guidelines provide comprehensive instructions and regulations necessary for the establishment and operation of EV charging infrastructure, covering crucial aspects such as safety standards, infrastructure requirements, and regulatory compliance. They serve as essential resources for individuals and organizations venturing into the field of electric mobility.
            </span>

            <p data-aos="fade-down" data-aos-duration="1000" className="mt-4 text-justify">
              In addition to safety standards and regulatory compliance, the guidelines also stipulate minimum space requirements mandated by the government for setting up these stations. Alongside statutory guidelines, there are important considerations such as the optimal placement of charging equipment, accessibility for users, integration with renewable energy sources, and provision for future scalability.
            </p>
            <p data-aos="fade-down" data-aos-duration="2000" className="mt-4 text-justify">
              By meticulously following these guidelines, stakeholders ensure not only the safety and efficiency of the charging infrastructure but also facilitate the seamless transition towards sustainable transportation solutions. This, in turn, contributes significantly to the global efforts to combat climate change and reduce carbon emissions, making a substantial impact on the environment and society as a whole.
            </p>
          </div>
        </div>
      </div>

      <div className="h-[500px] flex mt-4 items-center bg-gradient-to-r from-yellow-400 to-yellow-200 dark:bg-gradient-to-r dark:from-cyan-950 dark:to-cyan-800 md:w-[90%] mx-auto lg:pl-16 px-3 py-5">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper custom-swiper"
          style={{ marginTop: '20px' }} // Add this line
        >
          <SwiperSlide>
            <Card number="1" description="Amendment to Circular- Guidelines on Electric Vehicle Charging Station (EVCS)" driveLink="https://drive.google.com/file/d/1D-wWVFQvI-08pXb1c5hXH4VZ7lysMEjT/view?usp=drive_link" downloadButton="https://drive.google.com/file/d/1D-wWVFQvI-08pXb1c5hXH4VZ7lysMEjT/view?usp=drive_link" />
          </SwiperSlide>
          <SwiperSlide>
            <Card number="2" description="Fixing of service charges for incentivized Electric Vehicle Charging Station in the State of Maharashtra." driveLink="https://drive.google.com/file/d/1H6kxQRD28Uwsb-4-P0_R_KUCt95-g_0A/view?usp=drive_link" downloadButton="https://drive.google.com/file/d/1H6kxQRD28Uwsb-4-P0_R_KUCt95-g_0A/view?usp=drive_link" />
          </SwiperSlide>
          <SwiperSlide>
            <Card number="3" description="Amendment in the revised Guidelines and Standards for Charging Infrastructure for Electric Vehicles - reg" driveLink="https://drive.google.com/file/d/1wrnkpLDzNR7lCYl4uztj-AbkNWOuKXjJ/view?usp=drive_link" downloadButton="https://drive.google.com/file/d/1wrnkpLDzNR7lCYl4uztj-AbkNWOuKXjJ/view?usp=drive_link" />
          </SwiperSlide>
          <SwiperSlide>
            <Card number="4" description="Case of Maharashtra State Electricity Distribution Company Limited for Truing-up of Aggregate Revenue Requirement (ARR) of FY 2017-18 and FY 2018-19..." driveLink="https://drive.google.com/file/d/13_-qqxRmafZCfG_I3RQscWLR6b-EBOi_/view?usp=drive_link" downloadButton="https://drive.google.com/file/d/13_-qqxRmafZCfG_I3RQscWLR6b-EBOi_/view?usp=drive_link" />
          </SwiperSlide>
          <SwiperSlide>
            <Card number="5" description="Government of Maharashtra, Department of Forest, Industry, Energy, and Labor, Resolution No. VVAADO 2017/Pr. No. 188/Industry-2, Date: 14th February, 2018" driveLink="https://drive.google.com/file/d/1TLysX57TZBv-MW_lYhvL1OG6K02VeT62/view?usp=drive_link" downloadButton="https://drive.google.com/file/d/1TLysX57TZBv-MW_lYhvL1OG6K02VeT62/view?usp=drive_link" />
          </SwiperSlide>
          <SwiperSlide>
            <Card number="6" description="Government of India, Ministry of Power, New Delhi, No. 12/2/2018-EV, Date: 14th December, 2018" driveLink="https://drive.google.com/file/d/1qTwXYZuIwMTu2cqAI8KX767uucREsebq/view?usp=drive_link" downloadButton="https://drive.google.com/file/d/1qTwXYZuIwMTu2cqAI8KX767uucREsebq/view?usp=drive_link" />
          </SwiperSlide>
          <SwiperSlide>
            <Card number="7" description="Charging Infrastructure for Electric Vehicles (EV) -Revised Guidelines & Standards-reg" driveLink="https://drive.google.com/file/d/1xCUPtG0TbEPl7u9T2xBy6z-mDU7VWViu/view?usp=drive_link" downloadButton="https://drive.google.com/file/d/1xCUPtG0TbEPl7u9T2xBy6z-mDU7VWViu/view?usp=drive_link" />
          </SwiperSlide>
          <SwiperSlide>
            <Card number="8" description="Case of Maharashtra State Electricity Distribution Company Limited for Truing-up of Aggregate Revenue Requirement (ARR) of FY 2017-18 and FY 2018-19" driveLink="https://drive.google.com/file/d/1FEbro089TrJp_alPgCKZ74cj01LjEhUE/view?usp=drive_link" downloadButton="https://drive.google.com/file/d/1FEbro089TrJp_alPgCKZ74cj01LjEhUE/view?usp=drive_link" />
          </SwiperSlide>
          <SwiperSlide>
            <Card number="9" description="ELECTRIC VEHICLE Infrastructure || CURRENT LANDSCAPE OF EV INFRASTRUCTURE || EV CHARGING MARKET" driveLink="https://drive.google.com/file/d/1qBGQ7IBw77SFeftm3ebIzo1Q1-h9mbMQ/view?usp=drive_link" downloadButton="https://drive.google.com/file/d/1qBGQ7IBw77SFeftm3ebIzo1Q1-h9mbMQ/view?usp=drive_link" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
