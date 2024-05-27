
import React, { useEffect, useState } from 'react';
import heroSec from '../../../assets/herosectionimg.png';
import img2 from '../../../assets/2.jpg';
import img3 from '../../../assets/3.jpg';
import img4 from '../../../assets/4.jpg';
import MyComponent from './MyComponent'; // Adjust the import path according to your project structure

const Herosection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [heroSec, img2, img3, img4];
  const totalItems = images.length;
  const intervalTime = 6000; // 5 seconds for auto-slide
  const transitionDuration = 3000; // 1 second for slide animation

  const contents = [
    {
      title: 'Enjoy a seamless ',
      title1: "charging",
      title2: " experience at",
      subtitle: (
        <>
          <span className="text-blue-950">BLU</span>
          <span className="text-blue-950">-</span>
          <span className="text-yellow-300">E</span>
        </>
      ),
      description: "Don’t pump gas, pump electrons!",
      linkText: "CONTACT US",
      linkUrl: "/contact",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/352487698ad878eeb4e19e9a2614139e8f1d70dea5a688be9fbf969676b69fd8?apiKey=d7e5bab79af041058fcada747b413e1e&",
    },
    {
      title: 'Experience the   ',
      title1: "future",
      title2: " of charging with",
      subtitle: (
        <>
          <span className="text-blue-950">BLU</span>
          <span className="text-blue-950">-</span>
          <span className="text-yellow-300">E</span>
        </>
      ),
      description: "Eco-friendly and efficient!",
      linkText: "LEARN MORE",
      linkUrl: "/about",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/352487698ad878eeb4e19e9a2614139e8f1d70dea5a688be9fbf969676b69fd8?apiKey=d7e5bab79af041058fcada747b413e1e&",
    },
    {
      title: 'Fast and ',
      title1: "reliable ",
      title2: " charging at",
      subtitle: (
        <>
         <span className="text-blue-950">BLU</span>
          <span className="text-blue-950">-</span>
          <span className="text-yellow-300">E</span>
        </>
      ),
      description: "Charge in minutes, not hours!",
      linkText: "PRODUCTS",
      linkUrl: "/products",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/352487698ad878eeb4e19e9a2614139e8f1d70dea5a688be9fbf969676b69fd8?apiKey=d7e5bab79af041058fcada747b413e1e&",
    },
    {
      title: 'Charging  ',
      title1: " made",
      title2: " easy with",
      subtitle: (
        <>
          <span className="text-blue-950">BLU</span>
          <span className="text-blue-950">-</span>
          <span className="text-yellow-300">E</span>
        </>
      ),
      description: "Convenience at your fingertips!",
      linkText: "JOIN US",
      linkUrl: "/location",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/352487698ad878eeb4e19e9a2614139e8f1d70dea5a688be9fbf969676b69fd8?apiKey=d7e5bab79af041058fcada747b413e1e&",
    },
  ];

  useEffect(() => {
    const nextItem = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    const autoSlide = setInterval(nextItem, intervalTime);

    return () => clearInterval(autoSlide);
  }, [totalItems]);

  const showItem = (index) => {
    setCurrentIndex(index);
  };

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  return (
    <div id="default-carousel" className="relative w-full h-[630px]" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-[630px] overflow-hidden rounded-lg">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute block w-full h-[630px] transition-opacity duration-${transitionDuration} ease-in-out ${
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* MyComponent displayed above each image */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center z-20">
              <div className="absolute left-0 w-full h-full flex items-start justify-start">
                <MyComponent {...contents[index]} />
              </div>
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-white to-transparent dark:bg-gradient-to-r dark:from-slate-400 dark:to-transparent"></div>
            <img
              src={img}
              className="absolute block h-[630px] w-full object-cover top-0 left-0 z-0 cover-center"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-blue-600' : 'bg-white'
            }`}
            aria-current={currentIndex === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => showItem(index)}
          ></button>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevItem}
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextItem}
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-blue-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-blue-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Herosection;
