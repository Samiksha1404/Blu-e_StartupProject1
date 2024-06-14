// import React, { useState } from 'react';
// import axios from 'axios';
// import img1 from '../../assets/contactUs.jpg'
// import img2 from '../../assets/call.svg'
// import img3 from '../../assets/location.svg'
// import img4 from '../../assets/mail.svg'
// import IntroPart from '../subcomponents/IntroPart'
// function Contack() {

//   const ContactInfo = ({ title, imgSrc, description }) => (
//     <div className="c1 mx-auto" style={{ flex: 1, padding: "30px" }}>
//       <div className="info1">
//         <h1 className='text-white lg:text-5xl text-3xl font-semibold mb-3'>{title}</h1>
//         <div className="detail" style={{ display: "flex" }}>
//           <img className='animate-bounce' src={imgSrc} alt="" />
//           <p style={{ paddingTop: "2px", paddingLeft: "12px", fontSize: "16px", color: "white" }}>{description}</p>
//         </div>
//       </div>
//     </div>
//   );
  
//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     setIsClicked(true);
//     // Call your handleSubmit function
//     handleSubmit();
//     // Optionally, reset the color after some time if needed
//     setTimeout(() => setIsClicked(false), 300); // reset color after 300ms
//   };

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // const response = await axios.post('http://localhost:3000/api/contact', formData);
//       const response = await axios.post('https://blu-e-startup-backend.vercel.app/api/contact', formData);
//       console.log('Form submitted successfully', response.data);
//       // Optionally, you can reset the form after submission
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         subject: '',
//         message: '',
//       });
//     } catch (error) {
//       console.error('Error submitting form', error); // Log the error
//       alert('Error submitting form'); // Notify the user about the error
//     }
//   };
  

//   return (
//     <>
//       {/* introduction section */}
//       <IntroPart
//         imgSrc={img1}
//         title="Contact Us"
//         description="Get in touch today"
//         description1="we Will Respond Soon!"
//         buttonLink="/about"
//         buttonText="ABOUT US"
//       />


//       {/* contact part */}

//       <div data-aos="zoom-out" data-aos-duration="1500" className="contactpart bg-indigo-50 dark:bg-slate-950 pt-20 md:pt-40">
//   <div className="contactsection md:w-4/5 md:mx-auto mx-4 py-10 md:py-20 rounded-lg shadow-lg shadow-slate-600" style={{ background: 'linear-gradient(113deg, rgba(9, 31, 91, 0.96) 20%, rgba(18.48, 26.12, 60.06, 0.77) 44%, rgba(25.47, 27.82, 60.60, 0.46) 70%, rgba(35.88, 30.35, 61.41, 0) 100%)' }}>
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center items-start">
//       <ContactInfo
//         title="On Call"
//         imgSrc={img2}
//         description="+91 7620087268"
//       />
//       <ContactInfo
//         title="On Whatsapp"
//         imgSrc={img2}
//         description="+91 7620087268"
//       />
//       <ContactInfo
//         title="On Site"
//         imgSrc={img3}
//         description={
//           <div>
//             Saoji restaurant, beside <br />
//             Haldiram,Utkarsh Nagar, <br />
//             Gittikhadan,  Nagpur, <br />
//            Maharashtra 440013
//           </div>
//         }
//       />
//       <ContactInfo
//         title="On Mail"
//         imgSrc={img4}
//         description={<a href='mailto:shashtavbharat.official@gmail.com'>shashtavbharat.official@gmail.com</a>}
//       />
//     </div>
  


 


//           {/* form section */}


//           <div data-aos="fade-up" data-aos-duration="1500" className="form lg:mx-12 md:mx-8 mx-4 bg-slate-200 dark:bg-gray-700 rounded" style={{ padding: "20px", }}>
//             <h1 className='text-lg dark:text-yellow-100 md:text-3xl' style={{ margin: "10px", fontFamily: "sans-serif" }}>Send us a message!</h1>
//             <form onSubmit={handleSubmit} className='justify-center items-center p-2 sm:p-2'>
//               <div className="grid gap-6 mb-6 md:grid-cols-2">
//                 <div>
//                   <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
//                   <input type="text" id="first_name" name="name" value={formData.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded" placeholder="John" required />
//                 </div>

