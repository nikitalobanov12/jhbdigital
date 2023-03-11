"use client";
import Link from "next/link";
import Image from "next/image";
import willgill from "public/will-gill-pic.jpg";
import { ScriptTarget } from "typescript";
export default function Hero() {
  return (
    <>
      {" "}
      <section className="text-white min-h-screen flex  items-center">
        <div className="grid max-w-screen-xl py-8 px-3 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mt-12 mr-auto place-self-center lg:col-span-7">
            <p className="max-w-2xl mb-6 font-normal  lg:mb-8 md:text-lg lg:text-xl underline underline-offset-4 text-gray-200">
              {" "}
              Coaches, Agency Owners & Experts:
            </p>
            <h1 className="max-w-2xl mb-4 text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl ">
              {" "}
              I will script, edit, and post<span className="italic font-semibold text-primary-500"> unlimited short-form videos</span> for your
              brand, <br /> <br />  100%<span className="italic font-semibold text-primary-500"> done for you.</span> <br /> <br /> If you don&apos;t get  <span className="italic font-semibold text-primary-500">100,000
              views in 90 days</span>, you don&apos;t pay.
            </h1>
          
            <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-200">
              <br />
              all you have to do is film
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  rounded-lg bg-primary-500 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 transition-all"
            >
Book a Call              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
            <div className="bg-secondary-200 text-black rounded-lg max-w-fit flex p-4 mt-4">
              &quot;Jordan is the man behind the magic&quot; <br /> - William
              Gill, Fit Boss Coaching
              <div className="flex flex-wrap gap-2">
                <Link
                  className="hover:scale-105 transition-all"
                  target="_blank"
                  href={"https://www.instagram.com/william.gill/"}
                >
                  <Image
                    src={willgill.src}
                    alt="William Gill Avatar"
                    width={willgill.width}
                    height={willgill.height}
                    className="ml-2 inline-block h-14 w-14 rounded-full ring-2 ring-white"
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
      
            <iframe
              src="https://fast.wistia.net/embed/iframe/zc4uqvwyi9"
              title="VSL Video"
              allow="autoplay; fullscreen"
              frameBorder="0"
              scrolling="no"
              width={361}
              height={641}
              className="wistia_embed"
              name="wistia_embed"
            ></iframe>
     
        </div>
      </section>
    </>
  );
}
