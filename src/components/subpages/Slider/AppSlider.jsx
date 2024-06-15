
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../Slider/SliderComponent";
import DownloadSection from "../../Service/DownloadSection";

import GradientText from '../../../components/subpages/GradientText.jsx'
import plugeasy from '../../../assets/plugeasy.jpg';
const AppSlider = () => {
  return (
    <div>
   
     <div className="flex items-center justify-center flex-col h-[700px] pt-12 ">
    <div className="flex pb-6">
    <div className="w-[100px] h-[100px] pb-4 m-2 animate-zoom">
     <img src={plugeasy} alt="Plugeasylogo" />
     </div>
     <div>
     <GradientText text="PLUGEASY" />
     </div>
     </div>
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]} // Include Autoplay module
        autoplay={{ // Autoplay settings
          delay: 3000, // 3 seconds delay between slides
          disableOnInteraction: false, // Autoplay will not be disabled on interaction
        }}
        className="max-w-[90%] lg:max-w-[100%] sm:min-w-[50%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title} className="custom-swiper-slide lg:p-4 sm:mr-5">
            <div key={item.id} className={`flex flex-col mb-20 group relative shadow-lg text-white rounded-xl h-[400px] w-[215px] lg:h-[400px] lg:w-[235px] overflow-hidden cursor-pointer ${getCssClass(item.id)}`}>
              <div
                className="absolute inset-0 bg-cover "
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
     </div>
     <div className="mt-2">
     <DownloadSection/>
     </div>
     
     </div>

  );
};

export default AppSlider;

const getCssClass = (itemId) => {
  switch (itemId) {
    case 6:
      return "lg:w-[600px] w-[600px] ";
    case 7:
      return "lg:w-[600px] w-[600px] ml-[380px] lg:ml-[380px] ";
    case 8:
      return "lg:w-[600px] w-[600px] sm:ml-[760px] lg:ml-[760px] ";
      case 9:
      return "lg:w-[600px] w-[600px] ml-[1500px] lg:ml-[1500px] ";
      case 10:
      return "lg:w-[600px] w-[600px] lg:ml-[1350px] ";
    default:
      return "";
  }
};
