import React from "react";
import Image from "next/image";
import jordan from "public/jordan2.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className=" bg-background min-h-screen flex flex-col justify-center items-center  p-4 mb-16 md:mb-0">
        <div className="flex flex-col md:flex-row items-center justify-start md:justify-around">
          <div>
            <div className="text-center md:text-left m-4">
              <h1 className="text-4xl mt-12 font-bold text-white mb-4">
                Hi, I&apos;m{" "}
                <span className="text-primary-text italic">Jordan </span>
              </h1>
              <h2 className="text-xl font-semibold text-white mb-8">
                I aim to assist{" "}
                <span className="text-primary-text italic">
                  {" "}
                  Coaches, Consultants, and agencies
                </span>{" "}
                incorperate
                <span className="text-primary-text italic">
                  {" "}
                  short-form-content
                </span>{" "}
                into their marketing strategy. <br />
                <br /> I create
                <span className="text-primary-text italic">
                  {" "}
                  authoritative and engaging
                </span>{" "}
                short-form video content for you, <br /> allowing you to
                concentrate working
                <span className="text-primary-text italic"> ON </span> your
                business rather than
                <span className="text-primary-text italic"> IN</span> your
                business. <br />
                <br /> By working together, you can
                <span className="text-primary-text italic">
                  {" "}
                  save time
                </span>{" "}
                that would otherwise be spent on
                <span className="text-primary-text italic">
                  {" "}
                  low-quality freelancers,{" "}
                </span>{" "}
                <br /> establishing a strong personal brand and social media
                presence to{" "}
                <span className="text-primary-text italic">
                  {" "}
                  dominate your niche
                </span>
                . <br />
                <br /> With{" "}
                <span className="text-primary-text italic">
                  monthly short-form videos
                </span>
                , you can attract inbound leads and grow your business.
              </h2>
            </div>
          </div>
          <div className="m-4">
            <Image
              src={jordan.src}
              alt="Hero Image"
              className="rounded-md shadow-md"
              width={500}
              height={500}
            />
          </div>
          </div>
          <Link
            className=" bg-primary-text p-2 m-4 text-xl w-1/2 font-bold mx-auto text-center rounded-lg text-background hover:text-white hover:bg-secondary-800 transition"
            href={"/contact"}
          >
            Book a Call
          </Link>
      </div>
    </>
  );
};

export default Hero;
