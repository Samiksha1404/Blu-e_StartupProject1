import React from 'react';
import Card from './Card.jsx';
import home from '../../../assets/home icon.svg';
import fleet from '../../../assets/fleet.svg';
import commercial from '../../../assets/commical icon.svg';
import workplace from '../../../assets/Workspace.svg';
import projects from '../../../assets/projects.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <>
      <div className="flex mt-4 items-center bg-gradient-to-r from-yellow-400 to-yellow-200 dark:bg-gradient-to-r dark:from-cyan-950 dark:to-cyan-800 bg md:w-[90%] mx-auto lg:pl-10 px-3 py-5">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // When window width is >= 0px
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // When window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // When window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // When window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card image={home} title="HOME" content="Get a charging station for your home" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={fleet} title="FLEET" content="Electrify your fleet with our smart Charging Solutions" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={commercial} title="COMMERCIAL" content="Attract EV owners with chargers in your premises" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={workplace} title="WORKPLACE" content="Get charging stations for staffs and visitors" />
          </SwiperSlide>
          <SwiperSlide>
            <Card image={projects} title="UNDER CONSTRUCTION PROJECTS" content="Enhance your amenities by providing charging stations to your new projects" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
