// import React from 'react';
// import Card from './FoundersCards';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
// import founder1 from '../../assets/founder1.jpg';
// import founder2 from '../../assets/founder2.jpg';
// import founder3 from '../../assets/founder3.jpg';
// import founder4 from '../../assets/founder4.jpg';
// import founder5 from '../../assets/founder5.jpg';


// const founders = [
//   {
//     img: founder1,
//     name: 'Mr. Ashwin Dube',
//     role: 'Co-Founder',
//     linkedIn: 'https://www.linkedin.com/in/ashwindube',
//     email: 'ashwin.nit18@gmail.com',
//   },
//   {
//     img: founder2,
//     name: 'Mr. Varun Dixit',
//     role: 'Co-Founder',
//     linkedIn: 'https://www.linkedin.com/in/varundixit',
//     email: 'varun.dixit1996@gmail.com',
//   },
//   {
//     img: founder3,
//     name: 'Ms. Samiksha Gupta',
//     role: 'Technical and Graphics Head',
//     linkedIn: 'https://www.linkedin.com/in/samiksha-gupta-99617222b',
//     email: 's4samikshagupta2003@gmail.com',
//   },
//   {
//     img: founder4,
//     name: 'Mr. Kamalnath Dhekwar ',
//     role: 'Technical-Head',
//     linkedIn: 'https://www.linkedin.com/in/kamalnath-dhekwar-0a5a38261/',
//     email: 'dhekwarkamalnath18@gmail.com',
//   },
//   {
//     img: founder5,
//     name: 'Mr. Himanshu Ray ',
//     role: 'Design-Team',
//     linkedIn: 'https://www.linkedin.com/in/himanshu-ray-ab4809297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
//     email: 'rayhs@rknec.edu',
//   },
// ];

// const Founders = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 500,
//   };

//   return (
//     <div>
//       <div
//         data-aos="zoom-in"
//         data-aos-duration="1500"
//         className="bg-gradient-to-r from-blue-900 to-blue-700 dark:bg-gradient-to-r dark:from-blue-950 dark:to-blue-900 p-10 mx-auto lg:w-[80%] rounded-md mt-5 flex flex-col justify-center items-center  "
//       >
//         <h1 className="text-4xl font-bold text-white mb-8 text-center">
//           The minds who keep us charged...
//         </h1>
//         <div
//           data-aos="fade-up"
//           data-aos-duration="1500"
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
//         >
//           {founders.map((founder, index) => (
//             <Card
//               img={founder.img}
//               key={index}
//               name={founder.name}
//               role={founder.role}
//               linkedIn={founder.linkedIn}
//               email={founder.email}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Founders;

import React from 'react';
import Card from './FoundersCards';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import founder1 from '../../assets/founder1.jpg';
import founder2 from '../../assets/founder2.jpg';
import founder3 from '../../assets/founder3.jpg';
import founder4 from '../../assets/founder4.jpg';
import founder5 from '../../assets/founder5.jpg';

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
    img: founder4,
    name: 'Mr. Kamalnath Dhekwar ',
    role: 'Technical-Head',
    linkedIn: 'https://www.linkedin.com/in/kamalnath-dhekwar-0a5a38261/',
    email: 'dhekwarkamalnath18@gmail.com',
  },
  {
    img: founder5,
    name: 'Mr. Himanshu Ray ',
    role: 'Design-Team',
    linkedIn: 'https://www.linkedin.com/in/himanshu-ray-ab4809297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    email: 'rayhs@rknec.edu',
  },
];

const Founders = () => {
  return (
    <div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1500"
        className="bg-gradient-to-r from-blue-900 to-blue-700 dark:bg-gradient-to-r dark:from-blue-950 dark:to-blue-900 p-10 mx-auto lg:w-[80%] rounded-md mt-5 flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          The minds who keep us charged...
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0"
        >
          <div className="flex justify-center col-span-2">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <Card
                img={founders[0].img}
                name={founders[0].name}
                role={founders[0].role}
                linkedIn={founders[0].linkedIn}
                email={founders[0].email}
              />
              <Card
                img={founders[1].img}
                name={founders[1].name}
                role={founders[1].role}
                linkedIn={founders[1].linkedIn}
                email={founders[1].email}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 col-span-2">
            <Card
              img={founders[2].img}
              name={founders[2].name}
              role={founders[2].role}
              linkedIn={founders[2].linkedIn}
              email={founders[2].email}
            />
            <Card
              img={founders[3].img}
              name={founders[3].name}
              role={founders[3].role}
              linkedIn={founders[3].linkedIn}
              email={founders[3].email}
            />
            <Card
              img={founders[4].img}
              name={founders[4].name}
              role={founders[4].role}
              linkedIn={founders[4].linkedIn}
              email={founders[4].email}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
