import React from "react";
import Image from "next/image";


const Hero = () => {
  return (
    <>
      <div className="relative bg-background min-h-[85vh] flex items-center py-16">
        <div className="max-w-7xl flex flex-col items-center md:flex-row mx-auto  sm:px-6 lg:px-8">
          <div className="text-left px-4 ">
            <h1
              className="text-2xl md:text-5xl font-bold  italic
            text-primary-500 mb-4 capitalize"
            >
              Short form content marketing
            </h1>
            <p className="text-white text-lg md:text-xl -">
              Find out how I am using short form content marketing to help my clients:
            </p>
            <ul className="text-lg md:text-xl mt-4 mb-8 text-white text-left list-inside ">
              <li className="list-disc leading-loose  ">
                Attract leads with ease
              </li>
              <li className="list-disc leading-loose ">
                Establish authority 
              </li>
              <li className="list-disc leading-loose ">
                Easily close sales calls
              </li>
              <li className="list-disc leading-loose ">
               Scale marketing systems
              </li>
              <li className="list-disc leading-loose ">
                Keep up with new technology
              </li>
              <li className="list-disc leading-loose ">
                Avoid spending any money on ads
              </li>
            </ul>
          </div>

          <iframe
            src="https://fast.wistia.net/embed/iframe/zc4uqvwyi9"
            title="VSL Video"
            allow="autoplay; fullscreen"
            frameBorder="0"
            scrolling="no"
            width={361}
            height={641}
            className="wistia_embed mx-4"
            name="wistia_embed"
          ></iframe>
        </div>
      </div>
      <div className="width-full flex justify-center items-center translate-y-5 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#FABA1D"
          className="w-12 h-12 animate-bounce justify-self-center"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </>
  );
};

export default Hero;
