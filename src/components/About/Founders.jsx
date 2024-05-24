import React from 'react';
import Card from './FoundersCards';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import founder1 from '../../assets/founder1.jpg';
import founder2 from '../../assets/founder2.jpg';
import founder3 from '../../assets/founder3.jpg';

const founders = [
  {
    img: founder1,
    name: 'Mr. Ashwin Dube',
    role: 'Co-Founder',
    linkedIn: 'https://www.linkedin.com/in/ashwindube',
    email: 'ashwin.nit18@gmail.com',
  },
  {
    img: founder2,
    name: 'Mr. Varun Dixit',
    role: 'Co-Founder',
    linkedIn: 'https://www.linkedin.com/in/varundixit',
    email: 'varun.dixit1996@gmail.com',
  },
  {
    img: founder3,
    name: 'Ms. Samiksha Gupta',
    role: 'Technical and Graphics Head',
    linkedIn: 'https://www.linkedin.com/in/samiksha-gupta-99617222b',
    email: 's4samikshagupta2003@gmail.com',
  },
  {
    img: founder2,
    name: 'Mr. Kamalnath Dhekwar ',
    role: 'Technical-Head',
    linkedIn: 'https://www.linkedin.com/in/varundixit',
    email: 'varun.dixit1996@gmail.com',
  },
];

const Founders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
  };

  return (
    <div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="bg-gradient-to-r from-blue-900 to-blue-700 dark:bg-gradient-to-r dark:from-blue-950 dark:to-blue-900 p-10 mx-auto lg:w-[1191px] rounded-md mt-5"
      >
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          The minds who keep us charged...
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {founders.map((founder, index) => (
            <Card
              img={founder.img}
              key={index}
              name={founder.name}
              role={founder.role}
              linkedIn={founder.linkedIn}
              email={founder.email}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Founders;
