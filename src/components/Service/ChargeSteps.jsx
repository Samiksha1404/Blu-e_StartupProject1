import React from 'react';
import stepbackImage from '../../assets/3.jpg'; // Adjust the path according to your file structure

const ChargeSteps = () => {
    return (
        <div className="">


            {/* How To Charge Section */}
            <div className="relative w-screen h-full">
                <div
                    className="absolute inset-0 bg-fixed bg-center bg-cover"
                    style={{ backgroundImage: `url(${stepbackImage})` }}
                >
                    <div className="absolute inset-0 bg-yellow-400/40 dark:bg-yellow-950/50" ></div>
                </div>

                <div  data-aos="fade-down" data-aos-duration="1000" className="relative py-16 px-8 text-center animate-fade-in">
                    <h1 className="text-5xl text-white dark:text-slate-200 font-bold ">PLUG CHARHE AND GO</h1>
                    <h2 className="text-3xl font-semibold mt-4 text-blue-950 dark:text-indigo-300">3 Ways to charge with steps.  </h2>
                    <p className="text-xl mt-4 text-black dark:text-slate-400 font-['Rubik']">Experience A Real Hassle-Free Charging with Blu-E</p>
                </div>

                <div  data-aos="slide-up" data-aos-duration="1000" className="relative grid grid-cols-1 md:grid-cols-2 gap-8 px-8 pb-16">
                    <div data-aos="slide-down" data-aos-duration="1000" className="space-y-8 animate-fade-in-left text-white">
                        <h3 className="text-4xl font-semibold   text-center ">How To Charge?</h3>
                        <div className="space-y-4">
                            <div data-aos="slide-down" data-aos-duration="1000" className=" bg-yellow-400/80  dark:bg-yellow-600/80 p-6 rounded-lg shadow-lg animate-slide-up" >
                                <h4 className="mt-2 text-lg font-semibold">STEP-1</h4>
                                <p>Download Plugeasy from App Store or Play Store.</p>
                            </div>
                            <div data-aos="slide-down" data-aos-duration="1000" className=" bg-yellow-400/80 dark:bg-yellow-600/80  p-6 rounded-lg shadow-lg animate-slide-up delay-100" >
                                <h4 className="mt-2 text-lg font-semibold">STEP-2</h4>
                                <p>Locate the charging station or press the Scan Button.</p>
                            </div>
                            <div data-aos="slide-down" data-aos-duration="1000" className=" bg-yellow-400/80 dark:bg-yellow-600/80 p-6 rounded-lg shadow-lg animate-slide-up delay-200"  >
                                <h4 className="mt-2 text-lg font-semibold">STEP-3</h4>
                                <p>Scan the QR code or enter the ID on the charger.</p>
                            </div>
                            <div data-aos="slide-down" data-aos-duration="1000" className=" bg-yellow-400/80 dark:bg-yellow-600/80  p-6 rounded-lg shadow-lg animate-slide-up delay-300" >
                                <h4 className="mt-2 text-lg font-semibold">STEP-4</h4>
                                <p>Select Preferred Amount or Duration of your Charge.</p>
                            </div>
                            <div data-aos="slide-down" data-aos-duration="1000" className=" bg-yellow-400/80 dark:bg-yellow-600/80 p-6 rounded-lg shadow-lg animate-slide-up delay-400">
                                <h4 className="mt-2 text-lg font-semibold">STEP-5</h4>
                                <p>Slide to Charge after adding enough balance in your app wallet.</p>
                            </div>
                            <div data-aos="slide-down" data-aos-duration="1000" className=" bg-yellow-400/80 dark:bg-yellow-600/80 p-6 rounded-lg shadow-lg animate-slide-up delay-500">
                                <h4 className="mt-2 text-lg font-semibold">STEP-6</h4>
                                <p>Wait for your EV to charge up fully or Stop Charging according to your convenience.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-yellow-500 bg-opacity-90 inset-0 py-16 px-8 space-y-8 rounded-lg shadow-lg animate-fade-in-right">
                        <h3 className="text-4xl text-blue-950 font-semibold text-center">Appless Charging?</h3>
                        <p className="text-xl text-center">Charg... Oh done already?!</p>
                        <div className="space-y-4">
                            <div  data-aos="slide-up" data-aos-duration="1000"  className=" bg-white dark:bg-yellow-200 p-6 rounded-lg shadow-2xl animate-slide-up">
                                <h4 className="mt-2 text-lg font-semibold">Step-1</h4>
                                <p>Scan the QR code through mobile camera or Google Lens.</p>
                            </div>
                            <div data-aos="slide-up" data-aos-duration="1000"  className="bg-white dark:bg-yellow-200  p-6 rounded-lg shadow-lg animate-slide-up delay-100">
                                <h4 className="mt-2 text-lg font-semibold">Step-2</h4>
                                <p>Enter your Mail Id and Mobile Number.</p>
                            </div>
                            <div data-aos="slide-up" data-aos-duration="1000"  className="bg-white dark:bg-yellow-200  p-6 rounded-lg shadow-lg animate-slide-up delay-200">
                                <h4 className="mt-2 text-lg font-semibold">Step-3</h4>
                                <p>Check Balance and Select the amount and Duration to proceed Charging.</p>
                            </div>
                        </div>
                        
                        <div className="">
                            <h3 className="  text-center text-blue-950 text-3xl font-semibold ">
                               Tap and Charge ?
                            </h3>
                            <div  data-aos="slide-up" data-aos-duration="1000" className="mt-8 space-y-4">
                                <div className="bg-white dark:bg-yellow-200  p-6 rounded-lg shadow-lg animate-slide-up">
                                    <h4 className="mt-2 text-lg font-semibold">STEP-1</h4>
                                    <p>Enter your RFID code and press "Add RFID" to register.</p>
                                </div>
                                <div data-aos="slide-up" data-aos-duration="1000"  className="bg-white dark:bg-yellow-200  p-6 rounded-lg shadow-lg animate-slide-up delay-100">
                                    <h4 className="mt-2 text-lg font-semibold">STEP-2</h4>
                                    <p>Make sure you always have enough balance to charge hassle-free through RFID tag.</p>
                                </div>
                                <div  data-aos="slide-up" data-aos-duration="1000" className="bg-white dark:bg-yellow-200  p-6 rounded-lg shadow-lg animate-slide-up delay-200">
                                    <h4 className="mt-2 text-lg font-semibold">STEP-3</h4>
                                    <p>Tap the RFID tag on the RFID reader, in the charger to charge.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChargeSteps;
