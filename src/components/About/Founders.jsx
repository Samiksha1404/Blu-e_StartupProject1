import React from 'react'
import Card from './FoundersCards';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'

const founders = [
    { name: 'Mr. Ashwin Dube', role: 'Co-Founder', linkedIn: '#', email: '#' },
    { name: 'Mr. Ashwin Dube', role: 'Co-Founder', linkedIn: '#', email: '#' },
    { name: 'Mr. Ashwin Dube', role: 'Co-Founder', linkedIn: '#', email: '#' },
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
      

  const founders = [
    {
      name: 'Mr. Ashwin Dube',
      role: 'Co-Founder',
      linkedIn: 'https://www.linkedin.com/in/ashwin-dube/',
      email: 'ashwin@example.com',
    },
    {
      name: 'Mr. Ashwin Dube',
      role: 'Co-Founder',
      linkedIn: 'https://www.linkedin.com/in/jane-doe/',
      email: 'jane@example.com',
    },
    {
      name: 'Mr. Ashwin Dube',
      role: 'Co-Founder',
      linkedIn: 'https://www.linkedin.com/in/john-smith/',
      email: 'john@example.com',
    },
  ];

  return (
    <div className="">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 dark:bg-gradient-to-r dark:from-blue-950 dark:to-blue-900  p-10 mx-auto lg:w-[1191px] rounded-md mt-5">
      <h1 className="text-4xl font-bold text-white mb-8">Delivering Products That Embody...</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {founders.map((founder, index) => (
          <Card
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



export default Founders