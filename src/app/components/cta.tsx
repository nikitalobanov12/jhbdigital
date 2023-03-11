
import CarouselComponent from "./carousel";
import React from "react";
import CalendlyWidget from "./calendly";
import Image from "next/image";
import btwflip from "public/transition-blacktowhite.svg";

export default function CTA() {
    return (
      <>
        <Image
          src={btwflip.src}
          alt="transition"
          width={btwflip.width}
          height={btwflip.height}
          className="rotate-180"
        ></Image>
        <section className="text-white">
          <div className="gap-8 items-center py-8 px-4 mx-auto  xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <CarouselComponent></CarouselComponent>
            {/* <Image className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image"/>
        <Image className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"/> */}
            <div className="m-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold ">
                Short form marketing services
              </h2>
              <ul className="text-lg  marker:text-primary-500 ">
                <li className="leading-normal list-disc">
                  Your own personal & dedicated Creative Director <br /> <br />
                </li>
                <li className="leading-normal list-disc">
                  100% Done-For-You Custom Short-Form Video Creation <br />{" "}
                  <br />
                </li>
                <li className="leading-normal list-disc">
                  {" "}
                  Unlimited custom short-form videos per month <br /> <br />
                </li>
                <li className="leading-normal list-disc">
                  Personal File Portal for easy and simple file transfer <br />{" "}
                  <br />
                </li>
                <li className="leading-normal list-disc">
                  Repurposing of existing long-form content <br /> <br />
                </li>
                <li className="leading-normal list-disc">
                  Direct real time messenger support through your private Slack
                  Channel <br /> <br />
                </li>
                <li className="leading-normal list-disc">
                  Unlimited Iterations on your videos (If you&apos;re not happy,
                  I&apos;m not happy) <br /> <br />
                </li>
                <li className="leading-normal list-disc">
                  100% Done-For-You Script writing (all you have to do is
                  film) <br /> <br />
                </li>
                <li className="leading-normal list-disc">
                  Custom video content tracker to see all content created and
                  posted <br /> <br />
                </li> 
                <li className="leading-normal list-disc">
                  Outsource digital marketing services to a dedicated team led by an 
                  
                  <br /><br />
                </li>
                <li className="leading-normal list-disc">
                  BONUS: Director-in-your-pocket: I will go live on FaceTime
                  with you while you record to help you record your content so
                  you never shoot a bad video again <br /> <br />
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="text-white">
          <div className="py-8 px-4 mx-auto  sm:py-16 lg:px-6">
            <div className="mx-auto text-center">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight e">
                Ready to scale with short-form video? <br />
                <br />
                Schedule a call with me below
              </h2>
              <p className="mb-6 font-light  md:text-lg max-w-3xl mx-auto">
                {" "}
                On this call, we&apos;ll have a quick chat to discuss your situation
                and how I might be able to help you. <br /> <br /> Even if you
                decide we&apos;re not a good fit, you&apos;ll walk away with a bespoke
                short-form content strategy that you can use to build instant
                credibility in your niche.
              </p>
              <div>
                <CalendlyWidget></CalendlyWidget>
              </div>
            </div>
          </div>
        </section>
      </>
    );
    
}