import React from 'react'
import elipse from '../../assets/elipse.svg'
import co2 from '../../assets/co2.svg'
const HomeSubPage7 = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row bg-blue-900 dark:bg-blue-950  pt-9 items-center">

            <div className="lg:w-[726px]" data-aos="fade-left" data-aos-duration="1000">
             <img src={co2} alt="reducing co2" className="w-full" />
            </div>

            <div className="bg-white dark:bg-slate-800  md:p-10 p-4 lg:w-[656px] md:text-[20px] lg:h-[499px] flex flex-col justify-center"  data-aos="fade-right" data-aos-duration="1000">
                <p className="dark:text-slate-300 text-justify">Smart electric car charging is an entirely new reality. Each morning you will find a fully served charged car. Also, it will have charged overnight when the electricity is cheapest and it has been able to contribute to the power grid network, also it be needed in language, currency, and tax regulations.</p>

             <ul class="space-y-2 md:text-xl  text-slate-800 dark:text-slate-300 font-bold mt-6">
              <li class="flex space-x-3 "><img src={elipse} alt="" class="w-5 mt-1"/><p>Reducing CO2 emissions by manufacturing locally.</p></li>
              <li class="flex space-x-3 "><img src={elipse} alt="" class="w-5 mt-1"/><p> Global supply chain for continuous improvement.</p></li>
            </ul>

            </div>
        </div>
    </div>
  )
}

export default HomeSubPage7