import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 mt-16">
              Why Short-Form Content Marketing Matters
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h3 className="text-xl font-semibold mb-2">
              What is Short-Form Content Marketing?
            </h3>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h3 className="text-xl font-semibold mb-2">
              How is it Relevant to B2B Businesses?
            </h3>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h3 className="text-xl font-semibold mb-2">
              My Simple 3-Step Process:
            </h3>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h3 className="text-xl font-semibold mb-2">Social Proof</h3>
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/info-image.jpg"
              alt="Info Image"
              className="rounded-md shadow-md"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
