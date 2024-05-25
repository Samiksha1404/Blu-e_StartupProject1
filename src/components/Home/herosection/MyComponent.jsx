import * as React from "react";

function MyComponent({ title,title1,title2, subtitle, description, linkText, linkUrl, imageUrl }) {
  return (
    <main className="flex flex-col items-start h-[80px] pl-32 font-semibold text-black max-md:px-5">
      <h1 className="mt-12 text-7xl leading-[80px] font-bold max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
      {title}<br/>
        {title1} <br/>{title2}
        
      </h1>
      <h2 className="mt-12 ml-20 text-6xl italic text-center text-yellow-300 max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
        {subtitle}
      </h2>
      <p className="mt-8 ml-14 text-2xl max-md:mt-10 max-md:ml-2.5">
        {description}
      </p>
      <div className="relative pt-12">
      <img
          loading="lazy"
          src={imageUrl}
          alt=""
          className="object-cover absolute inset-0 pt-8 "
        />
      <a
        className="overflow-hidden relative flex-col justify-center items-start px-14 py-7 mt-12 ml-3.5 max-w-full text-lg italic text-center text-white hover:text-yellow-400 aspect-[3.42] fill-blue-950 w-[236px] max-md:px-5 max-md:mt-10 max-md:ml-2.5"
        href={linkUrl}
        tabIndex="0"
      >
        {linkText} &gt;
      </a>
      </div>
    </main>
  );
}

export default MyComponent;