//                 <div>
//                   <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
//                   <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded" placeholder="12345678" required />
//                 </div>
//               </div>

//               <div className="grid gap-6 mb-6 md:grid-cols-2">
//                 <div>
//                   <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
//                   <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded" placeholder="john.doe@company.com" required />
//                 </div>
//                 <div>
//                   <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
//                   <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded" placeholder="Subject" required />
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
//                 <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded" placeholder="Message" required />
//               </div>

//               <button type="submit" className="block m-auto justify-center items-center text-white bg-yellow-400 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded animate-zoom">
//                 Submit Message
//               </button>
//             </form>

//           </div>

//         </div>
//       </div>
      

//     </>
//   )
// }

// export default Contack




import React, { useState } from 'react';
import axios from 'axios';
import img1 from '../../assets/contactUs.jpg';
import img2 from '../../assets/call.svg';
import img3 from '../../assets/location.svg';
import img4 from '../../assets/mail.svg';
import IntroPart from '../subcomponents/IntroPart';

function Contack() {
  const ContactInfo = ({ title, imgSrc, description }) => (
    <div className="c1 mx-auto" style={{ flex: 1, padding: "30px" }}>
      <div className="info1">
        <h1 className='text-white lg:text-5xl text-3xl font-semibold mb-3'>{title}</h1>
        <div className="detail" style={{ display: "flex" }}>
          <img className='animate-bounce' src={imgSrc} alt="" />
          <p style={{ paddingTop: "2px", paddingLeft: "12px", fontSize: "16px", color: "white" }}>{description}</p>
        </div>
      </div>
    </div>
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://blu-e-startup-backend.vercel.app/api/contact', formData);
      console.log('Form submitted successfully', response.data);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Error submitting form: ' + error.message);
    }
  };

  return (
    <>
      <IntroPart
        imgSrc={img1}
        title="Contact Us"
        description="Get in touch today"
        description1="We Will Respond Soon!"
        buttonLink="/about"
        buttonText="ABOUT US"
      />
      <div data-aos="zoom-out" data-aos-duration="1500" className="contactpart bg-indigo-50 dark:bg-slate-950 pt-20 md:pt-40">
        <div className="contactsection md:w-4/5 md:mx-auto mx-4 py-10 md:py-20 rounded-lg shadow-lg shadow-slate-600" style={{ background: 'linear-gradient(113deg, rgba(9, 31, 91, 0.96) 20%, rgba(18.48, 26.12, 60.06, 0.77) 44%, rgba(25.47, 27.82, 60.60, 0.46) 70%, rgba(35.88, 30.35, 61.41, 0) 100%)' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center items-start">
            <ContactInfo
              title="On Call"
              imgSrc={img2}
              description="+91 7620087268"
            />
            <ContactInfo
              title="On Whatsapp"
              imgSrc={img2}
              description="+91 7620087268"
            />
            <ContactInfo
              title="On Site"
              imgSrc={img3}
              description={
                <div>
                  Saoji restaurant, beside <br />
                  Haldiram, Utkarsh Nagar, <br />
                  Gittikhadan, Nagpur, <br />
                  Maharashtra 440013
                </div>
              }
            />
            <ContactInfo
              title="On Mail"
              imgSrc={img4}
              description={<a href='mailto:shashtavbharat.official@gmail.com'>shashtavbharat.official@gmail.com</a>}
            />
          </div>

          <div data-aos="fade-up" data-aos-duration="1500" className="form lg:mx-12 md:mx-8 mx-4 bg-slate-200 dark:bg-gray-700 rounded" style={{ padding: "20px" }}>
            <h1 className='text-lg dark:text-yellow-100 md:text-3xl' style={{ margin: "10px", fontFamily: "sans-serif" }}>Send us a message!</h1>
            <form onSubmit={handleSubmit} className='justify-center items-center p-2 sm:p-2'>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                  <input type="text" id="first_name" name="name" value={formData.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded" placeholder="John" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded" placeholder="12345678" required />
                </div>
              </div>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded" placeholder="john.doe@company.com" required />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded" placeholder="Subject" required />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded" placeholder="Message" required />
              </div>
              <button type="submit" className="block m-auto justify-center items-center text-white bg-yellow-400 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded animate-zoom">
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contack;
