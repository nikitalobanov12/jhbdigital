import React from "react";
import Image from "next/image";
import jordan from "public/jordan2.jpg";

const Hero = () => {
  return (
    <div className="relative bg-background min-h-screen flex flex-col md:flex-row items-center py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:w-1/2">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-white mb-4">
            This is the About section
          </h1>
          <h2 className="text-2xl font-semibold text-white mb-8">
          
          </h2>
        </div>
      </div>
      <div className="md:w-1/2">
        <Image
          src={jordan.src}
          alt="Hero Image"
          className="rounded-md shadow-md"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Hero;
