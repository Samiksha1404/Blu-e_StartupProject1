
import React, { useState } from 'react';
import axios from 'axios';
function Location() {
  
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    // Call your handleSubmit function
    handleSubmit();
    // Optionally, reset the color after some time if needed
    setTimeout(() => setIsClicked(false), 300); // reset color after 300ms
  };

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
      const response = await axios.post('http://localhost:3000/api/contact', formData);
      console.log('Form submitted successfully', response.data);
      // Optionally, you can reset the form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form', error); // Log the error
      alert('Error submitting form'); // Notify the user about the error
    }
  };
  return (
    <>

      <div className="mapContainer" style={{ width: "100%", height: "630px" }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836486.5165860937!2d73.31880271054936!3d20.110301622206393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1b22a4888e3%3A0xaa79f1ad395b4b3c!2sBlu-E%20Charging%20Station!5e0!3m2!1sen!2sin!4v1714134521326!5m2!1sen!2sin" width="100%" height="600px" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>

      <div data-aos="fade-up" data-aos-duration="2000">
        <h1 data-aos="fade-down" data-aos-duration="1000"  className="text-center font-[surban] text-base md:text-lg lg:text-xl text-indigo-900 my-4 dark:text-blue-300">Contact Us We Will Respond Soon!</h1>
        <h1 data-aos="fade-down" data-aos-duration="1000" className="text-center font-[surban] text-2xl lg:text-3xl xl:text-4xl  md:text-xl lg:text-2xl text-black mb-6 dark:text-slate-100">Get In Touch With Nearest Local <br /> Business Sales Executive</h1>
        <h1 data-aos="fade-down" data-aos-duration="1000"  className="text-center font-[surban] text-base md:text-lg lg:text-xl text-indigo-900 my-4 dark:text-blue-300">Add Feedback of your experience.</h1>
  
        <form  data-aos="slide-down" data-aos-duration="1500"  onSubmit={handleSubmit} className='lg:pl-32 lg:pr-32 justify-center item-center p-2 sm:p-2 mx-2'>
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

    </>
  )
}

export default Location