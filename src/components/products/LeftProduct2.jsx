import React from 'react';

// Feature component definition
function Feature({ src, alt, title }) {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-sm font-semibold text-center text-blue-950 max-md:mt-10">
        <img loading="lazy" src={src} alt={alt} className="self-center" />
        <div className="mt-7 dark:text-blue-300">{title}</div>
      </div>
    </div>
  );
}

// LeftProduct2 component definition
const LeftProduct2 = ({ heading, subheading, imgsrc }) => {
  const features = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4171ab21e8f5ae9e4150a31981fa8cf969458c435ca817ae0c2d65613d1b181d?apiKey=d7e5bab79af041058fcada747b413e1e&", alt: "A flexible space", title: "Space flexibility" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b89f495ac10a8a04fc7bff38772b5ef960dc3742093c3434f62e0c230039329?apiKey=d7e5bab79af041058fcada747b413e1e&", alt: "Scalable solution", title: "Scalability" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/249d20ea1b4cd2d962d2916db56b2aa29920e85fe67966179ca0ed0c9f4c5386?apiKey=d7e5bab79af041058fcada747b413e1e&", alt: "Cost-effective solution", title: "Cost-effective" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4972f57573a386c6bcae7c957dc7675b7949f1fae44ae54c5519b3213f9be6d0?apiKey=d7e5bab79af041058fcada747b413e1e&", alt: "Adaptive solution", title: "Adaptability" },
  ];

  return (
    <>
      {/* product1 */}
      <div className='p-4'>
        <div className="flex flex-col lg:flex-row  dark:bg-white  items-center w-fit mx-auto">
          {/* image */}
          <div className="lg:w-[526px] flex items-center justify-center">
            <img src={imgsrc} alt="" className="w-[330px] h-[500px] lg:pl-8" />
          </div>

          <div className="bg-white dark:bg-slate-800 md:p-10 p-4 lg:w-[756px] md:text-[20px] lg:h-[499px] flex flex-col justify-center gap-2">
            {/* heading */}
            <h1 className="lg:text-[48px] md:text-[42px] text-[24px] font-semibold dark:text-indigo-400 text-black font-['Rubik']">{heading}</h1>
            <h1 className="lg:text-[20px] md:text-[25px] text-[18px] text-blue-950 dark:text-blue-300" >{subheading}</h1>
            <p className="dark:text-slate-400 md:ml-0 ml-4 pt-4 text-zinc-600 text-justify">
              This product features advanced functions like power transformation, charging control, interactive man-machine control, and network communications. The charger’s power conversion unit adopts a modular design, allowing flexible configuration for power output ranging from 30kW to 40kW. This ensures compatibility with various electric vehicle capacities. Together with the IP55 rating, it is an optimal solution for efficient outdoor fast DC charging.
            </p>

            <main className="flex flex-col">
              <section className="px-5 mt-4 max-md:w-full w-[565px]">
                <div className="flex gap-5 max-md:flex-col max-md:gap-2">
                  {features.map((feature, index) => (
                    <Feature key={index} src={feature.src} alt={feature.alt} title={feature.title} />
                  ))}
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>

      <div className=" max-w-[481px] min-h-[30px] bg-gradient-to-r from-yellow-300 via-yellow-400 to-slate-10 flex items-center justify-center mt-6 mb-6"></div>
    </>
  );
}

export default LeftProduct2;
