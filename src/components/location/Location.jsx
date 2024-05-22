import React from 'react'

function Location() {
  return (
    <>

      <div className="mapContainer" style={{ width: "100%", height: "630px"}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836486.5165860937!2d73.31880271054936!3d20.110301622206393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c1b22a4888e3%3A0xaa79f1ad395b4b3c!2sBlu-E%20Charging%20Station!5e0!3m2!1sen!2sin!4v1714134521326!5m2!1sen!2sin" width="100%" height="600px" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>

     <div>
     <h1 className="text-center font-[surban] text-base md:text-lg lg:text-xl text-indigo-900 my-4 dark:text-blue-300">Contact Us We Will Respond Soon!</h1>
     <h1 className="text-center font-[surban] text-2xl lg:text-3xl xl:text-4xl  md:text-xl lg:text-2xl text-black mb-6 dark:text-slate-100">Get In Touch With Nearest Local <br/> Business Sales Executive</h1>

     <form className='lg:pl-32 lg:pr-32 justify-center item-center p-2 sm:p-2'>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
         
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        
    </div>
    <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
    </div> 
    <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
        <textarea type="Message" id="message" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message" required />
    </div> 
    <button type="submit" className="block m-auto  justify-center items-center text-white bg-yellow-300 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  Submit
</button>

</form>

</div>

    </>
  )
}

export default Location