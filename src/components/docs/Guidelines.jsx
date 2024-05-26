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
      <div className="flex mt-4 items-center bg-gradient-to-r from-yellow-400 to-yellow-200 dark:bg-gradient-to-r dark:from-cyan-950 dark:to-cyan-800 bg md:w-[90%] mx-auto lg:pl-16 px-3 py-5">
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
          className="mySwiper"
        >
          <SwiperSlide>
            <Card number="1" description="this is abiofjhfie ndaioaejhdjhd" />
          </SwiperSlide>
          <SwiperSlide>
            <Card number="2" description="this is abiofjhfie ndaioaejhdjhd" />
          </SwiperSlide>
          <SwiperSlide>
            <Card number="3" description="this is abiofjhfie ndaioaejhdjhd" />
          </SwiperSlide>
          <SwiperSlide>
            <Card number="4" description="this is abiofjhfie ndaioaejhdjhd" />
          </SwiperSlide>
          <SwiperSlide>
            <Card number="5" description="this is abiofjhfie ndaioaejhdjhd" />
          </SwiperSlide>
          <SwiperSlide>
            <Card number="6" description="this is abiofjhfie ndaioaejhdjhd" />
          </SwiperSlide>
          <SwiperSlide>
            <Card number="7" description="this is abiofjhfie ndaioaejhdjhd" />
          </SwiperSlide>
          <SwiperSlide>
            <Card number="8" description="this is abiofjhfie ndaioaejhdjhd" />
          </SwiperSlide>
          <SwiperSlide>
            <Card number="9" description="this is abiofjhfie ndaioaejhdjhd" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
